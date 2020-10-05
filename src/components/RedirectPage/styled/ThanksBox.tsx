import styled from 'styled-components';

const ThanksBox = styled.div`
  font-family: 'Nunito', sans-serif;
  background-color: #eca72c;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 80%;
  border-radius: 25px;
  @media only screen and (min-width: 1024px) {
    width: 50%;
  }
`;
export default ThanksBox;
