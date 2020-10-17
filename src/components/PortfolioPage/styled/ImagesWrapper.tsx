import styled from 'styled-components';

const ImagesWrapper = styled.div`

&:first-child{
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  padding-top: 23px;
  width:100%;
  height:auto;
  @media only screen and (min-width: 1024px) {
    padding-top: 50px;
    gap: 50px;
  }
}
`;

export default ImagesWrapper;
