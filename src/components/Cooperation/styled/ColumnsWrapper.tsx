import styled from 'styled-components';

const ColumnsWrapper = styled.div`
width:100%;
height:100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 20vw;
  grid-template-areas:
    "logo identyfikacja"
    " zaproszenia materialy";
  @media only screen and (min-width: 1024px) {
    
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-areas:
    "logo identyfikacja materialy zaproszenia"
    "logo strony materialy metryczki"
    "logo . materialy .";
    column-gap: 5vw;
  }
`;
export default ColumnsWrapper;
