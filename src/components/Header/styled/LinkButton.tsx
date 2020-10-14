import styled from 'styled-components';
import { Link } from 'gatsby';

const LinkButton = styled(Link)`
  background: transparent;
  border: none;
  color: #fff;
  font-weight: bold;
  font-size: 30px;
  transition: all 0.5s;
  text-decoration: none;
  padding: 0;
  font-family: 'Nunito', sans-serif;
  &:hover {
    cursor: pointer;
    color: #27867f;
  }

  @media only screen and (min-width: 1024px) {
    margin: 0;
    font-size: 26px;
    color: #eca72c;
  }
`;

export default LinkButton;
