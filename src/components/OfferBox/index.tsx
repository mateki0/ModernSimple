import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import OfferWrapper from './styled/OfferWrapper';
import SingleOffer from './styled/SingleOffer';
import SingleOfferSpan from './styled/SingleOfferSpan';
import OfferBgImg from './styled/OfferBgImg';
import GatsbyImage from '../GatsbyImage';

const OfferBox: React.FC = () => {
  const  desktop  = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "kompBg.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 4160) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  );
  console.log(desktop)
  return (
    <OfferWrapper>
      <OfferBgImg >
        <SingleOffer href="/uslugi" position="end" row="1/1" bgHover="#27867f" bgColor="#eca72c">
          <SingleOfferSpan> Identyfikacja wizualna</SingleOfferSpan>
        </SingleOffer>
        <SingleOffer href="/uslugi" position="center" row="2/2" bgHover="#eca72c" bgColor="#27867f">
          <SingleOfferSpan>Materiały reklamowe</SingleOfferSpan>
        </SingleOffer>
        <SingleOffer href="/uslugi" position="start" row="3/3" bgHover="#27867f" bgColor="#eca72c">
          <SingleOfferSpan>Zaproszenia</SingleOfferSpan>
        </SingleOffer>

        <SingleOffer href="/uslugi" position="end" bgHover="#eca72c" bgColor="#27867f">
          <SingleOfferSpan>Logo</SingleOfferSpan>
        </SingleOffer>
        <SingleOffer href="/uslugi" position="center" bgHover="#27867f" bgColor="#eca72c">
          <SingleOfferSpan>Strony internetowe</SingleOfferSpan>
        </SingleOffer>
        <SingleOffer href="/uslugi" position="start" bgHover="#eca72c" bgColor="#27867f">
          <SingleOfferSpan>Metryczki</SingleOfferSpan>
        </SingleOffer>
      </OfferBgImg>
    </OfferWrapper>
  );
};
export default OfferBox;
