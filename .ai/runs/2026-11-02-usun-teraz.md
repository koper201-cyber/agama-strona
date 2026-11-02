# Przywrócenie tekstu bez „Teraz!”

Stan: propozycja przygotowana i podgląd sprawdzony, bez publikacji.

- Cel: przywrócić zdanie „Pomagam odkrywać, od czego ją zacząć.”.
- Issue: https://github.com/koper201-cyber/agama-strona/issues/14.
- Zakres: wyłącznie `hero.subheading` w `site.md` i ten log. Bez osobnej specyfikacji dla prostej zmiany tekstu.
- Plan: przegląd różnic i `git diff --check`, natychmiastowe wysłanie PR, sprawdzenie podglądu dokładnego SHA i przekazanie linku, następnie odczyt wyników CI.
- Publikacja wymaga decyzji właścicielki dotyczącej pokazanego podglądu. Wcześniejsza zgoda na dopisanie „Teraz!” nie dotyczy tej propozycji.

## Wynik kontroli zmiany

- PR: https://github.com/koper201-cyber/agama-strona/pull/15.
- SHA treści: `ff62f0786a47dbc04c6431b44c8861c34702abd8`.
- Przegląd różnic i `git diff --check`: poprawne. Zmieniono tylko wskazane zdanie i log.
- Wszystkie siedem kontroli GitHub i Cloudflare dla tego SHA zakończyło się sukcesem; nie powielano lokalnie testów z CI.
- Podgląd z check-run Cloudflare: https://57a5efc7.agama-strona.pages.dev — curl potwierdził HTTP 200, tekst „Pomagam odkrywać, od czego ją zacząć.” oraz brak poprzedniej wersji z „Teraz!”.
- Pierwsza próba odczytu urllib zwróciła 403; kolejna kontrola przez curl zakończyła się sukcesem. Nie ustalono przyczyny chwilowej odpowiedzi 403.
- Następny commit uzupełnia wyłącznie log; przed publikacją należy odczytać aktualny SHA, jego kontrole i podgląd. Nie scalać bez decyzji właścicielki dotyczącej aktualnej wersji.
