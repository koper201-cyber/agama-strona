# Praca bez obowiązkowych zgłoszeń GitHub

Stan: w toku; wyniki i decyzje po wysłaniu będą zapisane w komentarzu PR.

- Polecenie właściciela: „Nie chce zgłoszenia w GitHub. Koniecznie usuń”.
- Cel: usunąć obowiązek tworzenia issue i pytań o zgodę na ich tworzenie przy zmianach strony.
- Nie utworzono nowego issue: użytkownik wyraźnie tego zabronił, co ma pierwszeństwo przed dotychczasową sekcją 10 AGENTS.md.
- Zakres: zasady obsługi próśb w AGENTS.md, odwołanie w CLAUDE.md, docs/SPEC.md i aktualne ustalenia oraz kontekst środowiska. Zachować gałęzie, PR, podgląd, testy i osobne zatwierdzenie publikacji.
- Zgłoszenie #21 z pokazanego zrzutu ekranu było otwarte podczas pierwszego odczytu, ale podczas próby zamknięcia GitHub zwrócił „already closed”. Nie usuwano historycznych zgłoszeń ani nie zmieniano globalnych ustawień repozytorium.
- Plan: poprawić wszystkie aktywne sprzeczne instrukcje, sprawdzić różnice i format dokumentacji, wysłać PR bez issue i pokazać różnice. Kontrole automatyczne i wyniki zapisać w PR.
- Wykonano: usunięto wymóg issue z sekcji 1, 4, 5, 7, 8, 10 i 11 AGENTS.md oraz ujednolicono powiązane instrukcje i kontekst. Treść strony, kod, testy, zależności i historyczne logi pozostają bez zmian.
- Weryfikacja przed wysłaniem: przegląd aktywnych odwołań do issue, `git diff --check` i Prettier dla siedmiu zmienianych plików Markdown zakończyły się poprawnie. Nie uruchamiano lokalnych testów aplikacji dla zmiany samych instrukcji.
