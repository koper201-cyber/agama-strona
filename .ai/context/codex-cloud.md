# AGAMA w Codex Cloud

**Stan 2026-11-02: wersja robocza zapisana, publikacja zablokowana błędem usługi po trzech próbach. Środowisko nie jest jeszcze potwierdzone jako dostępne w nowych czatach.**

- Nazwa środowiska: `agama` (decyzja Błażeja 2026-11-02).
- Repozytorium: `koper201-cyber/agama-strona`, gałąź początkowa `main`. `agama-mockup` to archiwum — nie używać do nowych zmian strony.
- Konfiguracja: https://chatgpt.com/local/01a19c66-6c8d-7759-9e3c-8cfe9d27605b?hostId=local (czat konfiguracji na koncie Błażeja).
- Prywatność: Tylko ja. Ta konfiguracja nie daje automatycznie dostępu kontu ChatGPT Agnieszki.
- Instalacja: Node zgodny z `.node-version` (obecnie 24.22.1), `npm ci --no-audit --no-fund`. Narzędzia w `/workspace/.agama-tools/`, repo w `/workspace/agama-strona`. Gotowe zależności i pamięć buildu w obrazie środowiska ograniczają koszt kolejnych uruchomień.
- Skrypt instalacyjny korzysta z oficjalnego archiwum Node, sprawdza SHA256 i zachowuje ustawienia proxy oraz TLS. Skrypt i instrukcja startowa zapisane w konfiguracji środowiska.
- Sieć: pełny Internet wyłączony, domeny menedżerów pakietów włączone; dodatkowo `api.github.com`, `agama-strona.pages.dev`, `*.agama-strona.pages.dev`. Bez nowych sekretów i zmiennych środowiskowych.
- Start: po ustawieniu PATH do powyższej wersji Node `npm run dev -- --host 127.0.0.1`. Oczekiwany port 4321, kontrole HTTP dla `/`, `/aktualnosci/`, `/coaching/`. Proces serwera może wymagać ponownego startu po odtworzeniu obrazu; nie uruchamiać drugiego, jeśli pierwszy działa.
- Weryfikacja przygotowania: `npm run verify` zakończyło się sukcesem, 14 testów jednostkowych, HTTP 200 dla trzech podstron. Playwright nie instalowano ani nie sprawdzano w chmurze; testy w Actions aktualnego main były zielone.

## Praca z telefonu

Nowy czat Codex → Chmura → środowisko `agama`. Zmiany przez issue, gałąź, PR i sprawdzony podgląd z Cloudflare, zgodnie z aktualnym `AGENTS.md`. Użytkownik zatwierdza konkretną wersję przed publikacją strony. Publikacja środowiska Codex jest odrębna od publikacji strony.

## Ograniczenia sprawdzenia

Nie wykonywano zmian treści, odrzucenia PR, scalania ani próbnego wysłania formularza. Pełny proces pracy z telefonu wymaga osobnego testu. `main` nie ma aktywnej ochrony (API protected=false, rulesets puste na 2026-11-02); przed przekazaniem Agnieszce skonfigurować zasady z README. Dane oznaczone UZUPEŁNIJ pozostają do potwierdzenia przez właścicielkę.

## Próba z telefonu Błażeja

Oglądanie strony można sprawdzić już teraz pod adresem podglądu w PR #6. Pełny test edycji wymaga najpierw skutecznego opublikowania środowiska i widoczności `agama` w wyborze środowisk na koncie Błażeja. Obecnie publikacja jest zablokowana. PR #6 scalony na polecenie Błażeja: instrukcje i poprawka ustawienia podglądów są obecne na main od e64c8cdad2a170d257172676bcc3f96fd5ccf9d5. Przed testem odświeżyć repo w zadaniu.

Po odblokowaniu: na telefonie otworzyć Codex na tym samym koncie, wybrać Chmura → agama → agama-strona/main i zlecić jedną uzgodnioną, odwracalną zmianę tekstu. Przykładowa treść polecenia (szablon, nie zlecenie zmiany): „Test z telefonu: na stronie [podstrona], w sekcji [sekcja], zamień dokładnie [stary tekst] na [nowy tekst]. Przygotuj PR i sprawdzony podgląd, nie publikuj strony”.

Agent zapisuje issue, przygotowuje PR i pokazuje podgląd konkretnego SHA. Błażej sprawdza go na telefonie, następnie odrzuca test albo zatwierdza konkretną wersję zgodnie z AGENTS.md. Wyniki przygotowania, podglądu, odrzucenia i publikacji zapisuje się osobno; żadnego z tych testów z telefonu jeszcze nie przeprowadzono.

Ponowne sprawdzenie na prośbę właściciela: trzecia próba publikacji również zakończyła się błędem; szczegóły w `.ai/runs/2026-11-02-powtorna-publikacja-chmury.md`.
