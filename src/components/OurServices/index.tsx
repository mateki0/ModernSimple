import * as React from 'react';
import ColumnsWrapper from '../Cooperation/styled/ColumnsWrapper';
import Heading from '../Cooperation/styled/Heading';

import ServicesWrapper from './styled/ServicesWrapper';
import ColumnText from '../Cooperation/styled/ColumnText';
import ColumnTitle from '../Cooperation/styled/ColumnTitle';
import AdvertiseMaterialsUl from './styled/AdvertiseMaterialsUl';
import AdvertiseMaterialItem from './styled/AdvertiseMaterialItem';
import LogoType from './styled/LogoType';
import LogoTypeContainer from './styled/LogoTypeContainer';

const OurServices: React.FC = () => {
  return (
    <ServicesWrapper>
      <Heading>Nasze Usługi</Heading>
      <ColumnsWrapper>
        <div>
          <ColumnTitle>Identyfikacja Wizualna</ColumnTitle>
          <ColumnText>
            Podstawowe narzędzie do kreowania wizerunku marki. Jeżeli interesuje cię wyróżnienie się
            na rynku i stworzenie spójnej identyfikacji, to ta opcja jest właśnie dla Ciebie.
            Zadbamy o twój znak o materiały reklamowe i wizerunek marki. Wycena tworzona jest
            indywidualnie i zależy od Twoich potrzeb.
          </ColumnText>
        </div>
        <div>
          <ColumnTitle>Strony internetowe</ColumnTitle>
          <ColumnText>
            Potrzebujesz strony internetowej? To ta opcja jest właśnie dla Ciebie. Zaprojektujemy
            Twoją stronę internetową. Po akceptacji prototypu przystąpimy do jej realizacji.
          </ColumnText>
        </div>
        <div>
          <ColumnTitle>Materiały reklamowe</ColumnTitle>
          <AdvertiseMaterialsUl>
            <AdvertiseMaterialItem>Wizytówka jednostronna</AdvertiseMaterialItem>
            <AdvertiseMaterialItem>Wizytówka dwustronna</AdvertiseMaterialItem>
            <AdvertiseMaterialItem>Katalog lub folder reklamowy</AdvertiseMaterialItem>
            <AdvertiseMaterialItem>Baner</AdvertiseMaterialItem>
            <AdvertiseMaterialItem>Ulotka</AdvertiseMaterialItem>
            <AdvertiseMaterialItem>Roll-up, potykacz</AdvertiseMaterialItem>
            <AdvertiseMaterialItem>Plakat</AdvertiseMaterialItem>
            <AdvertiseMaterialItem>Papier firmowy</AdvertiseMaterialItem>
            <AdvertiseMaterialItem>Teczki</AdvertiseMaterialItem>
            <AdvertiseMaterialItem>Koperty</AdvertiseMaterialItem>
          </AdvertiseMaterialsUl>
        </div>
        <div>
          <ColumnTitle>Metryczki</ColumnTitle>
          <ColumnText>
            Metryczki Idealny pomysł na prezent, pamiątkę. Indywidualne projektu metryczek dla
            chłopców i dziewczynek. Grafiki dla Dzieci Mamy w swojej ofercie również nowoczesne
            grafiki do dziecięcych pokoików.
          </ColumnText>
        </div>
        <LogoTypeContainer>
          <ColumnTitle>Logo</ColumnTitle>
          <LogoType>Logo Standard (1 propozycja)</LogoType>
          <ColumnText>
            Standardowa usługa projektowa logo. Przeprowadzam z Tobą dokładny wywiad (brief) oraz
            gromadzę wszystkie wytyczne i wskazówki. Następnie przedstawiam Ci swoją propozycję
            (wstępny zarys, rysunek odręczny), który zatwierdzasz lub nie. Kolejno przygotowuję
            właściwą wersję w programie graficznym.
          </ColumnText>

          <LogoType>Logo Standard+ (2 propozycje)</LogoType>
          <ColumnText>
            Logo standard+, rozszerzona usługa projektowa. Zamiast jednej propozycji znaku dostajesz
            2. Zdecyduj się na ten pakiet, jeżeli jedna propozycja to dla Ciebie za mało!
          </ColumnText>
          <LogoType>Logo Premium (3 propozycje)</LogoType>
          <ColumnText>
            Usługa projektowa logo dla najbardziej wymagających! Przeprowadzam z Tobą dokładny
            wywiad (brief) oraz gromadzę wszystkie wytyczne i wskazówki. Następnie przedstawiam Ci
            trzy, przygotowane w programie graficznym, propozycje logo. Wybierz ten pakiet, jeżeli
            chcesz mieć duży wybór!
          </ColumnText>
        </LogoTypeContainer>
        <div>
          <ColumnTitle>Zaproszenia</ColumnTitle>
          <ColumnText>
            Jeżeli potrzebujesz zaproszeń na ważne wydarzenie, ślub, urodziny, chrzciny, itp. To ta
            opcja jest właśnie dla Ciebie. Wycena jest robiona indywidualnie. Zależy od tego czego
            potrzebujesz i w jakich ilościach.
          </ColumnText>
        </div>
      </ColumnsWrapper>
    </ServicesWrapper>
  );
};

export default OurServices;
