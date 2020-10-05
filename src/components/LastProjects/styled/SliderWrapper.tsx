import styled from 'styled-components';

const SliderWrapper = styled.div`
  margin: 0 auto;
  width: 241px;
  height: 181px;
  position: relative;
  margin-top: 23px;
  @media only screen and (min-width: 1024px) {
    width: 800px;
    height: auto;
    margin-top: 50px;
  }
  @media only screen and (min-width: 1280px) {
    width: 906px;
  }
`;
export default SliderWrapper;
