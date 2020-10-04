import styled from 'styled-components';

const SliderButton = styled.button<{ rotate?: boolean }>`
  background: transparent;
  border: none;
  transform: ${(props) => (props.rotate ? 'rotate(180deg)' : '0')};
  &:hover {
    cursor: pointer;
  }
`;

export default SliderButton;
