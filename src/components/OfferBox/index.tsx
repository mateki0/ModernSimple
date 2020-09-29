import * as React from 'react';
import OfferWrapper from './styled/OfferWrapper';
import OfferColumn from './styled/OfferColumn';
import SingleOffer from './styled/SingleOffer';
import SingleOfferSpan from './styled/SingleOfferSpan';
import OfferBgImg from './styled/OfferBgImg';

const OfferBox: React.FC = () => {
  return (
    <OfferWrapper>
      <OfferBgImg>
        <SingleOffer bgColor="#EB9419" position="end">
          <SingleOfferSpan> Identyfikacja wizualna</SingleOfferSpan>
        </SingleOffer>
        <SingleOffer bgColor="#27867F" position="center">
          <SingleOfferSpan>Materiały reklamowe</SingleOfferSpan>
        </SingleOffer>
        <SingleOffer bgColor="#EB9419" position="start">
          <SingleOfferSpan>Zaproszenia</SingleOfferSpan>
        </SingleOffer>

        <SingleOffer bgColor="#27867F" position="end">
          <SingleOfferSpan>Logo</SingleOfferSpan>
        </SingleOffer>
        <SingleOffer bgColor="#EB9419" position="center">
          <SingleOfferSpan>Strony internetowe</SingleOfferSpan>
        </SingleOffer>
        <SingleOffer bgColor="#27867F" position="start">
          <SingleOfferSpan>Metryczki</SingleOfferSpan>
        </SingleOffer>
      </OfferBgImg>
    </OfferWrapper>
  );
};
export default OfferBox;
