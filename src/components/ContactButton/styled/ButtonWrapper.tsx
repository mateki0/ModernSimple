import styled from 'styled-components';

const ButtonWrapper = styled.button`
  display: flex;
  background-color: #eca72c;
  border: none;
  border-radius: 7px;
  padding: 1px 15px;
  @media only screen and (min-width: 1024px) {
    padding: 12px 55px;
    border-radius: 21px;
  }
`;

export default ButtonWrapper;
