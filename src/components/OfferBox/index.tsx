import * as React from 'react';
import OfferWrapper from './styled/OfferWrapper';
import SingleOffer from './styled/SingleOffer';
import SingleOfferSpan from './styled/SingleOfferSpan';
import OfferBgImg from './styled/OfferBgImg';

const OfferBox: React.FC = () => {
  return (
    <OfferWrapper>
      <OfferBgImg>
        <SingleOffer href="/uslugi" position="end" row="1/1" bgHover="#27867f">
          <SingleOfferSpan> Identyfikacja wizualna</SingleOfferSpan>
        </SingleOffer>
        <SingleOffer href="/uslugi" position="center" row="2/2" bgHover="#eca72c">
          <SingleOfferSpan>Materiały reklamowe</SingleOfferSpan>
        </SingleOffer>
        <SingleOffer href="/uslugi" position="start" row="3/3" bgHover="#27867f">
          <SingleOfferSpan>Zaproszenia</SingleOfferSpan>
        </SingleOffer>

        <SingleOffer href="/uslugi" position="end" bgHover="#eca72c">
          <SingleOfferSpan>Logo</SingleOfferSpan>
        </SingleOffer>
        <SingleOffer href="/uslugi" position="center" bgHover="#27867f">
          <SingleOfferSpan>Strony internetowe</SingleOfferSpan>
        </SingleOffer>
        <SingleOffer href="/uslugi" position="start" bgHover="#eca72c">
          <SingleOfferSpan>Metryczki</SingleOfferSpan>
        </SingleOffer>
      </OfferBgImg>
    </OfferWrapper>
  );
};
export default OfferBox;
