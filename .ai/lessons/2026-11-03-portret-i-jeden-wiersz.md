# Kwadratowy portret i hasło w jednym wierszu

Przyczyna: po powiększeniu picture z 72% do 100% minimalny rozmiar zawartości CSS grid rozciągnął pole z aspect-ratio: 1 do pionowych proporcji źródłowego zdjęcia. Globalne white-space: nowrap dla hero spowodowało też przewijanie poziome przy tekście 200% oraz w wariancie z długim testowym tytułem.

Rozwiązanie: picture dopasowane absolutnie do istniejącego kwadratowego pola, img z object-fit: cover. Naturalne zawijanie nagłówka i rozmiar dobrany tak, aby rzeczywiste krótkie hasło mieściło się w jednym wierszu w standardowym widoku. Przy powiększeniu tekstu wolno mu się zawinąć, aby zachować czytelność.

Zapobieganie: weryfikować rzeczywisty prostokąt zdjęcia, nie samo aspect-ratio kontenera; dla próśb o jeden wiersz sprawdzać szerokości 320 px, progi układu oraz tekst 200%. Nie blokować zawijania wszystkich możliwych treści hero. Zachować istniejące testy różnych wariantów; błędy usuwać w prezentacji, nie przez osłabienie kontroli lub CSP.
