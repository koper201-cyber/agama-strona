/**
 * Nagłówki w motywie agama: słowo w gwiazdkach (*zmiany*) dostaje kursywę w kolorze akcentu.
 * Najpierw escapujemy cały tekst, więc w site.md nie da się wstrzyknąć HTML.
 */
export function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function accentHtml(text: string | undefined): string {
  if (!text) return "";
  return escapeHtml(text).replace(/\*([^*\n]+)\*/g, "<em>$1</em>");
}

/** Ten sam tekst bez gwiazdek — do <title>, alt i opisów. */
export function plainText(text: string | undefined): string {
  return (text ?? "").replace(/\*([^*\n]+)\*/g, "$1");
}
