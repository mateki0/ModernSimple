import styled from 'styled-components';

const ContactWrapper = styled.div<{ displayMobile?: boolean }>`
  display: flex;
  flex-direction: column;
  padding: 23px 0;
  border-bottom: 2px solid #eca72c;
  @media only screen and (min-width: 1024px) {
    padding: 40px 0 0 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 0 485px;
  }
`;

export default ContactWrapper;
