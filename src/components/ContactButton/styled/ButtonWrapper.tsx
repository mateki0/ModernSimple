import styled from 'styled-components';

const ButtonWrapper = styled.button`
  display: flex;
  background-color: #eca72c;
  border: none;
  border-radius: 7px;
  &:hover {
    cursor: pointer;
  }
  @media only screen and (min-width: 1024px) {
    border-radius: 21px;
  }
`;

export default ButtonWrapper;
