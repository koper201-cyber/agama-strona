# Starter AGAMA — motyw B, podstrony, Aktualności
Stan: zakończony (czeka na decyzję właściciela o scaleniu)
Issue: https://github.com/koper201-cyber/agama-mockup/issues/5
Spec: .ai/specs/2026-11-02-starter-agama.md
Gałąź: claude/starter-agama (od pustego main)

## Plan
1. Kod startera z koper201-cyber/blazej-koprowski-www (bez treści, zdjęć, motywu elevate i historii .ai Błażeja).
2. Motyw agama + podstrony + Aktualności + walidator + testy.
3. site.md z treściami z DOCX/BIO; zdjęcia z gałęzi wariantu B.
4. AGENTS.md / OWNER_GUIDE.md / README.md dla AGAMA.
5. Weryfikacja w GitHub Actions (brak npm w środowisku agenta), zrzuty, PR do main.

## Wykonane
- Starter skopiowany bez treści/zdjęć/motywu elevate/historii .ai Błażeja; zdjęcia i materiały z gałęzi wariantu B.
- Motyw agama: kolory w site.md (primary/accent/background, odcienie przez color-mix), strona główna z sekcjami w features, menu mobilne (bez JS menu widoczne).
- Podstrony z pages (tekstowa/oferta/galeria, koła dla mandali), tekst w sekcji Markdown o nazwie tytułu; /aktualnosci/ z filtrem kategorii, nadchodzącymi, artykułami i archiwum (ukrywanie po dacie też w przeglądarce).
- Walidator: kategorie, puste podstrony, duplikaty adresów, zdjęcia, kontrast tła i akcentu. Testy jednostkowe (3 nowe) i przeglądarkowe (axe na podstronach, menu mobilne, archiwum po dacie); nowy wariant CI agama-test.
- site.md z treściami DOCX/BIO; 6 miejsc UZUPEŁNIJ (kontakt, liczby, certyfikaty, polityka, logotypy); Aktualności bez wpisów.
- AGENTS.md: sekcja 1a (zmiany wyglądu), sekcja 2 (pola agama), 7 (typowe prośby), 10 pkt 7 (pytaj zamiast zgadywać). OWNER_GUIDE.md i README.md (migracja, zabezpieczenia). CODEOWNERS.

## Weryfikacja (GitHub Actions, agent-build.yml)
- f7d77c0: lint 0, astro check 0, testy 14/14, site:validate 0 (2 ostrzeżenia: brak wpisów, 6× UZUPEŁNIJ), build 0, build agama.md 0, build demo 0, Playwright 18/18 (site.md) i 18/18 (agama.md).
- Zrzuty lokalnie (Chrome 1366 i 390 px) ze zbudowanego dist: poprawiono karty oferty (wyśrodkowanie), kontakt (biały tekst na białym), cytat (ramka), odstęp w O mnie.
- Ochrona main: niedostępna na prywatnym repo darmowym (HTTP 403) — opisana w README do włączenia przy migracji.

## Ograniczenia / dalej
- Brak podglądu Cloudflare z Git (projekt agama-mockup to Direct Upload); podgląd po migracji albo ręczne wgranie dist.
- Formularz, domena, dane UZUPEŁNIJ — po kontach Agnieszki.

## Strona główna 1:1 z makietą B (2026-11-02, 10:25–10:42)
- Właściciel zauważył, że strona główna różniła się od zatwierdzonej makiety B (sekcje Wystąpienia, Coaching, Mandale i karta Aktualności były tylko na podstronach). Na jego polecenie („bez porównań i PR, jak najszybciej”) przywrócono układ 1:1: `feature`, `about_intro`, `home_sections` (lista/duet/galeria), `site.brand` (nazwisko kursywą), `site.footer_text`, `contact.eyebrow`.
- Weryfikacja na gałęzi claude/strona-glowna-b (agent-build): 5249e6b — wszystko 0, Playwright 18/18 ×2 (wcześniej 2 błędy kontrastu napisu w kontakcie — poprawione). `main` przesunięty fast-forward na 5249e6b bez PR (polecenie właściciela).
- Wdrożenie: Cloudflare Direct Upload, projekt agama-mockup, Production, 240 plików z dist 5249e6b z dodaną blokadą indeksowania (meta robots, robots.txt, X-Robots-Tag). Sprawdzono https://agama-mockup.pages.dev: 8 stron HTTP 200 z noindex, 18 obrazów bez błędów, kolory motywu działają. Makieta A/B zastąpiona (kod na gałęzi codex/dwa-warianty).
