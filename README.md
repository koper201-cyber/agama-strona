# AGAMA — strona Agnieszki Marciniak

Strona statyczna (Astro) budowana z jednego pliku **`site.md`** i folderu **`zdjecia/`**, w motywie **`agama`** (wariant B zatwierdzony przez Agnieszkę 2 listopada 2026). Agnieszka zmienia ją sama przez agenta AI z telefonu: zmiana → PR → podgląd Cloudflare → zatwierdzenie → publikacja. Zasady agenta: [`AGENTS.md`](AGENTS.md). Instrukcja dla Agnieszki: [`OWNER_GUIDE.md`](OWNER_GUIDE.md).

Kod pochodzi ze startera `koper201-cyber/blazej-koprowski-www` (bez treści i motywu strony Błażeja), rozszerzonego o podstrony, Aktualności i kolory w ustawieniach.

## Co gdzie jest

| Ścieżka                                         | Zawartość                                                              |
| ----------------------------------------------- | ---------------------------------------------------------------------- |
| `site.md`                                       | Cała treść i ustawienia: kolory, menu, podstrony, Aktualności, kontakt |
| `zdjecia/`                                      | Zdjęcia (JPG/PNG/WebP/HEIC); Astro robi z nich AVIF/WebP               |
| `src/lib/site-schema.ts`                        | Dozwolone pola `site.md` (zod)                                         |
| `scripts/validate-site.ts`                      | Walidator z komunikatami po polsku                                     |
| `src/components/agama/`, `src/styles/agama.css` | Wygląd motywu agama                                                    |
| `src/pages/[slug].astro`                        | Podstrony z `pages` i strona `/aktualnosci/`                           |
| `tests/`                                        | Testy jednostkowe i przeglądarkowe (axe WCAG AA, telefon 320 px)       |

## Polecenia

```bash
npm ci
npm run site:validate   # sprawdza site.md i zdjęcia
npm run dev             # podgląd lokalny
npm run build           # strona w dist/
npm run verify          # format, lint, typy, testy, walidacja, build
```

## Konta i dostęp (decyzja 2026-11-02)

- **GitHub i Cloudflare są na koncie Błażeja** (`koper201-cyber`) — pełna kontrola, poprawki i diagnoza błędów po jego stronie.
- **Agnieszka** ma własne konto GitHub i jest **współpracowniczką (Write)** tego repo: jej asystent (ChatGPT Codex) tworzy zmiany w jej imieniu, ona zatwierdza je i cofa (Revert). Nie może usunąć repo ani zmienić ustawień.
- Repo jest **publiczne** (darmowa ochrona `main`). Prywatne materiały źródłowe (DOCX, BIO, maile) są w prywatnym archiwum `koper201-cyber/agama-mockup` — **nie dodawaj ich tutaj**.
- Instrukcja zakładania kont dla Agnieszki: PDF „AGAMA-konta-Agnieszka.pdf” (poza repo).

## Uruchomienie (kolejność)

1. Ruleset na `main` (niżej).
2. Cloudflare (konto Błażeja): _Workers & Pages → Create → Pages → Connect to Git_ → to repo; build `npm run build`, output `dist`, zmienna `NODE_VERSION` = wartość z `.node-version`, produkcja z `main`, podgląd dla każdego PR. Nazwa projektu → `site.pages_project` w `site.md`.
3. Agnieszka: konto GitHub (PDF) → zaproszenie jej jako współpracownika (Write).
4. Aplikacja **ChatGPT Codex Connector** zainstalowana na koncie Błażeja **tylko dla tego repo**; Agnieszka łączy ChatGPT z GitHubem; środowisko Codex: setup `npm ci`.
5. Uzupełnić miejsca `UZUPEŁNIJ` w `site.md` (kontakt, liczby z BIO, certyfikaty, polityka prywatności, logotypy); formularz Web3Forms na e-mail Agnieszki → `contact.form_key`; domena (na Agnieszkę, DNS w Cloudflare Błażeja) → `site.domain`.
6. Test z telefonu Agnieszki: tekst, wydarzenie ze zdjęciem, kolor, zmiana wyglądu, Revert.

## Zabezpieczenia — czy strony nie da się skasować?

| Ryzyko | Zabezpieczenie |
| --- | --- |
| Agent usuwa treść albo psuje stronę | Nic nie trafia na stronę bez PR, podglądu i zatwierdzenia. Zasady agenta zabraniają usuwania bez wyraźnej prośby. Każdą zmianę cofa **Revert**; cała historia zostaje w Git. |
| Agent kasuje repo, `main` albo zdejmuje ochronę | Aplikacje agentów (Claude, Codex) dostają do „administration” najwyżej odczyt — sprawdzić przy instalacji. |
| Agent zmienia pliki techniczne lub swoje zasady | `.github/CODEOWNERS`: zmiany w `.github/`, `scripts/`, `src/lib/`, `src/pages/`, `tests/`, `AGENTS.md` itp. wymagają zatwierdzenia Błażeja. Treść i wygląd (`site.md`, `zdjecia/`, `agama.css`, `components/agama/`) Agnieszka zatwierdza sama. |
| Ktoś nadpisuje lub kasuje `main` | Ruleset na `main` (niżej), bez listy wyjątków. |
| Agnieszka kasuje repo | Niemożliwe — jako współpracowniczka (Write) nie ma uprawnień do usunięcia ani ustawień. |
| Utrata projektu Cloudflare | Strona buduje się z repo — nowy projekt Pages podłączony do repo odtwarza ją w kilka minut. |

### Ruleset dla `main` (Settings → Rules → Rulesets → New branch ruleset)

- Target: domyślna gałąź; **Bypass list: pusta**.
- ✅ Restrict deletions · ✅ Block force pushes
- ✅ Require a pull request before merging — required approvals: **0**, ✅ Require review from Code Owners
- ✅ Require status checks to pass: „Sprawdzenie strony” (+ „Cloudflare Pages”)
