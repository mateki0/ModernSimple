import styled from 'styled-components';

const SingleOffer = styled.div<{ bgColor: string }>`
  background-color: ${(props) => props.bgColor};
  width: 153px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 25px;
`;
export default SingleOffer;
