// src/components/BonusSection.tsx
import React from 'react';

const BonusSection = () => {
  return (
    <section className="py-16 md:py-24 bg-blue-50"> {/* Inne tło dla wyróżnienia */}
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          {/* TODO: Dodać nagłówek sekcji bonusu */}
          Zapisz się i Odbierz Specjalny Bonus!
        </h2>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8">
          {/* TODO: Dodać opis bonusu */}
          Jako pierwsi dowiesz się o starcie TastyContent i otrzymasz od nas [opis konkretnego bonusu, np. darmowy poradnik PDF o marketingu restauracji / zniżkę na pierwszy miesiąc / ekskluzywny dostęp do funkcji beta]. Nie przegap!
        </p>
        {/* Można tu dodać wezwanie do działania powtarzające formularz lub linkujące do niego */}
        {/* <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Chcę Bonus!</button> */}
      </div>
    </section>
  );
};

export default BonusSection;
