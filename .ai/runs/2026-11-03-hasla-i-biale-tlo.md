# Zmiana haseł i tła AGAMA

- Data rozpoczęcia: 2026-11-03 (Europe/Warsaw).
- Cel: przygotować podgląd zmian tekstów na stronie i białego tła wszystkich podstron.
- Prośba: zmienić hero, hasła „O mnie”, nagłówek wystąpień motywacyjnych i coachingu, zwęzić baner z cytatem oraz ustawić białe tło.
- Uzgodnienie: w sekcji coachingu podpis „Coaching” zostaje, a tytuł brzmi „Odkryj możliwości”; wyróżnienie jest zapisane w danych sekcji.
- Zakres: `site.md` (treść i kolor tła) oraz `src/styles/agama.css` (szerokość banera); bez nowych zależności, issue i specyfikacji funkcji.
- Przebieg: aktualne zasady i powiązane ustalenia sprawdzone w `main`. Lokalna kopia repozytorium nie jest dostępna w bieżącym folderze, dlatego zmiana jest przygotowywana przez połączenie GitHub.
- Kontrola podglądu pierwszej wersji: Cloudflare wdrożył stronę dla SHA `114b303e1faa7970e9b950e4126820cfd0cae424`. Sprawdzenie dostępności wykazało, że w podtytule widoczne były znaki kursywy, a nagłówek strony głównej Coachingu wymagał korekty. Poprawiam dane przed przekazaniem podglądu do akceptacji.
- Pełne kontrole CI pozostają do zakończenia.
- Publikacja produkcyjna: nie wykonana; wymaga zatwierdzenia konkretnego SHA przez właścicielkę.
