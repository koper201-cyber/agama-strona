# Aktualne repo i podglądy AGAMA

- Przyczyna: po migracji z prywatnego archiwum agama-mockup do publicznego agama-strona pole site.pages_project nadal wskazywało archiwalny projekt. Powodowałoby to odrzucanie prawidłowych podglądów przez proces z AGENTS.md.
- Rozwiązanie przygotowane w PR: site.pages_project = agama-strona, zgodnie z checkiem Cloudflare Pages dla aktualnego main. Środowisko Codex ma nazwę agama i korzysta z repo agama-strona.
- Zapobieganie: przed konfiguracją środowiska sprawdzić faktyczny main, opis repo oraz Preview URL z bieżącego checku Cloudflare. Stare notatki archiwum nie potwierdzają obecnego stanu integracji.
