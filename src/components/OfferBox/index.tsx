import * as React from 'react';
import OfferWrapper from './styled/OfferWrapper';
import OfferColumn from './styled/OfferColumn';
import SingleOffer from './styled/SingleOffer';
import SingleOfferSpan from './styled/SingleOfferSpan';

const OfferBox: React.FC = () => {
  return (
    <OfferWrapper>
      <OfferColumn position="start">
        <SingleOffer bgColor="#EB9419">
          <SingleOfferSpan> Identyfikacja wizualna</SingleOfferSpan>
        </SingleOffer>
        <SingleOffer bgColor="#27867F">
          <SingleOfferSpan>Materiały reklamowe</SingleOfferSpan>
        </SingleOffer>
        <SingleOffer bgColor="#EB9419">
          <SingleOfferSpan>Zaproszenia</SingleOfferSpan>
        </SingleOffer>
      </OfferColumn>
      <OfferColumn position="end">
        <SingleOffer bgColor="#27867F">
          <SingleOfferSpan>Logo</SingleOfferSpan>
        </SingleOffer>
        <SingleOffer bgColor="#EB9419">
          <SingleOfferSpan>Strony internetowe</SingleOfferSpan>
        </SingleOffer>
        <SingleOffer bgColor="#27867F">
          <SingleOfferSpan>Metryczki</SingleOfferSpan>
        </SingleOffer>
      </OfferColumn>
    </OfferWrapper>
  );
};
export default OfferBox;
