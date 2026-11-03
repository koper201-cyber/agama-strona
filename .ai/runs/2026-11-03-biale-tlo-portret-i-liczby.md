# Białe tło, portret, liczby i zdjęcie O mnie

Stan: przygotowanie podglądu, bez zgody na publikację nowej wersji.
Prośba właścicielki: białe podstrony, większy portret, hasło w jednym wierszu i kropki w hasłach, nowe liczby oraz usunięcie hasła i rozwinięć w banerach O mnie na głównej; nowe załączone zdjęcie po lewej, tekst po prawej.
Początek: czyste drzewo; pobrano aktualny main 47dea47b651418e4cadf89be8a799283d1337583. Main zawiera nowsze opublikowane teksty („Pomagam uwolnić potencjał. Wspieram w działaniu.”, „Odkryj możliwości”) i białe ustawienie tła; nie odtwarzać poprzednich tekstów. Przeczytano aktualne AGENTS.md, OWNER_GUIDE.md, lessons i powiązane notatki oraz ostatnie logi. Wykorzystano istniejące środowisko agama i zależności, Node z .node-version.
Plan i kryteria: .ai/specs/2026-11-03-biale-tlo-portret-i-liczby.md. Najpierw podgląd, pełne kontrole po przekazaniu linku.
Zdjęcie: odnaleziono i obejrzano załącznik 5F2B0D43-7D92-4409-8C4A-F5E379BE2F30/1-Zdjęcie-1.jpg. Wstawić oryginalny plik jako agnieszka-z-chusta.jpg bez retuszu i kadrowania. Nie dotyczy portretu w hero ani zdjęcia podstrony O mnie.
Tło: globalny kolor już jest #FFFFFF w site.md; usunąć prezentacyjny gradient górnych części podstron, aby także tam było widoczne istniejące białe tło. Bez nowych wartości palety w CSS. Pozostałe banery i złote akcenty zachować.
Dokumentacja poprzedniej palety: wynik publikacji z PR #34 przeniesiony z komentarza przy tej rzeczywistej zmianie; bez samodzielnego commita z wynikami. Dalsze wyniki tej pracy w komentarzach nowego PR.

Przed wysłaniem: plik zdjęcia 735×1035 zapisany bez zmian, wprowadzono wskazane liczby i opisy, skrócono baner kwalifikacji; tytuł O mnie zachowano wyłącznie dla dostępności zamiast widocznego hasła. Powiększenie portretu z 72% do 100% istniejącego pola, hasło bez zawijania z dopasowaną wielkością na telefonie. Uzupełniono brakujące końcowe kropki w hasłach, bez zmiany ich brzmienia. Przejrzano zakres różnic, przypadkowe pliki i sekrety; git diff --check poprawne. Formatowanie zmienionych plików Astro/CSS poprawne. Pełne testy jeszcze niewykonane — najpierw podgląd.
