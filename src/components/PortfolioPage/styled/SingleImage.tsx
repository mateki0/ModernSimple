import styled from 'styled-components';
import DescriptionSpan from './DescriptionSpan';
import ImageMask from './ImageMask';

const SingleImage = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  transition: all 0.5s;

  @media only screen and (min-width: 1024px) {
    &:hover {
      cursor: pointer;
      ${ImageMask} {
        opacity: 1;
      }
    }
  }
`;

export default SingleImage;
