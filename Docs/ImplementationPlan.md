# Plan Implementacji – TastyContent Landing Page

**Cel:** Stworzenie landing page'a zgodnie z PRD, wykorzystując Next.js, Tailwind CSS, Supabase i Vercel.

**Timeline:** Zgodny z PRD (5 dni)

---

## Faza 1: Setup i Konfiguracja Podstawowa ( ~0.5 Dnia)

1.  **Inicjalizacja Projektu:**
    *   [ ] Uruchom `npx create-next-app` z opcjami: TypeScript, ESLint, Tailwind CSS, `src/` directory, App Router. (Zakładając, że jeszcze nie wykonano)
    *   [ ] Zainstaluj dodatkowe zależności (jeśli potrzebne na tym etapie).
2.  **Struktura Projektu:**
    *   [ ] Zweryfikuj/utwórz podstawową strukturę folderów (`src/app`, `src/components`, `src/lib` lub `src/utils`).
3.  **Konfiguracja Supabase:**
    *   [ ] Utwórz nowy projekt w Supabase.
    *   [ ] Utwórz tabelę do przechowywania e-maili (np. `waitlist_signups` z kolumnami: `id`, `email`, `created_at`).
    *   [ ] Zapisz klucze API Supabase (URL projektu i klucz `anon`) jako zmienne środowiskowe w pliku `.env.local`.
4.  **Konfiguracja Vercel:**
    *   [ ] Utwórz repozytorium Git (np. na GitHub, GitLab).
    *   [ ] Utwórz nowy projekt w Vercel i połącz go z repozytorium Git.
    *   [ ] Skonfiguruj zmienne środowiskowe Supabase w ustawieniach projektu Vercel.

---

## Faza 2: Implementacja Statycznego UI (PRD Etap 2 - ~1.5 Dnia)

1.  **Layout Główny:**
    *   [ ] Zdefiniuj główny layout aplikacji w `src/app/layout.tsx`.
    *   [ ] Dodaj podstawowe metadane SEO (title, description) w `layout.tsx`.
2.  **Komponenty Reużywalne:**
    *   [ ] Stwórz podstawowe komponenty UI (np. `Button.tsx`, `Input.tsx`, `SectionWrapper.tsx`) w `src/components`.
3.  **Implementacja Sekcji (w `src/app/page.tsx` lub osobnych komponentach):**
    *   [ ] **Hero Section:**
        *   [ ] Dodaj H1, podtytuł.
        *   [ ] Stwórz statyczny formularz (pole email, przycisk CTA) - na razie bez logiki.
        *   [ ] Stylizuj sekcję za pomocą Tailwind CSS.
    *   [ ] **Opis Aplikacji Section:**
        *   [ ] Dodaj treść zgodnie z PRD.
        *   [ ] Stylizuj sekcję.
    *   [ ] **Bonus Section:**
        *   [ ] Dodaj treść bonusu i warunki.
        *   [ ] Stylizuj sekcję.
    *   [ ] **Społeczny Dowód Section:**
        *   [ ] Dodaj miejsce na cytaty/opinie (na razie mogą być statyczne).
        *   [ ] Stylizuj sekcję.
    *   [ ] **Stopka (Footer):**
        *   [ ] Dodaj e-mail kontaktowy.
        *   [ ] Dodaj linki (Polityka Prywatności, Regulamin - na razie mogą być `#`).
        *   [ ] Dodaj miejsce na ikony social media.
        *   [ ] Stylizuj stopkę.
4.  **Responsywność:**
    *   [ ] Upewnij się, że wszystkie sekcje są responsywne (mobile-first) używając klas Tailwind CSS.
5.  **Optymalizacja:**
    *   [ ] Wstępna weryfikacja ładowania zasobów (obrazy, fonty - jeśli są).

---

## Faza 3: Integracja Formularza i Backend (PRD Etap 3 - ~1 Dzień)

1.  **Logika Formularza:**
    *   [ ] Zainstaluj klienta Supabase: `npm install @supabase/supabase-js`.
    *   [ ] Utwórz klienta Supabase w `src/lib/supabaseClient.ts` (lub podobnym).
    *   [ ] Zaimplementuj logikę formularza zapisu w komponencie Hero Section (lub dedykowanym komponencie `WaitlistForm.tsx`):
        *   [ ] Zarządzanie stanem formularza (wartość email, status ładowania, błędy).
        *   [ ] Podstawowa walidacja po stronie klienta (czy email ma poprawny format).
2.  **Obsługa Wysyłki (Next.js Server Action lub API Route):**
    *   [ ] Stwórz Server Action (zalecane w App Router) lub API Route (`src/app/api/waitlist/route.ts`) do obsługi `POST`.
    *   [ ] W akcji/route:
        *   [ ] Odczytaj email z danych żądania.
        *   [ ] Wykonaj walidację po stronie serwera.
        *   [ ] Użyj klienta Supabase do wstawienia emaila do tabeli `waitlist_signups`.
        *   [ ] Obsłuż potencjalne błędy (np. duplikat email, błąd Supabase).
        *   [ ] Zwróć odpowiedź sukcesu lub błędu.
3.  **Feedback dla Użytkownika:**
    *   [ ] W komponencie formularza:
        *   [ ] Wyświetl komunikat potwierdzający zapis po sukcesie.
        *   [ ] Wyświetl komunikat o błędzie w razie niepowodzenia.
        *   [ ] Zablokuj przycisk podczas wysyłania.

---

## Faza 4: Testowanie i Poprawki (PRD Etap 3 - ~1 Dzień)

1.  **Testy Funkcjonalne:**
    *   [ ] Przetestuj formularz: poprawne zapisy, błędne formaty email, próby zapisu tego samego emaila.
    *   [ ] Sprawdź wyświetlanie komunikatów sukcesu/błędu.
    *   [ ] Zweryfikuj zapisy w tabeli Supabase.
2.  **Testy UI/UX:**
    *   [ ] Przetestuj responsywność na różnych urządzeniach/rozmiarach ekranu (narzędzia deweloperskie przeglądarki).
    *   [ ] Sprawdź czytelność i wygląd na mobile i desktop.
3.  **Wydajność:**
    *   [ ] Użyj Lighthouse w narzędziach deweloperskich Chrome do sprawdzenia wydajności (cel < 2s load time).
    *   [ ] Zoptymalizuj obrazy, jeśli są używane.
4.  **SEO:**
    *   [ ] Sprawdź poprawność meta tagów, nagłówków (H1, H2 itd.).
5.  **Code Review:**
    *   [ ] Przejrzyj kod pod kątem czystości, spójności i potencjalnych błędów.

---

## Faza 5: Publikacja i Monitoring (PRD Etap 4 - ~0.5 Dnia)

1.  **Deployment:**
    *   [ ] Zmerguj finalne zmiany do głównej gałęzi (np. `main` lub `master`).
    *   [ ] Vercel automatycznie zbuduje i wdroży aplikację.
    *   [ ] Przetestuj działanie na środowisku produkcyjnym.
2.  **Monitoring:**
    *   [ ] Obserwuj logi Vercel pod kątem błędów.
    *   [ ] Monitoruj zapisy w panelu Supabase.
    *   [ ] (Opcjonalnie) Skonfiguruj podstawowe alerty.

---

Ten plan zakłada iteracyjne podejście, gdzie poszczególne części są budowane, integrowane i testowane. Można go dostosować w zależności od postępów i ewentualnych problemów.