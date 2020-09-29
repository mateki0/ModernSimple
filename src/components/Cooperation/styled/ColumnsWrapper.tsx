import styled from 'styled-components';

const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px 50px;
  @media only screen and (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    padding: 10px 0;
  }
`;
export default ColumnsWrapper;
