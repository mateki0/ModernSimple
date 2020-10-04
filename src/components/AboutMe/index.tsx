import * as React from 'react';

import SectionTitleWrapper from './styled/SectionTitleWrapper';
import SectionTitleSpan from './styled/SectionTitleSpan';
import SectionContent from './styled/SectionContent';
import SectionWrapper from './styled/SectionWrapper';
import ComponentWrapper from './styled/ComponentWrapper';

const AboutMeDescription: React.FC<{ displayMobile?: boolean }> = ({ displayMobile }) => {
  return (
    <ComponentWrapper displayMobile={displayMobile}>
      <SectionTitleWrapper>
        <SectionTitleSpan>O Mnie</SectionTitleSpan>
      </SectionTitleWrapper>
      <SectionWrapper>
        <SectionContent>
          Nazywam się Klaudia Ryś i jestem grafikiem komputerowym. Mam tytuł magistra sztuki.
          Skończyłam studia jednolite magisterskie na kierunku grafika w Wyższej Szkole Technicznej
          w Katowicach. Grafika jest moją pasją. Bardzo lubię projektować loga oraz identyfikacje
          wizualne. Charakteryzuje mnie prostota i nowoczesność z tego właśnie wzięła się nazwa. Z
          chęcią podejmuje nowe wyzwania. Jestem osoba kreatywną lubię oryginalność. Chętnie podejmę
          nowe zlecenia. Więc jeżeli potrzebujesz logo, materiałów reklamowych, grafiki, zaproszeń,
          strony internetowej, to zapraszam do współpracy. Zróbmy to razem!
        </SectionContent>
      </SectionWrapper>
    </ComponentWrapper>
  );
};
export default AboutMeDescription;
