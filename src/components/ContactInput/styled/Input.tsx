import styled from 'styled-components';

const Input = styled.input<{ height: string; width: string }>`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
`;
export default Input;
