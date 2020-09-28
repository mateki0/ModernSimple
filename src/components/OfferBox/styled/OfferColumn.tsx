import styled from 'styled-components';

const OfferColumn = styled.div<{ position: string }>`
  display: grid;
  align-items: center;
  justify-items: ${(props) => props.position};
`;

export default OfferColumn;
