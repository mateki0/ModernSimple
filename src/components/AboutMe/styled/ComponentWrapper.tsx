import styled from 'styled-components';

const ComponentWrapper = styled.div<{ displayMobile?: boolean }>`
  flex-direction: column;
  width:100%;
  padding: 23px 0;
  display: ${(props) => (!props.displayMobile ? 'none' : 'flex')};
  border-bottom: ${(props) => (props.displayMobile ? '2px solid #eca72c' : 'none')};
  @media only screen and (min-width: 1024px) {
    padding-left: 40px;
    padding-top: 0;
    display: ${(props) => (props.displayMobile ? 'none' : 'flex')};
  }
`;

export default ComponentWrapper;
