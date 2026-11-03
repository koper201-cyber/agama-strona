# Nowe O mnie i karty coachingu

Stan: przygotowanie podglądu, bez zatwierdzenia publikacji.
Cel: przenieść dokładnie nowy tekst właścicielki na podstronę O mnie, skrócić opis na głównej, odwrócić układ tekstu i zdjęcia oraz dodać karty i odnośniki.
Zakres: site.md, komponenty src/components/agama/, agama.css i dokumentacja. Bez zmian parsera, schematu, konfiguracji, zależności i plików zdjęć. Początek: aktualny main 9e93c7ccdbc1734ad84622c83415ef8b2be9f7d6.
Treść: podstrona O mnie zawiera osiem akapitów podanych w rozmowie, zamiast dotychczasowego tekstu i wewnętrznego hasła. Zachować górny nagłówek podstrony, zdjęcie i listę certyfikatów. Na głównej tylko podany akapit o kwalifikacjach. Rozwinięcia PCC i ICF zachowują uzgodnioną kursywę.
Prezentacja: na głównej tekst O mnie po lewej, istniejące zdjęcie z chustą po prawej; na telefonie tekst przed zdjęciem. Czytelny odnośnik ze strzałką do /o-mnie/. Karty Coaching indywidualny i Coaching biznesowy mają ten sam styl .ag-card co trzy karty oferty. Zachować istniejące krótkie opisy i zdjęcie coachingu.
Nawigacja: strzałki kart prowadzą odpowiednio do /coaching/#coaching-indywidualny i /coaching/#coaching-biznesowy. Kotwice na właściwych blokach istniejącego CoachingContent, bez zmiany treści ani sanitizacji. Uwzględnić przyklejony nagłówek przy przewijaniu.
Plan: dane i tekst → zamiana kolejności O mnie i odnośnik → wspólne style kart i kotwice → minimalny przegląd i PR → sprawdzony podgląd → CI, kliknięcia, treść i telefon/komputer → decyzja właścicielki.
Weryfikacja: HTTP 200 i efekt konkretnego SHA przed przekazaniem podglądu; następnie istniejące CI (typy, testy, walidacja, build), kompletność nowego tekstu, kliknięcie trzech strzałek, zgodność stylów kart oraz układ przy 320/390/901/1024/1440 px i tekście 200%. Bez scalenia lub produkcji przed zatwierdzeniem pokazanej wersji.
