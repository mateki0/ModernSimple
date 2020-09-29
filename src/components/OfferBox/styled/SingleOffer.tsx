import styled from 'styled-components';

const SingleOffer = styled.div<{ bgColor: string; position: string }>`
  background-color: ${(props) => props.bgColor};
  width: 153px;
  height: 25px;
  display: grid;
  justify-self: center;
  border-radius: 25px;
  @media only screen and (min-width: 1024px) {
    width: 338px;
    height: 57px;
    justify-self: ${(props) => props.position};
  }
`;
export default SingleOffer;
