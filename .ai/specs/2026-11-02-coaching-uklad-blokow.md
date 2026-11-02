# Układ bloków Coaching

Stan: w przygotowaniu; publikacja wymaga decyzji właścicielki po podglądzie.
Cel: przywrócić wcześniejszy nagłówek i hasło Coaching, umieścić istniejące zdjęcie obok wstępu po prawej, rozdzielić dwa rodzaje coachingu na równe kolumny oraz dalsze sekcje na pełną szerokość.
Zakres: site.md, komponenty w src/components/agama i zakresowany CSS. Bez zmian pozostałych podstron, zdjęć, zależności, parsera/sanitizacji w src/lib, konfiguracji i testów repo.
Wymagania: nagłówek „Odkryj możliwości. Działaj świadomie.” z dotychczasowym wyróżnieniem i hasło „Czasem nie potrzebujesz gotowych odpowiedzi. Potrzebujesz przestrzeni, by odnaleźć własne.”; wstęp i zdjęcie w pierwszym rzędzie; „Coaching indywidualny” oraz „Coaching biznesowy” w równoległych kolumnach; „Jak pracuję?” oraz „Zrób miejsce na zmianę” na szerokość obu kolumn. Na telefonie jedna kolumna bez przewijania poziomego.
Treść: zachować teksty ze źródłowego site.md poza przywróceniem heading i usunięciem końcówki wskazanej przez właścicielkę. Pytanie o zakres „ostatniego akapitu” wysłane w rozmowie; rozstrzygnięcie zostanie zapisane przed wysłaniem PR.
Implementacja: osobny komponent prezentacyjny tylko dla slug coaching, dzielący istniejący oczyszczony HTML po nagłówkach h2. Nie kopiować tekstów do komponentu, nie zmieniać granicy sanitizacji. Nieznane sekcje zachowywać na pełną szerokość.
Weryfikacja: minimalny przegląd i diff przed PR; potem podgląd Cloudflare dla konkretnego SHA, kontrola kompletności tekstu i geometrii bloków na telefonie i komputerze oraz istniejące CI (typy, walidacja, build, testy).
