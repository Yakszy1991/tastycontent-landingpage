// src/components/AppDescriptionSection.tsx
import React from 'react';

const AppDescriptionSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50"> {/* Lekkie tło dla odróżnienia */}
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          {/* TODO: Dodać nagłówek sekcji */}
          Poznaj Możliwości TastyContent
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* TODO: Dodać 3 bloki opisujące cechy/korzyści */}
          {/* Przykład bloku 1 */}
          <div className="p-6 border border-gray-200 rounded-lg shadow-sm bg-white">
            {/* Można tu dodać ikonę */}
            <h3 className="text-xl font-semibold mb-2">Łatwe Zarządzanie Menu</h3>
            <p className="text-gray-600">
              Intuicyjny interfejs pozwala szybko aktualizować dania, ceny i opisy.
            </p>
          </div>
          {/* Przykład bloku 2 */}
          <div className="p-6 border border-gray-200 rounded-lg shadow-sm bg-white">
            {/* Można tu dodać ikonę */}
            <h3 className="text-xl font-semibold mb-2">Automatyczne Tłumaczenia</h3>
            <p className="text-gray-600">
              Dotrzyj do szerszego grona klientów dzięki menu w wielu językach.
            </p>
          </div>
          {/* Przykład bloku 3 */}
          <div className="p-6 border border-gray-200 rounded-lg shadow-sm bg-white">
            {/* Można tu dodać ikonę */}
            <h3 className="text-xl font-semibold mb-2">Integracja z QR</h3>
            <p className="text-gray-600">
              Generuj kody QR, aby klienci mogli łatwo zobaczyć menu na swoich telefonach.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDescriptionSection;
