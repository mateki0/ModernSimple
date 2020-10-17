import styled from 'styled-components';

const InputWrapper = styled.div`
  position: relative;
  width: 98%;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  @media only screen and (min-width: 1024px) {
    width:94%;
    margin-bottom: 20px;
  }
`;

export default InputWrapper;
