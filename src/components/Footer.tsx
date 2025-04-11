// src/components/Footer.tsx
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-gray-400 py-8 mt-auto"> {/* Stopka na dole, ciemne tło */}
      <div className="container mx-auto px-4 text-center">
        <div className="mb-4">
          {/* TODO: Dodać link do polityki prywatności */}
          <a href="#" className="hover:text-white mx-2">Polityka Prywatności</a>
          {/* TODO: Dodać link do regulaminu */}
          <a href="#" className="hover:text-white mx-2">Regulamin</a>
          {/* TODO: Dodać adres email kontaktowy */}
          <a href="mailto:kontakt@tastycontent.pl" className="hover:text-white mx-2">kontakt@tastycontent.pl</a>
        </div>
        <p>&copy; {currentYear} TastyContent. Wszelkie prawa zastrzeżone.</p>
        {/* Można tu dodać ikony social media w przyszłości */}
      </div>
    </footer>
  );
};

export default Footer;
