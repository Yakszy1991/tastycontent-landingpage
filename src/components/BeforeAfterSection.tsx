// src/components/BeforeAfterSection.tsx
import React from 'react';

const BeforeAfterSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white"> {/* Białe tło */}
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          {/* TODO: Dodać nagłówek sekcji */}
          Zobacz Różnicę z TastyContent!
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8">
          {/* Kontener "Przed" */}
          <div className="flex-1 p-4 border border-dashed border-gray-400 rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-gray-500">Przed</h3>
            <div className="bg-gray-200 h-64 flex items-center justify-center text-gray-500 rounded">
              {/* TODO: Dodać obrazek "Przed" */}
              (Miejsce na zdjęcie od klienta)
            </div>
          </div>
          {/* Kontener "Po" */}
          <div className="flex-1 p-4 border border-solid border-blue-500 rounded-lg shadow-md bg-blue-50">
            <h3 className="text-xl font-semibold mb-2 text-blue-700">Po (z TastyContent!)</h3>
            <div className="bg-gray-100 h-64 flex items-center justify-center text-blue-600 rounded">
              {/* TODO: Dodać obrazek "Po" */}
              (Miejsce na content wygenerowany przez nas)
            </div>
          </div>
        </div>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          {/* TODO: Dodać krótki opis transformacji */}
          Nawet zwykłe zdjęcie z telefonu zamieniamy w profesjonalny materiał marketingowy, który przyciąga klientów. Szybko i bez wysiłku z Twojej strony!
        </p>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
