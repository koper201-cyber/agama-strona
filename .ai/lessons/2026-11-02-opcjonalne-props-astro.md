# Opcjonalna treść przekazywana do komponentu Astro

Przyczyna: przy włączonym exactOptionalPropertyTypes i noUncheckedIndexedAccess odczyt sekcji z Record<string, string> może zwrócić undefined. Przekazanie go jawnie do props body?: string spowodowało błąd typów TS2375, mimo działającego podglądu.

Rozwiązanie: przy wywołaniu CoachingContent przekazywać body={body ?? ""}, czyli istniejący tekst albo pusty ciąg. Pusta podstrona nadal ma poprawne zachowanie.

Zapobieganie: po udostępnieniu podglądu sprawdzać typy przez istniejące npm run check lub CI; poprawny build nie zastępuje tej kontroli. Nie wyłączać exactOptionalPropertyTypes ani kontroli dla uzyskania zielonego wyniku.
