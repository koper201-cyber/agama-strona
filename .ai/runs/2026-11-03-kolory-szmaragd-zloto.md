# Szmaragd, złoto, beż i biel na całej stronie

Stan: przygotowanie podglądu, bez zgody na publikację tej wersji.
Prośba właścicielki: zastosować paletę z załącznika na stronie głównej i wszystkich podstronach. Ze wzoru: szmaragd #075B45, złoto #BE9A50, beż #D7C5A5, biel #FFFFFF.
Początek: czyste drzewo, aktualny main 8b0b990c1f7d1b5977908f8e4f30e0739adc652d. Przeczytano aktualne AGENTS.md i lessons; wspólny Base.astro rozprowadza ustawienia kolorów na wszystkie strony motywu agama.
Plan: zmienić wyłącznie trzy obsługiwane ustawienia kolorów site.md → minimalny przegląd → PR i sprawdzony podgląd → kontrola wszystkich tras, telefonu/komputera, czytelności i CI → decyzja właścicielki. Prosta konfiguracja wyglądu, bez osobnej nowej specyfikacji, zmian CSS, treści, układu, zdjęć ani zależności.
Dobór tła do podglądu: szmaragd i złoto dokładnie ze wzoru; dla dużych powierzchni rozjaśniony beż #F3EEE4 (jak jasne tło załącznika), białe panele z istniejącego motywu. Wstępne obliczenie kontrastu z istniejących mieszanek motywu: złote wyróżnienia na #D7C5A5 tylko 3.78:1, poniżej minimum 4.5:1; na #F3EEE4 5.52:1. Biały tekst na szmaragdowym 8.10:1. O rozjaśnieniu beżu poinformowano właścicielkę w rozmowie; wariant do oceny w podglądzie, bez publikacji.
Zgodnie z sekcją 8 przy tej rzeczywistej zmianie uzupełniono zakończenie poprzedniego zadania Coaching i przeniesiono jego zweryfikowaną specyfikację do implemented, bez osobnego commita z wynikami.
Pełne testy i podgląd jeszcze niewykonane; wyniki dalszych kontroli będą w komentarzu PR.
Minimalny przegląd przed wysłaniem: zmiana wyglądu aplikacji ograniczona do trzech wartości w site.md; pozostałe zmiany to ten log i uzupełnienie dokumentacji zakończonego zadania Coaching. git diff --check poprawne. Bez instalacji zależności i bez pełnych testów przed podglądem.
