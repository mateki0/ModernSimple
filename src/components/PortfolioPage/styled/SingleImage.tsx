import styled from 'styled-components';
import DescriptionSpan from './DescriptionSpan';
import ImageMask from './ImageMask';

const SingleImage = styled.div`
  max-width: 170px;

  position: relative;
  transition: all 0.5s;
  height: auto;
  @media only screen and (min-width: 1024px) {
    max-width: 880px;
    &:hover {
      cursor: pointer;
      ${ImageMask} {
        opacity: 1;
      }
    }
  }
`;

export default SingleImage;
