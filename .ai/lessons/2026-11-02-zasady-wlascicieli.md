# Zasady właścicieli (Błażej i Agnieszka), 2026-11-02
- Agnieszka wybrała wariant B. Sama zmienia teksty, kolory, zdjęcia, wydarzenia, podstrony i **wygląd**; przy zmianie wyglądu agent daje podgląd i pisze tylko, że zmiana wpływa na wygląd strony — bez akceptacji Błażeja (AGENTS.md, sekcja 1a).
- Aktualna decyzja właściciela: jasna prośba w rozmowie wystarcza do rozpoczęcia pracy. Nie wymagaj user story ani issue, nie twórz zgłoszeń GitHub i nie pytaj o zgodę na ich utworzenie, chyba że użytkownik wyraźnie prosi o zgłoszenie. To zastępuje wcześniejszy obowiązek user story i issue. O potrzebne dane nadal pytaj zamiast zgadywać, a niepotwierdzone założenia wypisuj w PR w „❓ Założenia” (AGENTS.md, sekcja 10).
- Pliki techniczne i zasady agenta (CODEOWNERS) zatwierdza Błażej. Błażej musi mieć dostęp do każdego konta Agnieszki.
- Zapobieganie: przy edycji AGENTS.md nie osłabiać tych zasad bez decyzji obojga właścicieli.

- Decyzja Błażeja: każdy agent dokumentuje swoją pracę w repo, również konfigurację zewnętrzną, sprawdzone ustalenia, niepowodzenia i stan przekazania. Dotychczasowy obowiązek logu zmian był zbyt wąsko sformułowany; sekcja 8 doprecyzowuje zakres i wymaga rozróżnienia przygotowania, sprawdzenia i publikacji.

- Doprecyzowanie Błażeja: działający podgląd zmiany ma być pierwszym i najszybszym wynikiem. Agent wysyła minimalną zmianę i PR przed pełnymi testami lokalnymi i rozbudowaną dokumentacją; link przekazuje natychmiast po krótkim sprawdzeniu. Testy i resztę pracy kończy potem. Po zatwierdzeniu albo odrzuceniu podejmuje od razu właściwą czynność, bez ponownego pytania o tę samą decyzję; kontrole publikacji i zgodność SHA nadal obowiązują.

- Korekta Błażeja: obowiązek dokumentowania nie może powodować kolejnych commitów z samymi wynikami, ponownych kontroli i podglądów. Początkowy log jest w tym samym commicie co zmiana; późniejsze wyniki od razu w komentarzu właściwego PR, uzupełnienie pliku przy następnej rzeczywistej zmianie. Po publikacji bez osobnego PR tylko z logiem. Reguła nie wyłącza wymaganych kontroli ani nie upoważnia do omijania zabezpieczeń.

- Przyczyna usunięcia obowiązku issue: asystent blokował prostą zmianę portretu i dodatkowo pytał o utworzenie zgłoszenia. Rozwiązanie: polecenie użytkownika ma wystarczać, bez dodatkowego kroku GitHub Issues. Zapobieganie: utrzymywać zgodne instrukcje AGENTS.md, CLAUDE.md i kontekst środowiska; wyniki zapisywać w PR, nie tworzyć issue do obsługi zwykłej prośby. Gałąź, PR, podgląd i zatwierdzenie publikacji nadal obowiązują.
