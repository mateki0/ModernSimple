import styled from 'styled-components';

const ComponentWrapper = styled.div<{ displayMobile?: boolean }>`
  flex-direction: column;
  padding: 20px 0;
  display: ${(props) => (!props.displayMobile ? 'none' : 'flex')};
  border-bottom: ${(props) => (props.displayMobile ? '1px solid #eca72c' : 'none')};
  @media only screen and (min-width: 1024px) {
    padding-left: 40px;
    display: ${(props) => (props.displayMobile ? 'none' : 'flex')};
  }
`;

export default ComponentWrapper;
