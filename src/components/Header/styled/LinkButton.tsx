import styled from 'styled-components';

const LinkButton = styled.button`
  background: transparent;
  border: none;
  color: #eca72c;
  font-weight: bold;
  font-size: 10px;
  &:hover {
    cursor: pointer;
  }

  @media only screen and (min-width: 1024px) {
    font-size: 24px;
  }
`;

export default LinkButton;
