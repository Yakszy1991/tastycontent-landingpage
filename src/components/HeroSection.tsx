// src/components/HeroSection.tsx
import React from 'react';

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center py-16 md:py-24 lg:py-32">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
        {/* TODO: Dodać główny nagłówek (H1) */}
        Główny Chwytliwy Nagłówek Tutaj
      </h1>
      <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 max-w-2xl">
        {/* TODO: Dodać podtytuł (paragraf) */}
        Krótki opis wyjaśniający korzyść dla użytkownika i zachęcający do działania.
      </p>
      <form className="flex flex-col sm:flex-row items-center gap-4">
        {/* TODO: Dodać pole input email */}
        <input
          type="email"
          placeholder="Twój najlepszy adres e-mail"
          className="px-4 py-2 border border-gray-300 rounded-md w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-blue-500"
          // Na razie nie dodajemy obsługi stanu ani wysyłania
        />
        {/* TODO: Dodać przycisk CTA */}
        <button
          type="submit" // Typ submit, ale na razie bez logiki
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Dołącz do listy!
        </button>
      </form>
      {/* Możemy tu później dodać informację o bonusie */}
    </section>
  );
};

export default HeroSection;
