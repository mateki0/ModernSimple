import styled from 'styled-components';

const LogoTypeContainer = styled.div<{ row?: string; column?: string; margin?: string }>`
  grid-row: ${(props) => props.row};
  grid-column: ${(props) => props.column};
  @media only screen and (min-width: 1024px) {
    margin-top: ${(props) => props.margin};
  }
`;
export default LogoTypeContainer;
