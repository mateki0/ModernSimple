import * as React from 'react';
import CooperationWrapper from './styled/CooperationWrapper';
import Heading from './styled/Heading';
import Stage from './styled/Stage';
import StageWrapper from './styled/StagesWrapper';
import StageText from './styled/StageText';
import StageTitle from './styled/StageTitle';

const Cooperation: React.FC = () => {
  return (
    <CooperationWrapper>
      <Heading>Jak przebiega współpraca?</Heading>
      <StageWrapper>
        <Stage>
          <StageTitle>Ustalenie Szczegółów, wycena</StageTitle>
          <StageText>
            Najpierw ustalamy, czego dokładnie potrzebujesz. Na podstawie tych informacji przygotuję
            wycenę.
          </StageText>
        </Stage>
        <Stage>
          <StageTitle>Realizacja projektu</StageTitle>
          <StageText>
            Po dopełnieniu formalności przystępuję do realizacji zlecenia. W wyznaczonym terminie
            przesyłam wstępny projekt, który akceptujesz albo nie.
          </StageText>
        </Stage>
        <Stage>
          <StageTitle>Podpisanie umowy</StageTitle>
          <StageText>
            Kolejny etap to podpisanie umowy. Sporządzamy umowę na podstawie podanych przez Ciebie
            danych. Po zapoznaniu się z umowa będziemy mogli zacząć realizować projekt.
          </StageText>
        </Stage>
        <Stage>
          <StageTitle>Akceptacja projektu</StageTitle>
          <StageText>
            Zakończony proces projektowy to moment, w którym dokonujesz zatwierdzenia pracy. Gotowe
            pliki będziesz mógł pobrać z mojej prywatnej chmury.
          </StageText>
        </Stage>
      </StageWrapper>
    </CooperationWrapper>
  );
};

export default Cooperation;
