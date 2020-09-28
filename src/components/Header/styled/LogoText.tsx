import styled from 'styled-components';

const LogoText = styled.span<{ color: string }>`
  color: ${(props) => props.color};
`;

export default LogoText;
