import styled from 'styled-components';

const LinkButton = styled.button`
  background: transparent;
  border: none;
  color: #eca72c;
  font-weight: bold;
  font-size: 10px;
  transition: all 0.5s;
  text-decoration: none;
  padding: 0;
  font-family: 'Nunito', sans-serif;
  &:hover {
    cursor: pointer;
    color: #27867f;
  }

  @media only screen and (min-width: 1024px) {
    font-size: 26px;
  }
`;

export default LinkButton;
