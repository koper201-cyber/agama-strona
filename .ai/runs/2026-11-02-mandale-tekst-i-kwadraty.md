# Nowy opis Mandali, zdjęcie i kwadratowe pola

Stan: przygotowanie podglądu; bez zgody na publikację.
Prośba właścicielki: zastąpić tekst Mandale czterema przesłanymi akapitami, nie zmieniać nagłówka ani hasła, dodać zdjęcie oraz pokazać dotychczasowych dziewięć mandali w kwadratowych polach zamiast kół.
Początek: czyste drzewo, aktualny main bebabfa5bc39e538c04b8a1d128af9302ef81e8a. Przeczytano aktualne AGENTS.md, OWNER_GUIDE.md, lessons i powiązane ustalenia.
Plan: zmienić wyłącznie opis i ustawienia Mandali, dodać oryginalny JPG obok opisu i zakresować style naturalnego kadru zdjęcia oraz kwadratowej galerii tylko do Mandali → PR i działający podgląd → kontrola telefonu/komputera i CI → decyzja właścicielki.
Zakres: site.md, nowy JPG, prezentacja zdjęć Mandali w SubPage.astro/agama.css i ten log. Zachowane heading, lead, dziewięć istniejących pozycji galerii i wszystkie pozostałe podstrony. Prosta zmiana treści i wyglądu, bez nowych funkcji, zależności i osobnej specyfikacji.
Założenie prezentacji do oceny na podglądzie: nowe zdjęcie umieszczone obok opisu (na telefonie pod opisem), w istniejącym polu image, z zachowaniem całego kadru.
Przed wysłaniem: pełne testy i podgląd jeszcze niewykonane. Dalsze wyniki będą w komentarzu PR, bez dodatkowych commitów z samymi wynikami.
Minimalny przegląd przed wysłaniem: zakres różnic zgodny z prośbą, git diff --check poprawne; nowy JPG ma identyczną sumę SHA256 jak przesłany załącznik. Formatowanie zmienionego komponentu/CSS wykonane istniejącym Prettierem. Nie uruchamiano jeszcze pełnych testów.
