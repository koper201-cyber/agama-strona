# Zasady właścicieli (Błażej i Agnieszka), 2026-11-02
- Agnieszka wybrała wariant B. Sama zmienia teksty, kolory, zdjęcia, wydarzenia, podstrony i **wygląd**; przy zmianie wyglądu agent daje podgląd i pisze tylko, że zmiana wpływa na wygląd strony — bez akceptacji Błażeja (AGENTS.md, sekcja 1a).
- Każda zmiana zaczyna się od user story i issue; agent **pyta zamiast zgadywać**, a niepotwierdzone założenia wypisuje w PR w „❓ Założenia” (AGENTS.md, sekcja 10 pkt 7).
- Pliki techniczne i zasady agenta (CODEOWNERS) zatwierdza Błażej. Błażej musi mieć dostęp do każdego konta Agnieszki.
- Zapobieganie: przy edycji AGENTS.md nie osłabiać tych zasad bez decyzji obojga właścicieli.

- Decyzja Błażeja: każdy agent dokumentuje swoją pracę w repo, również konfigurację zewnętrzną, sprawdzone ustalenia, niepowodzenia i stan przekazania. Dotychczasowy obowiązek logu zmian był zbyt wąsko sformułowany; sekcja 8 doprecyzowuje zakres i wymaga rozróżnienia przygotowania, sprawdzenia i publikacji.

- Doprecyzowanie Błażeja: działający podgląd zmiany ma być pierwszym i najszybszym wynikiem. Agent wysyła minimalną zmianę i PR przed pełnymi testami lokalnymi i rozbudowaną dokumentacją; link przekazuje natychmiast po krótkim sprawdzeniu. Testy i resztę pracy kończy potem. Po zatwierdzeniu albo odrzuceniu podejmuje od razu właściwą czynność, bez ponownego pytania o tę samą decyzję; kontrole publikacji i zgodność SHA nadal obowiązują.
