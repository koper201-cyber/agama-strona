# Weryfikacja bez dostępu do npm, 2026-11-02
- Przyczyna: środowisko agenta nie rozwiązywało registry.npmjs.org (ENOTFOUND), więc `npm ci` i Prettier nie działały lokalnie.
- Rozwiązanie: `.github/workflows/agent-build.yml` na gałęziach `claude/**` formatuje kod (commit bota), uruchamia lint, typy, testy, walidację, build i Playwright, a raport + `dist/` zapisuje na gałęzi `wyniki/<gałąź>`; agent pobiera ją przez git i robi zrzuty lokalną przeglądarką.
- Uwaga: po commicie bota zrób `git pull --rebase` przed kolejnym pushem. Zrzuty pełnej strony robić po przewinięciu/odczekaniu — AVIF dekoduje się z opóźnieniem i daje puste miejsca na zrzucie.
- Przy migracji usunąć workflow, jeśli agent Agnieszki ma działające npm.
