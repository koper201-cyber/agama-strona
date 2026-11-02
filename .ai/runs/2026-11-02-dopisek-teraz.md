# Dopisek „Teraz!”

Stan: propozycja przygotowana i podgląd sprawdzony; bez publikacji.

- Cel: uzgodniony tekst strony głównej „Pomagam odkrywać, od czego ją zacząć. Teraz!”.
- Zgłoszenie: https://github.com/koper201-cyber/agama-strona/issues/9.
- Zakres: wyłącznie `hero.subheading` w `site.md` oraz ten log; osobna specyfikacja nie jest potrzebna dla prostej zmiany tekstu.
- Plan: minimalny przegląd różnic, osobny PR, podgląd Cloudflare dla SHA, kontrola treści i wyników CI.
- Publikacja wymaga osobnej decyzji właścicielki po pokazaniu podglądu.

## Wynik

- PR: https://github.com/koper201-cyber/agama-strona/pull/10.
- Sprawdzona wersja treści: `376490855de49a1573a9e7e1c4827c04d642e15b`.
- `git diff --check` i przegląd zakresu: poprawne; zmieniono tylko uzgodniony tekst oraz log.
- GitHub „Sprawdzenie strony”: sukces (walidacja, build, typy, testy). Cloudflare Pages: sukces.
- Podgląd otrzymany z check-run Cloudflare dla tego SHA: https://210bbd88.agama-strona.pages.dev — HTTP 200, potwierdzony dokładny nowy tekst w HTML.
- Rozbieżność konfiguracji: `site.pages_project` wskazuje `agama-mockup`, natomiast udany check Cloudflare wdraża do `agama-strona`. Nie zmieniano ustawień poza zleconym zakresem. Przed publikacją trzeba wyjaśnić tę rozbieżność zgodnie z sekcją 11 AGENTS.md.
- Kolejny commit uzupełnia wyłącznie ten log; jego nowe kontrole i podgląd należy odczytać przed ewentualną publikacją. Nie scalać PR na podstawie potwierdzenia wcześniejszego SHA.
