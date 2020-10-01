import styled from 'styled-components';

const SectionContent = styled.span<{ display?: boolean }>`
  color: #2c9692;
  font-size: 12px;

  @media only screen and (min-width: 1024px) {
    font-size: 26px;
  }
`;

export default SectionContent;
