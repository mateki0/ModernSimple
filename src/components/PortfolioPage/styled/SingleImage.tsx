import styled from 'styled-components';
import DescriptionSpan from './DescriptionSpan';
import ImageMask from './ImageMask';

const SingleImage = styled.div`
  width: 100%;

  position: relative;
  transition: all 0.5s;
  height: auto;
  @media only screen and (min-width: 1024px) {
    width: 905px;
    &:hover {
      cursor: pointer;
      ${ImageMask} {
        opacity: 1;
      }
    }
  }
`;

export default SingleImage;
