/**
 * Aktualności: wydarzenia (z datą wydarzenia) i artykuły (z datą publikacji).
 * Wydarzenia z datą w przeszłości trafiają do archiwum — bez usuwania z site.md.
 */
import type { NewsItem, SiteData } from "./site-schema";

export interface NewsView {
  upcoming: NewsItem[];
  archive: NewsItem[];
  articles: NewsItem[];
}

export function splitNews(data: SiteData, today: string): NewsView {
  const events = data.news.filter((n) => n.kind === "wydarzenie");
  return {
    upcoming: events
      .filter((n) => n.date >= today)
      .sort((a, b) => a.date.localeCompare(b.date)),
    archive: events
      .filter((n) => n.date < today)
      .sort((a, b) => b.date.localeCompare(a.date)),
    articles: data.news
      .filter((n) => n.kind === "artykuł")
      .sort((a, b) => b.date.localeCompare(a.date)),
  };
}

/** Stabilny identyfikator wpisu, np. „2027-02-14-warsztaty-mandali”. */
export function newsId(item: NewsItem): string {
  return `${item.date}-${slugify(item.title)}`.slice(0, 80);
}

export function slugify(text: string): string {
  const map: Record<string, string> = {
    ą: "a",
    ć: "c",
    ę: "e",
    ł: "l",
    ń: "n",
    ó: "o",
    ś: "s",
    ź: "z",
    ż: "z",
  };
  return text
    .toLowerCase()
    .replace(/[ąćęłńóśźż]/g, (c) => map[c] ?? c)
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
