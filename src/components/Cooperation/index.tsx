import * as React from 'react';
import CooperationWrapper from './styled/CooperationWrapper';
import Heading from './styled/Heading';

import ColumnsWrapper from './styled/ColumnsWrapper';
import ColumnText from './styled/ColumnText';
import ColumnTitle from './styled/ColumnTitle';

const Cooperation: React.FC = () => {
  return (
    <CooperationWrapper>
      <Heading>Jak przebiega współpraca?</Heading>
      <ColumnsWrapper>
        <div>
          <ColumnTitle>Ustalenie Szczegółów, wycena</ColumnTitle>
          <ColumnText>
            Najpierw ustalamy, czego dokładnie potrzebujesz. Na podstawie tych informacji przygotuję
            wycenę.
          </ColumnText>
        </div>
        <div>
          <ColumnTitle>Realizacja projektu</ColumnTitle>
          <ColumnText>
            Po dopełnieniu formalności przystępuję do realizacji zlecenia. W wyznaczonym terminie
            przesyłam wstępny projekt, który akceptujesz albo nie.
          </ColumnText>
        </div>
        <div>
          <ColumnTitle>Podpisanie umowy</ColumnTitle>
          <ColumnText>
            Kolejny etap to podpisanie umowy. Sporządzamy umowę na podstawie podanych przez Ciebie
            danych. Po zapoznaniu się z umowa będziemy mogli zacząć realizować projekt.
          </ColumnText>
        </div>
        <div>
          <ColumnTitle>Akceptacja projektu</ColumnTitle>
          <ColumnText>
            Zakończony proces projektowy to moment, w którym dokonujesz zatwierdzenia pracy. Gotowe
            pliki będziesz mógł pobrać z mojej prywatnej chmury.
          </ColumnText>
        </div>
      </ColumnsWrapper>
    </CooperationWrapper>
  );
};

export default Cooperation;
