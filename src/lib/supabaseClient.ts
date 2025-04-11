// src/lib/supabaseClient.ts
import { createClient } from '@supabase/supabase-js';

// Pobieranie zmiennych środowiskowych
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Sprawdzenie, czy zmienne środowiskowe są dostępne
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase URL or Anon Key in environment variables.');
  // W praktyce można tu dodać lepszą obsługę błędów lub logowanie
  // Na razie rzucamy błąd, aby deweloper wiedział o problemie podczas uruchamiania
}

// Utworzenie i eksport klienta Supabase
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
