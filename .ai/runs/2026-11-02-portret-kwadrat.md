# Kwadratowy portret — zgłoszenie 21
Zgłoszenie: https://github.com/koper201-cyber/agama-strona/issues/21 (odczytane).
Stan początkowy: main, czyste drzewo. Zmiana lokalna na portret-kwadrat.
Zakres: tylko src/styles/agama.css, wysokość picture portretu 84% → 72% (równa szerokości), zaokrąglenie łuku → 0. Bez edycji fotografii i innych treści.
Kadr zachowuje object-fit: cover i object-position: 50% 20%; twarz naturalna i w całości widoczna na obu zrzutach.
Kontrole: npm run build (w tym walidacja, linki, CSP i budżety) kod 0; npm run check: 0 błędów/ostrzeżeń; Prettier dla CSS i git diff --check poprawne.
Walidator zgłasza istniejące ostrzeżenia o pustych Aktualnościach i sześciu miejscach do uzupełnienia.
Playwright z istniejącym Chromium: telefon 390x844, portret 230.39x230.39; komputer 1440x1000, portret 302.39x302.39. Zrzuty sprawdzone wizualnie. Bez dodawania zależności.
Na wyraźne polecenie brak commita, pushu, PR i publikacji. Log poza checkoutem, aby zmienić wyłącznie prezentację portretu.

## Wznowienie
Użytkownik po obejrzeniu wyników zlecił „Publikuj”. Przygotowanie tej samej zmiany do PR, kontroli i publikacji; bez innych zmian strony. Main nadal 8f38238844913002c689f92f4bb27d779abf2377. Wyniki dalszych kontroli będą w komentarzu PR.
