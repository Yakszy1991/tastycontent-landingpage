'use client';

import React, { useState } from 'react';
import { supabase } from '@/lib/supabaseClient'; // Importujemy klienta Supabase

const HeroSection = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Stan ładowania

  const validateEmail = (email: string) => {
    // Backslashes in regex need to be escaped for JSON
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => { // Funkcja asynchroniczna
    event.preventDefault();
    setError('');
    setSuccessMessage('');
    setIsLoading(true); // Rozpoczynamy ładowanie

    if (!email) {
      setError('Proszę wpisać adres e-mail.');
      setIsLoading(false); // Kończymy ładowanie
      return;
    }

    if (!validateEmail(email)) {
      setError('Proszę wpisać poprawny adres e-mail.');
      setIsLoading(false); // Kończymy ładowanie
      return;
    }

    try {
      // Próba wstawienia emaila do tabeli 'waitlist_signups'
      // .select() jest używane, aby sprawdzić błędy unikalności itp.
      const { data, error: supabaseError } = await supabase
        .from('waitlist_signups')
        .insert([{ email: email }])
        .select();

      if (supabaseError) {
        // Sprawdzamy, czy błąd to naruszenie unikalnego klucza (email już istnieje)
        if (supabaseError.code === '23505') { // Kod błędu PostgreSQL dla unique_violation
           setError('Ten adres e-mail jest już na liście.');
        } else {
          console.error('Błąd Supabase:', supabaseError);
          setError('Wystąpił błąd podczas zapisu. Spróbuj ponownie.');
        }
      } else {
        console.log('E-mail pomyślnie zapisany:', email, data);
        setSuccessMessage('Dziękujemy za zapisanie się! Odezwiemy się wkrótce.');
        setEmail(''); // Czyścimy pole po sukcesie
      }
    } catch (err) {
      console.error('Błąd sieci lub inny:', err);
      setError('Wystąpił nieoczekiwany błąd. Sprawdź połączenie.');
    } finally {
      setIsLoading(false); // Zawsze kończymy ładowanie
    }
  };

  return (
    <section className="py-16 md:py-20 flex items-center justify-center bg-gradient-to-b from-orange-50 via-orange-100 to-white px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-orange-400">
          Zdobądź profesjonalny kontent dla Twojej restauracji w 24h!
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Bez sesji, bez stresu, bez wychodzenia z lokalu. Tylko jedno zdjęcie z telefonu – my zajmujemy się resztą.
        </p>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto w-full">
          <div className="flex flex-col gap-4">
            <div className="relative w-full">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Twój najlepszy adres e-mail"
                className={`w-full px-6 py-4 text-lg rounded-2xl bg-white border-0 shadow-lg shadow-orange-100/20 focus:outline-none focus:ring-2 focus:ring-orange-200 text-gray-800 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={isLoading}
              />
            </div>
            <button
              type="submit"
              className={`w-full px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-400 text-white text-lg rounded-2xl font-medium hover:from-orange-600 hover:to-orange-500 transition-all duration-200 shadow-lg shadow-orange-400/20 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={isLoading}
            >
              {isLoading ? 'Zapisywanie...' : 'Zapisz się i odbierz bonus'}
            </button>
          </div>
          {error && (
            <p className="text-red-500 text-sm mt-3">{error}</p>
          )}
          {successMessage && (
            <p className="text-green-500 text-sm mt-3">{successMessage}</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default HeroSection;
