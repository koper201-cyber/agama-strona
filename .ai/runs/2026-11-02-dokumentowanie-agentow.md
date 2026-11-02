# Dokumentowanie działań każdego agenta

Stan: zakończony — dokumentacja przygotowana do PR; publikacja środowiska nadal zablokowana
Issue: https://github.com/koper201-cyber/agama-strona/issues/7
PR: https://github.com/koper201-cyber/agama-strona/pull/6

## Cel i zakres
Doprecyzować obowiązek dokumentowania każdej pracy agenta, uzupełnić poprzedni przebieg o sprawdzone wyniki PR oraz przygotować instrukcję testu z telefonu. Zmiana dokumentacji, bez specyfikacji kodu i bez zmiany wyglądu lub treści strony.

## Plan
1. Przeczytać aktualne ustalenia i sprawdzić repo/PR oraz panel chmury.
2. Uzupełnić AGENTS.md i notatkę środowiska, zachowując wcześniejsze wymagania.
3. Przejrzeć różnice, sprawdzić dokumenty, wysłać do istniejącego PR; nie scalać.

## Odczyt stanu
- Main nadal 3eb918bc4bfeaae9dc165bd50f7eb07b44adffef; PR #6 otwarty, head 0af7f72ed29b207598b197709878521a983262fd.
- Panel konfiguracji agama nadal pokazuje „Nie udało się opublikować środowiska”; nie wykonano ponownie kosztownych instalacji/testów ani prób publikacji.
- Zasada dokumentacji już istniała w sekcji 8; prośba właściciela rozszerza ją jawnie na każdego agenta oraz działania poza kodem.

## Wykonane zmiany i sprawdzenie
- AGENTS.md sekcja 8: każdy agent dokumentuje pracę także poza kodem; rzeczywiste wyniki, błędy, linki, SHA, status i następny krok. CLAUDE.md już odsyła do AGENTS.md; bez duplikowania reguł.
- Zaktualizowano notatkę chmury o scenariusz testu z telefonu i ograniczenia; uzupełniono wcześniejszy log o SHA, PR, podgląd i zielone CI. Decyzję właściciela dopisano do istniejącej notatki zasad.
- `git diff --check`: sukces. Kontrola kompletności instrukcji i odwołania CLAUDE.md: sukces (asercje Python). Bez zmian kodu, treści strony, zależności i konfiguracji usług; bez nowych testów implementacji i powtarzania zielonych testów kodu. CI dla nowego SHA odczytywane po wysłaniu.
- Instrukcje pozostają w otwartym PR #6, nie na main; nie scalano. Test z telefonu: jeszcze niewykonany, publikacja środowiska nadal zablokowana.
