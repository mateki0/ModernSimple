import styled from 'styled-components';

const SingleOffer = styled.a<{ position: string; row?: string; bgHover: string }>`
  width: 153px;
  height: 25px;
  display: grid;
  grid-row: ${(props) => props.row};
  justify-self: center;
  border-radius: 25px;
  text-decoration: none;
  transition: all 0.5s;
  &:hover {
    background-color: ${(props) => props.bgHover};
    cursor: pointer;
  }
  @media only screen and (min-width: 1024px) {
    width: 338px;
    height: 57px;
    grid-row: auto;
    justify-self: ${(props) => props.position};
  }
`;
export default SingleOffer;
