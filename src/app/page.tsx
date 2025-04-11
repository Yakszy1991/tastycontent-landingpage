import HeroSection from '@/components/HeroSection'; // Zaimportowano komponent Hero

import AppDescriptionSection from '@/components/AppDescriptionSection'; // Zaimportowano komponent Opisu
import BonusSection from '@/components/BonusSection'; // Zaimportowano komponent Bonusu
import BeforeAfterSection from '@/components/BeforeAfterSection'; // Zaimportowano komponent Przed i Po

export default function Home() {
  return (
    <main>
      <HeroSection /> {/* Użyto komponentu HeroSection */}

      <AppDescriptionSection /> {/* Użyto komponentu AppDescriptionSection */}
      <BonusSection /> {/* Użyto komponentu BonusSection */}
      <BeforeAfterSection /> {/* Użyto komponentu BeforeAfterSection */}
      {/* Komentarz: Tutaj będziemy dodawać ostatnią sekcję: Stopka (Footer) */}
    </main>
  );
}