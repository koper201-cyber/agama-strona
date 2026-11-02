/**
 * Schemat pliku site.md (część YAML między liniami ---).
 * To jest jedyne źródło prawdy o tym, jakie pola są dozwolone.
 * Komunikaty błędów tłumaczy na polski scripts/validate-site.ts.
 */
import { z } from "zod";

/** Puste napisy "" traktujemy jak brak wartości. */
const optionalText = z.preprocess(
  (v) => (typeof v === "string" && v.trim() === "" ? undefined : v),
  z.string().trim().optional(),
);

const requiredText = z
  .string({ error: "brak wartości" })
  .trim()
  .min(1, "pole jest puste");

/** Link http(s), mailto: lub kotwica (#sekcja) albo ścieżka (/strona/). */
const linkPattern =
  /^(https?:\/\/[^\s\\]+|mailto:[^\s\\]+|tel:[^\s\\]+|#[^\s\\]*|\/(?!\/)[^\s\\]*)$/;
const safeLink = (value: string): boolean => {
  if (
    !linkPattern.test(value) ||
    Array.from(value).some(
      (char) => char.charCodeAt(0) <= 32 || char.charCodeAt(0) === 127,
    )
  )
    return false;
  if (/^https?:/.test(value)) {
    try {
      const url = new URL(value);
      return Boolean(url.hostname) && !url.username && !url.password;
    } catch {
      return false;
    }
  }
  return true;
};
const optionalLink = z.preprocess(
  (v) => (typeof v === "string" && v.trim() === "" ? undefined : v),
  z
    .string()
    .trim()
    .refine(
      safeLink,
      "niepoprawny link — użyj https://…, mailto:… albo #sekcja",
    )
    .optional(),
);
const socialLink = optionalLink.refine(
  (v) => v === undefined || v.startsWith("https://"),
  "link profilu musi zaczynać się od https://",
);
const requiredLink = z
  .string({ error: "brak linku" })
  .trim()
  .refine(safeLink, "niepoprawny link — użyj https://…, mailto:… albo #sekcja");

/** Nazwa pliku z folderu zdjecia/ (bez ścieżki). */
const imageName = z
  .string()
  .trim()
  .regex(
    /^[^/\\]+\.(jpe?g|png|webp|avif|heic|heif)$/i,
    "to nie wygląda na nazwę pliku zdjęcia (np. mandala.jpg)",
  );
const optionalImage = z.preprocess(
  (v) => (typeof v === "string" && v.trim() === "" ? undefined : v),
  imageName.optional(),
);

/** Data RRRR-MM-DD. YAML zamienia ją na obiekt Date — wtedy też akceptujemy. */
const isoDate = z.union([z.date(), z.string()]).transform((v, ctx) => {
  if (v instanceof Date) {
    if (Number.isNaN(v.getTime())) {
      ctx.addIssue({
        code: "custom",
        message: "zła data — użyj formatu RRRR-MM-DD, np. 2027-02-14",
      });
      return z.NEVER;
    }
    return v.toISOString().slice(0, 10);
  }
  const s = v.trim();
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(s);
  const d = m ? new Date(`${s}T00:00:00Z`) : null;
  if (
    !m ||
    !d ||
    Number.isNaN(d.getTime()) ||
    d.toISOString().slice(0, 10) !== s
  ) {
    ctx.addIssue({
      code: "custom",
      message: `zła data «${s}» — użyj formatu RRRR-MM-DD, np. 2027-02-14`,
    });
    return z.NEVER;
  }
  return s;
});

const price = z
  .number({
    error: "cena musi być samą liczbą (np. 300), bez „zł” i „PLN”",
  })
  .nonnegative("cena nie może być ujemna");

const hexColor = (example: string) =>
  z
    .string()
    .regex(/^#[0-9a-fA-F]{6}$/, `kolor w formacie #RRGGBB, np. ${example}`);

export const themes = ["natural-warm", "agama"] as const;
export const pageTemplates = ["tekstowa", "oferta", "galeria"] as const;
export const newsKinds = ["wydarzenie", "artykuł"] as const;
export const homeKinds = ["lista", "duet", "galeria"] as const;
export const homePositions = ["po-o-mnie", "po-galerii"] as const;
/** Adresy zajęte przez stałe strony. */
export const RESERVED_SLUGS = [
  "aktualnosci",
  "polityka-prywatnosci",
  "dziekuje",
  "404",
  "robots.txt",
  "sitemap-index.xml",
];

/** Zdjęcie z opisem (galerie). */
const photo = z.object({ image: imageName, alt: requiredText }).strict();

export const productStatuses = [
  "dostępna",
  "sprzedana",
  "na zamówienie",
] as const;

export const siteSchema = z
  .object({
    site: z
      .object({
        name: requiredText,
        type: z.enum(["Person", "LocalBusiness"]).default("Person"),
        domain: optionalText.refine(
          (v) => v === undefined || /^[a-z0-9.-]+\.[a-z]{2,}$/i.test(v),
          "podaj samą domenę, np. example.pl (bez https://)",
        ),
        pages_project: optionalText.refine(
          (v) => v === undefined || /^[a-z0-9-]+$/.test(v),
          "nazwa projektu Cloudflare: małe litery, cyfry i myślniki",
        ),
        language: z.string().default("pl"),
        theme: z.enum(themes).default("natural-warm"),
        /** Przyciski, nagłówki, ciemne pasy. */
        primary_color: hexColor("#8A6C63").default("#8A6C63"),
        /** Ozdoby: kropki, ramki, wyróżnione słowa (motyw agama). */
        accent_color: hexColor("#63AD9F").default("#63AD9F"),
        /** Tło strony (motyw agama). */
        background_color: hexColor("#F7F5EF").default("#F7F5EF"),
        /** Krótki podpis przy nazwie w nagłówku, np. „AGAMA”. */
        tagline: optionalText,
        /** Nazwa w nagłówku z wyróżnieniem, np. "Agnieszka *Marciniak*". */
        brand: optionalText,
        /** Krótki tekst w stopce. */
        footer_text: optionalText,
        city: optionalText,
        logo: optionalImage,
      })
      .strict(),
    seo: z
      .object({
        title: requiredText,
        description: requiredText,
        image: optionalImage,
      })
      .strict(),
    contact: z
      .object({
        email: z
          .string({ error: "brak adresu e-mail" })
          .trim()
          .pipe(z.email("niepoprawny adres e-mail")),
        phone: optionalText,
        address: optionalText,
        form_key: optionalText,
        /** Nagłówek i zachęta nad danymi kontaktowymi (motyw agama). */
        eyebrow: optionalText,
        heading: optionalText,
        intro: optionalText,
        instagram: socialLink,
        facebook: socialLink,
        linkedin: socialLink,
        github: socialLink,
        website: socialLink,
      })
      .strict(),
    hero: z
      .object({
        eyebrow: optionalText,
        heading: requiredText,
        subheading: optionalText,
        text: optionalText,
        cta_label: optionalText,
        cta_link: optionalLink,
        cta2_label: optionalText,
        cta2_link: optionalLink,
        image: optionalImage,
        alt: optionalText,
        badge: optionalText,
      })
      .strict(),
    about_photo: z
      .object({ image: imageName, alt: requiredText, caption: optionalText })
      .strict()
      .optional(),
    features: z
      .object({
        about: z.boolean().default(true),
        offer: z.boolean().default(true),
        products: z.boolean().default(false),
        workshops: z.boolean().default(false),
        testimonials: z.boolean().default(false),
        contact: z.boolean().default(true),
        news: z.boolean().default(false),
        stats: z.boolean().default(false),
        quote: z.boolean().default(false),
        gallery: z.boolean().default(false),
        clients: z.boolean().default(false),
      })
      .strict()
      .prefault({}),
    offer: z
      .array(
        z
          .object({
            label: optionalText,
            title: requiredText,
            text: optionalText,
            price: optionalText,
            link: optionalLink,
            link_label: optionalText,
          })
          .strict(),
      )
      .default([]),
    products: z
      .array(
        z
          .object({
            name: requiredText,
            price,
            image: imageName,
            alt: optionalText,
            status: z.enum(productStatuses, {
              error: `status musi być jednym z: ${productStatuses.join(", ")}`,
            }),
            description: optionalText,
          })
          .strict(),
      )
      .default([]),
    workshops: z
      .array(
        z
          .object({
            title: requiredText,
            date: isoDate,
            time: optionalText.refine(
              (v) => v === undefined || /^([01]\d|2[0-3]):[0-5]\d$/.test(v),
              "godzina w formacie GG:MM, np. 18:00",
            ),
            place: requiredText,
            price: price.optional(),
            signup: requiredLink,
            image: optionalImage,
            alt: optionalText,
            description: optionalText,
          })
          .strict(),
      )
      .default([]),
    pillars: z.array(requiredText).default([]),
    /** Wyróżniona karta pod nagłówkiem strony głównej (np. zapowiedź Aktualności). */
    feature: z
      .object({
        eyebrow: optionalText,
        title: requiredText,
        text: optionalText,
        image: optionalImage,
        alt: optionalText,
        link: requiredLink,
        link_label: optionalText,
      })
      .strict()
      .optional(),
    /** Krótka wersja „O mnie” na stronie głównej (pełna jest pod # O mnie). */
    about_intro: z
      .object({
        heading: requiredText,
        paragraphs: z.array(requiredText).default([]),
      })
      .strict()
      .optional(),
    /** Dodatkowe sekcje strony głównej, w kolejności z listy. */
    home_sections: z
      .array(
        z
          .object({
            id: z
              .string()
              .regex(
                /^[a-z0-9]+(-[a-z0-9]+)*$/,
                "id sekcji: małe litery bez polskich znaków i myślniki",
              ),
            kind: z.enum(homeKinds, {
              error: `rodzaj sekcji: ${homeKinds.join(", ")}`,
            }),
            position: z.enum(homePositions).default("po-o-mnie"),
            eyebrow: optionalText,
            heading: requiredText,
            text: optionalText,
            banner: optionalImage,
            banner_alt: optionalText,
            image: optionalImage,
            alt: optionalText,
            items: z
              .array(
                z.object({ title: requiredText, text: optionalText }).strict(),
              )
              .default([]),
            images: z.array(photo).default([]),
            note: optionalText,
            button_label: optionalText,
            button_link: optionalLink,
          })
          .strict(),
      )
      .default([]),
    credentials: z.array(requiredText).default([]),
    stats: z
      .array(z.object({ value: requiredText, label: requiredText }).strict())
      .default([]),
    stats_note: optionalText,
    quote: z
      .object({ text: requiredText, author: optionalText })
      .strict()
      .optional(),
    gallery: z
      .object({
        eyebrow: optionalText,
        heading: optionalText,
        images: z.array(photo).default([]),
      })
      .strict()
      .optional(),
    clients: z
      .object({
        heading: optionalText,
        note: optionalText,
        list: z
          .array(z.object({ name: requiredText, logo: optionalImage }).strict())
          .default([]),
      })
      .strict()
      .optional(),
    pages: z
      .array(
        z
          .object({
            slug: z
              .string({ error: "brak adresu podstrony" })
              .trim()
              .regex(
                /^[a-z0-9]+(-[a-z0-9]+)*$/,
                "adres podstrony: małe litery bez polskich znaków, cyfry i myślniki, np. coaching-biznesowy",
              )
              .refine(
                (v) => !RESERVED_SLUGS.includes(v),
                `ten adres jest zajęty — nie używaj: ${RESERVED_SLUGS.join(", ")}`,
              ),
            title: requiredText,
            template: z.enum(pageTemplates, {
              error: `szablon musi być jednym z: ${pageTemplates.join(", ")}`,
            }),
            menu: z.boolean().default(true),
            eyebrow: optionalText,
            heading: optionalText,
            lead: optionalText,
            image: optionalImage,
            alt: optionalText,
            items_heading: optionalText,
            items: z
              .array(
                z
                  .object({
                    title: requiredText,
                    text: optionalText,
                    link: optionalLink,
                    link_label: optionalText,
                  })
                  .strict(),
              )
              .default([]),
            images: z.array(photo).default([]),
            /** Kształt zdjęć w galerii: koła pasują do mandali. */
            shape: z
              .enum(["prostokąty", "koła"], {
                error: "kształt zdjęć: «prostokąty» albo «koła»",
              })
              .default("prostokąty"),
            quote: optionalText,
            button_label: optionalText,
            button_link: optionalLink,
          })
          .strict(),
      )
      .default([]),
    news_page: z
      .object({
        title: requiredText.default("Aktualności"),
        heading: optionalText,
        lead: optionalText,
        categories: z.array(requiredText).min(1).default(["Wydarzenia"]),
      })
      .strict()
      .prefault({}),
    news: z
      .array(
        z
          .object({
            title: requiredText,
            kind: z
              .enum(newsKinds, {
                error: `rodzaj wpisu: ${newsKinds.join(" albo ")}`,
              })
              .default("wydarzenie"),
            category: requiredText,
            date: isoDate,
            time: optionalText.refine(
              (v) => v === undefined || /^([01]\d|2[0-3]):[0-5]\d$/.test(v),
              "godzina w formacie GG:MM, np. 18:00",
            ),
            place: optionalText,
            price: price.optional(),
            signup: optionalLink,
            image: optionalImage,
            alt: optionalText,
            text: optionalText,
          })
          .strict(),
      )
      .default([]),
    testimonials: z
      .array(
        z
          .object({
            author: requiredText,
            text: requiredText,
          })
          .strict(),
      )
      .default([]),
  })
  .strict();

export type SiteData = z.infer<typeof siteSchema>;
export type Page = SiteData["pages"][number];
export type NewsItem = SiteData["news"][number];
export type Product = SiteData["products"][number];
export type Workshop = SiteData["workshops"][number];

/** Stałe nagłówki sekcji Markdown (pod YAML-em). */
export const SECTION_ABOUT = "O mnie";
export const SECTION_PRIVACY = "Polityka prywatności";
export const KNOWN_SECTIONS = [SECTION_ABOUT, SECTION_PRIVACY] as const;

/** Polskie nazwy pól — do czytelnych komunikatów błędów. */
export const FIELD_LABELS: Record<string, string> = {
  site: "Ustawienia strony (site)",
  seo: "SEO (seo)",
  contact: "Kontakt (contact)",
  hero: "Nagłówek strony (hero)",
  about_photo: "Zdjęcie w O mnie (about_photo)",
  features: "Włączone sekcje (features)",
  offer: "Oferta",
  products: "Produkt",
  workshops: "Warsztat",
  testimonials: "Opinia",
  name: "nazwa",
  title: "tytuł",
  price: "cena",
  image: "zdjęcie",
  date: "data",
  time: "godzina",
  place: "miejsce",
  signup: "link do zapisów",
  status: "status",
  email: "e-mail",
  heading: "nagłówek",
  description: "opis",
  text: "tekst",
  author: "autor",
  primary_color: "kolor główny",
  accent_color: "kolor akcentu",
  background_color: "kolor tła",
  pages: "Podstrona",
  news: "Wpis w Aktualnościach",
  news_page: "Strona Aktualności (news_page)",
  stats: "Liczba",
  gallery: "Galeria (gallery)",
  clients: "Firmy (clients)",
  quote: "Cytat (quote)",
  slug: "adres podstrony",
  template: "szablon",
  category: "kategoria",
  kind: "rodzaj",
  value: "wartość",
  label: "podpis",
  alt: "opis zdjęcia",
  domain: "domena",
  cta_link: "link przycisku",
};
