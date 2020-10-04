import styled from 'styled-components';

const ColumnsWrapper = styled.div`
  column-count: 2;

  @media only screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 5vw;
  }
`;
export default ColumnsWrapper;
