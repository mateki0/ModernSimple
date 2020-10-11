import styled from 'styled-components';

const FilterButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: #eca72c;
  border: none;
  border-radius: 25px;
  padding: 7px 0;
  &:hover {
    background: #2c9692;
    cursor: pointer;
  }
`;

export default FilterButton;
