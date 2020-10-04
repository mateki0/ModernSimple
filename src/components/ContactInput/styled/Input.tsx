import styled from 'styled-components';

const Input = styled.input<{ height?: string; textarea?: boolean }>`
  height: ${(props) => (props.textarea ? '92px' : '25px')};

  border: 2px solid #2c9692;
  border-radius: 7px;
  padding: 5px 0 5px 5px;
  font-size: 16px;
  @media only screen and (min-width: 1024px) {
    width: 802px;
    height: 58px;
    height: ${(props) => (props.textarea ? '213px' : '58px')};
    border-radius: 23px;
    font-size: 23px;
  }
`;
export default Input;
