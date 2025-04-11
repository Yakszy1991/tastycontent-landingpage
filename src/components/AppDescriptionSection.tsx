// src/components/AppDescriptionSection.tsx
import React from 'react';

const AppDescriptionSection = () => {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-orange-100/20 border-4 border-orange-200">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent text-center">
              Jak Działa TastyContent?
            </h2>
            <div className="space-y-6 text-gray-600 text-lg md:text-xl leading-relaxed">
              <p>
                Masz świetne dania, ale brakuje Ci profesjonalnych zdjęć? Z TastyContent to proste!
              </p>
              <p>
                Wyślij nam jedno zdjęcie zrobione telefonem, a my w ciągu 24 godzin przekształcimy je w gotowe materiały marketingowe – zdjęcia, grafiki, a nawet krótkie wideo.
              </p>
              <p>
                Zapomnij o kosztownych sesjach zdjęciowych i długim oczekiwaniu. Oszczędzaj czas i pieniądze, zyskując content, który przyciągnie klientów.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDescriptionSection;
