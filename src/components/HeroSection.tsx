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
    <section className="flex flex-col items-center justify-center text-center py-16 md:py-24 lg:py-32">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
        Główny Chwytliwy Nagłówek Tutaj
      </h1>
      <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 max-w-2xl">
        Krótki opis wyjaśniający korzyść dla użytkownika i zachęcający do działania.
      </p>
      <form className="flex flex-col sm:flex-row items-center gap-4" onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Twój najlepszy adres e-mail"
          className={`px-4 py-2 border border-gray-300 rounded-md w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-blue-500 ${error ? 'ring-2 ring-red-500' : ''} ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={isLoading}
        />
        {error && <p className="text-red-300 text-sm mt-2">{error}</p>}
        <button
          type="submit"
          className={`px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={isLoading}
        >
          {isLoading ? 'Zapisywanie...' : 'Dołącz do listy!'}
        </button>
      </form>
      {successMessage && <p id="success-message" className="text-green-300 text-sm mt-2">{successMessage}</p>} {/* Wyświetlanie sukcesu */}
    </section>
  );
};

export default HeroSection;
