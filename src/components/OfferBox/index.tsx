import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import OfferWrapper from './styled/OfferWrapper';
import SingleOffer from './styled/SingleOffer';
import SingleOfferSpan from './styled/SingleOfferSpan';
import OfferBgImg from './styled/OfferBgImg';

const OfferBox: React.FC = () => {
  const desktop = useStaticQuery(
    graphql`
      query {
        mobile: file(relativePath: { eq: "telBg.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1024) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        desktop: file(relativePath: { eq: "kompBg.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 4160) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  );
  const backgroundImages = [
    desktop.mobile.childImageSharp.fluid,
    {
      ...desktop.desktop.childImageSharp.fluid,
      media: '( min-width:1024px )',
    },
  ];
  return (
    <OfferWrapper>
      <OfferBgImg fluid={backgroundImages}>
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
