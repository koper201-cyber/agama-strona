# Portret bez krążących kółek

Stan: przygotowanie podglądu, bez publikacji.
Prośba: usunąć ze strony głównej krążące kółka wokół kwadratowego portretu, zachowując resztę wyglądu.
Początek: czyste drzewo, aktualny main b398f032c3d1153ff72632bc59540c2dae8156e3. Przeczytano aktualne zasady i powiązane ustalenia.
Plan: wyłączyć wyświetlanie dekoracji wyłącznie w obszarze portretu przez CSS → PR i podgląd → kontrola telefonu/komputera i CI → decyzja właścicielki. Prosta zmiana wyglądu, bez nowej funkcji i zależności.
Zakres: jedna reguła CSS, bez edycji zdjęcia, treści i rozmiaru portretu. git diff --check poprawne; przed wysłaniem pełne kontrole i podgląd jeszcze niewykonane. Dalsze wyniki w komentarzu PR, bez commitów z samymi wynikami.
