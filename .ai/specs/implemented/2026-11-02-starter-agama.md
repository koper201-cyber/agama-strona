# Starter AGAMA: motyw B, podstrony, Aktualności

Issue: https://github.com/koper201-cyber/agama-mockup/issues/5
Stan: zrealizowana i zweryfikowana w CI (2026-11-02)

## Cel
Strona AGAMA (wybrany wariant B) zbudowana na starterze `site.md` + `zdjecia/`, tak aby Agnieszka sama zmieniała teksty, kolory, zdjęcia, wydarzenia i podstrony przez agenta AI z telefonu.

## Zakres
- Motyw `agama` (`site.theme`), kolory `primary_color`, `accent_color`, `background_color`; pochodne odcienie liczone w CSS (`color-mix`).
- Strona główna z sekcjami włączanymi w `features`: oferta (karty z linkami), liczby, O mnie z certyfikatami, cytat, galeria, najbliższe terminy, kontakt, firmy w stopce.
- `pages`: podstrony `tekstowa`, `oferta`, `galeria` (kształt zdjęć: prostokąty/koła); tekst w sekcji Markdown o nazwie równej tytułowi; menu z `menu: true`.
- `news` + `news_page`: wydarzenia (archiwum po terminie, także po stronie przeglądarki) i artykuły; kategorie z listy; filtr kategorii.
- Nagłówki: `*słowo*` = kursywa w kolorze akcentu (tekst escapowany).
- Walidator po polsku: nieznane kategorie, puste podstrony, duplikaty adresów, zdjęcia, kontrast tła i akcentu.
- Usunięty motyw `elevate` strony Błażeja; zostaje `natural-warm` (demo).

## Poza zakresem
Formularz z kluczem (czeka na konto Agnieszki), domena, migracja kont, CMS, płatności.

## Kryteria akceptacji
Zgodne z issue #5.

## Weryfikacja
- CI: lint, astro check, testy jednostkowe (nowe: news, akcent, adresy, kolory), walidacja i build dla `site.md`, `tests/fixtures/agama.md`, demo.
- Playwright (chromium + telefon): axe WCAG AA na stronie głównej i wszystkich podstronach z menu, reflow, menu mobilne, archiwum po dacie.
- Ręczny przegląd zrzutów komputer/telefon.

## Ryzyka
- Brak dostępu agenta do rejestru npm → formatowanie i testy w GitHub Actions (`agent-build.yml`, wyniki na gałęzi `wyniki/…`).
