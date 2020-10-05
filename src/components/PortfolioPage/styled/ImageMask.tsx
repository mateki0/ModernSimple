import styled from 'styled-components';

const ImageMask = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.6);
  opacity: 0;
  transition: all 0.5s;
`;

export default ImageMask;
