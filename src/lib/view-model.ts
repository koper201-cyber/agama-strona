import type { SiteData, Workshop } from "./site-schema";

export interface ViewModel {
  visible: Record<keyof SiteData["features"], boolean>;
  nav: { href: string; label: string }[];
  ctaLink: string | undefined;
  workshops: Workshop[];
}

export function buildViewModel(
  data: SiteData,
  sections: Record<string, string>,
  today: string,
): ViewModel {
  const visible = {
    about: data.features.about && Boolean(sections["O mnie"]),
    offer: data.features.offer && data.offer.length > 0,
    products: data.features.products && data.products.length > 0,
    workshops: data.features.workshops,
    testimonials: data.features.testimonials && data.testimonials.length > 0,
    contact: data.features.contact,
    news: data.features.news,
    stats: data.features.stats && data.stats.length > 0,
    quote: data.features.quote && Boolean(data.quote),
    gallery: data.features.gallery && Boolean(data.gallery?.images.length),
    clients: data.features.clients && Boolean(data.clients?.list.length),
  };
  const links: [keyof typeof visible, string, string][] = [
    ["about", "o-mnie", "O mnie"],
    ["offer", "oferta", "Oferta"],
    ["products", "produkty", "Produkty"],
    ["workshops", "warsztaty", "Warsztaty"],
    ["testimonials", "opinie", "Opinie"],
    ["contact", "kontakt", "Kontakt"],
  ];
  const nav = links
    .filter(([key]) => visible[key])
    .map(([, id, label]) => ({ href: `/#${id}`, label }));
  const target = data.hero.cta_link;
  const id = target?.replace(/^\/?#/, "");
  const ctaLink =
    target?.startsWith("#") || target?.startsWith("/#")
      ? nav.some((link) => link.href === `/#${id}`)
        ? target
        : undefined
      : target;
  return {
    visible,
    nav,
    ctaLink,
    workshops: visible.workshops
      ? data.workshops
          .filter((w) => w.date >= today)
          .sort((a, b) => a.date.localeCompare(b.date))
      : [],
  };
}

/** Menu motywu agama: podstrony z site.md (menu: true), Aktualności, potem przycisk Kontakt. */
export function agamaNav(data: SiteData): {
  links: { href: string; label: string }[];
  contact: string | undefined;
} {
  const links = data.pages
    .filter((p) => p.menu)
    .map((p) => ({ href: `/${p.slug}/`, label: p.title }));
  if (data.features.news)
    links.push({ href: "/aktualnosci/", label: data.news_page.title });
  return {
    links,
    contact: data.features.contact ? "/#kontakt" : undefined,
  };
}
