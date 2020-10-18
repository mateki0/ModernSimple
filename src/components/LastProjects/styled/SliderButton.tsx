import styled from 'styled-components';

const SliderButton = styled.button<{ rotate?: string }>`
  background: transparent;
  border: none;
  transform: ${(props) => (props.rotate === 'true' ? 'rotate(180deg)' : 'none')};
  > * {
    width: 17px;
    height: 15px;
  }
  &:hover {
    cursor: pointer;
  }
  @media only screen and (min-width: 1024px) {
    > * {
      width: 75px;
      height: 70px;
    }
  }
`;

export default SliderButton;
