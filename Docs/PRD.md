# Product Requirements Document (PRD) – TastyContent Waitlist Landing Page

## 1. Cel produktu
Stworzenie prostej strony typu landing page, której głównym celem jest walidacja pomysłu TastyContent poprzez zbieranie adresów e-mail od zainteresowanych właścicieli lokali gastronomicznych.

## 2. Opis produktu
TastyContent to aplikacja webowa i mobilna, która umożliwia restauracjom, kawiarniom i innym lokalom gastronomicznym szybkie zamawianie profesjonalnych materiałów marketingowych (zdjęcia, filmy, grafiki) bez potrzeby sesji zdjęciowych czy zatrudniania agencji. Content dostarczany jest w ciągu 24 godzin, na podstawie jednego zdjęcia przesłanego przez klienta.

Landing page ma komunikować najważniejsze korzyści produktu, oferować bonus 100 zł dla pierwszych 100 zapisanych osób oraz maksymalnie uprościć proces zapisu (e-mail i CTA).

## 3. Struktura strony

### 3.1 Hero section
- Nagłówek (H1): "Zdobądź profesjonalny kontent dla Twojej restauracji w 24h!"
- Podtytuł: "Bez sesji, bez stresu, bez wychodzenia z lokalu. Tylko jedno zdjęcie z telefonu – my zajmujemy się resztą."
- Formularz zapisu: jedno pole e-mail + CTA "Zapisz się i odbierz bonus"

### 3.2 Opis aplikacji
- Krótkie przedstawienie aplikacji, jej działania i kluczowej przewagi konkurencyjnej (24h, brak potrzeby sesji, oszczędność czasu i kosztów)

### 3.3 Bonus
- Treść: "Zapisz się już dziś i odbierz 100 zł na start!"
- Warunki: bonus do wykorzystania przy pierwszym zamówieniu, ograniczony do pierwszych 100 osób

### 3.4 Społeczny dowód
- 1–2 cytaty klientów lub krótkie opinie (np. "Zamówiłam content w piątek – w sobotę miałam gotowe materiały")

### 3.5 Stopka
- E-mail kontaktowy
- Linki: Polityka prywatności, Regulamin
- Ikony social media (jeśli dostępne)

## 4. Funkcjonalności
- Zbieranie e-maili do bazy (np. Supabase lub MailerLite)
- Wyświetlenie potwierdzenia po zapisie
- Prosty i szybki interfejs mobilny oraz desktopowy
- Optymalizacja pod SEO (meta title, opis, nagłówki)

## 5. Wymagania techniczne
- Responsywny design (mobile-first)
- Czas ładowania < 2s
- Hosting: Vercel / Netlify / inna szybka platforma
- CMS lub backend do integracji z bazą maili (opcjonalnie na początek: Mailchimp, ConvertKit lub Supabase)

## 6. Termin i etapy realizacji
- Etap 1 (Dzień 1): makieta + treść (copywriting) – gotowe ✅
- Etap 2 (Dzień 2–3): projekt UI i wdrożenie statycznej wersji
- Etap 3 (Dzień 4): integracja formularza i testy
- Etap 4 (Dzień 5): publikacja i monitoring zapisów

## 7. Mierniki sukcesu
- Liczba zapisanych osób na liście oczekujących (target: 100+)
- CTR przycisku CTA
- Konwersja zapisu do wejścia na landing (min. 20%)
- Feedback jakościowy z formularza follow-up

## 8. Ryzyka i ograniczenia
- Niskie zaufanie do nowych narzędzi – rozwiązane przez atrakcyjny bonus i prosty komunikat
- Zbyt ogólny przekaz – rozwiązany przez skupienie się na gastronomii i konkretnych materiałach
- Brak opinii – rozwiązany przez dodanie nawet 2 wstępnych testimoniali

## 9. Załączniki
- Layout graficzny (mockup w formacie 4:5 – załączony wcześniej)
- Treść landingu (sekcje opisane wyżej)
- Obrazek demo lub gif pokazujący proces działania (opcjonalnie)
