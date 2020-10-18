import styled from 'styled-components';

const FiltersWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-bottom:23px;
  @media only screen and (min-width: 1024px) {
    margin-bottom:50px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 50px;
  }
`;

export default FiltersWrapper;
