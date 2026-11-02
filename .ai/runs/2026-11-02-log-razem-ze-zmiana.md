# Log razem ze zmianą

Stan: w toku — propozycja dokumentacji, wynik CI i podgląd będą w komentarzu PR.
Issue: https://github.com/koper201-cyber/agama-strona/issues/16

## Cel i plan
Usunąć dodatkowe commity i PR z samymi wynikami logu, zachowując dokumentację. Zmiana sekcji 8 AGENTS.md i zgodnych odwołań w sekcjach 4 i 11; istniejąca notatka zasad oraz ten log. Dokumentacja — bez specyfikacji kodu, bez zmian strony i workflow.
1. Zachować ustalenia PR #8 i #11 w komentarzach odpowiednich scalonych PR, zamknąć oba bez scalania i bez usuwania gałęzi.
2. Początkowy log i regułę wysłać jednym commitem, pokazać różnice oraz rzeczywisty podgląd.
3. Wyniki kontroli dopisać w komentarzu PR; nie tworzyć kolejnego commita tylko z wynikami. Brak zgody na scalenie nowego PR.

## Ustalenia
Sekcja 8 wymagała uzupełnienia logu przed końcem pracy i nie rozróżniała danych znanych przed wysłaniem od wyników uzyskiwanych później. Dodatkowe commity dokumentacji zmieniały SHA i ponownie uruchamiały CI/Cloudflare. Nowa reguła oddziela początkowy log od natychmiastowych komentarzy z wynikami, a plik uzupełnia się przy następnej rzeczywistej zmianie.

## Wykonane przed pierwszym wysłaniem
- Zachowano pełne logi PR #8 przy PR #6 i #13: https://github.com/koper201-cyber/agama-strona/pull/6#issuecomment-6579838256 oraz https://github.com/koper201-cyber/agama-strona/pull/13#issuecomment-6579838828.
- Zachowano log PR #11 przy PR #10: https://github.com/koper201-cyber/agama-strona/pull/10#issuecomment-6579839496.
- PR #8 i #11 zamknięto bez scalania; gałęzie zachowano.
- Zmieniono sekcję 8 AGENTS.md oraz zgodne odwołania w 4 i 11; decyzję dopisano do istniejącej notatki zasad. CLAUDE.md odsyła do AGENTS.md, bez duplikowania reguł.
- Przegląd różnic i git diff --check: sukces. Nie zmieniono kodu strony, treści, workflow ani Cloudflare. Nie uruchamiano pełnych testów lokalnych przed podglądem. Późniejsze wyniki CI, SHA i podgląd zostaną zapisane w komentarzu nowego PR bez zmiany tego commita.
