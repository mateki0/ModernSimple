import styled from 'styled-components';
import { Link } from 'gatsby';
const FilterLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: #eca72c;
  border: none;
  border-radius: 25px;
  padding: 7px 0;
  transition: all 0.5s;
  &:hover {
    background: #2c9692;
    cursor: pointer;
  }
  text-decoration: none;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  font-family: 'Nunito', sans-serif;
  @media only screen and (min-width: 1024px) {
    font-size: 26px;
  }
`;
export default FilterLink;
