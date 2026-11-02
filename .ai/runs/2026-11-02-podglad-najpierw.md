# Podgląd przed testami

Stan: w toku
Issue: https://github.com/koper201-cyber/agama-strona/issues/12

Cel: doprecyzować zasadę właściciela „najpierw jak najszybciej podgląd, potem testy i inne rzeczy”, następnie publikacja albo odrzucenie po decyzji. Właściciel zlecił dodanie reguły i scalenie PR w tej samej wiadomości.
Zakres: AGENTS.md sekcje 4 i 11, istniejąca notatka zasad oraz ten log. Dokumentacja, bez zmian strony i bez specyfikacji kodu.
Plan: krótka edycja → minimalny przegląd → natychmiastowy push/PR → sprawdzony Preview URL → przekazanie linku → wymagane kontrole → match-head-commit → sprawdzenie wdrożenia.
Nie powtarzać zielonych testów lokalnie, nie zmieniać workflow ani usuwać kontroli publikacji. Automatyczne CI działa równolegle z Cloudflare; priorytet dotyczy pracy agenta i momentu pokazania podglądu, nie wyłączania CI.

Przegląd: zmieniono wyłącznie dokumentację, sekcje 4 i 11 zachowują minimum bezpieczeństwa oraz bramki publikacji. CLAUDE.md już odsyła do tych sekcji. `git diff --check`: sukces. Brak nowych testów implementacji dla zmiany zasad.
