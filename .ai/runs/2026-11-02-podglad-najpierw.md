# Podgląd przed testami

Stan: zakończony — PR #13 scalony, wdrożenie sprawdzone
Issue: https://github.com/koper201-cyber/agama-strona/issues/12

Cel: doprecyzować zasadę właściciela „najpierw jak najszybciej podgląd, potem testy i inne rzeczy”, następnie publikacja albo odrzucenie po decyzji. Właściciel zlecił dodanie reguły i scalenie PR w tej samej wiadomości.
Zakres: AGENTS.md sekcje 4 i 11, istniejąca notatka zasad oraz ten log. Dokumentacja, bez zmian strony i bez specyfikacji kodu.
Plan: krótka edycja → minimalny przegląd → natychmiastowy push/PR → sprawdzony Preview URL → przekazanie linku → wymagane kontrole → match-head-commit → sprawdzenie wdrożenia.
Nie powtarzać zielonych testów lokalnie, nie zmieniać workflow ani usuwać kontroli publikacji. Automatyczne CI działa równolegle z Cloudflare; priorytet dotyczy pracy agenta i momentu pokazania podglądu, nie wyłączania CI.

Przegląd: zmieniono wyłącznie dokumentację, sekcje 4 i 11 zachowują minimum bezpieczeństwa oraz bramki publikacji. CLAUDE.md już odsyła do tych sekcji. `git diff --check`: sukces. Brak nowych testów implementacji dla zmiany zasad.

## Wynik
- PR https://github.com/koper201-cyber/agama-strona/pull/13; SHA dc2cf12ab5c1fe21399ff14976b312688c86002e. Link do różnic instrukcji pokazany natychmiast po PR, przed końcem testów.
- Preview URL https://0d405abc.agama-strona.pages.dev/ z checku Cloudflare; HTTP 200 i treść AGAMA potwierdzone. Link przekazany w trakcie pracy.
- Wszystkie 7 kontroli head: sukces. Tuż przed scaleniem: main, OPEN, CLEAN, MERGEABLE, zgodny SHA.
- Na wyraźne polecenie właściciela `gh pr merge 13 --merge --match-head-commit dc2cf12ab5c1fe21399ff14976b312688c86002e` zakończone sukcesem. Merge commit 4f19098384cab16e64f173e76f2fbe569555564e. Bez auto-merge i bez omijania zabezpieczeń.
- Cloudflare dla merge commita: sukces. https://ce00d2ce.agama-strona.pages.dev/ oraz https://agama-strona.pages.dev/: HTTP 200, treść AGAMA.
- Zasada jest na main. Uzupełnienie logu po scaleniu trafia do istniejącego PR dokumentacji #8, żeby nie zmieniać wcześniej zatwierdzonego SHA PR #13.
