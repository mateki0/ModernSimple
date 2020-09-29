import * as React from 'react';
import AboutMeWrapper from './styled/AboutMeWrapper';
import AboutTitleWrapper from './styled/AboutTitleWrapper';
import AboutTitleSpan from './styled/AboutTitleSpan';
import AboutDescription from './styled/AboutDescription';
import DescriptionWrapper from './styled/DescriptionWrapper';

const AboutMeDescription: React.FC<{ displayMobile?: boolean }> = ({ displayMobile }) => {
  return (
    <AboutMeWrapper displayMobile={displayMobile}>
      <AboutTitleWrapper>
        <AboutTitleSpan>O Mnie</AboutTitleSpan>
      </AboutTitleWrapper>
      <DescriptionWrapper>
        <AboutDescription>
          Nazywam się Klaudia Ryś i jestem grafikiem komputerowym. Mam tytuł magistra sztuki.
          Skończyłam studia jednolite magisterskie na kierunku grafika w Wyższej Szkole Technicznej
          w Katowicach. Grafika jest moją pasją. Bardzo lubię projektować loga oraz identyfikacje
          wizualne. Charakteryzuje mnie prostota i nowoczesność z tego właśnie wzięła się nazwa. Z
          Chęcią podejmuje nowe wyzwania. Jestem osoba kreatywną lubię oryginalność. Chętnie podejmę
          nowe zlecenia. Więc jeżeli potrzebujesz logo, materiałów reklamowych, grafiki, zaproszeń,
          strony internetowej, to zapraszam do współpracy. Zróbmy to razem!
        </AboutDescription>
      </DescriptionWrapper>
    </AboutMeWrapper>
  );
};
export default AboutMeDescription;
