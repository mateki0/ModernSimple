import styled from 'styled-components';

const ContactWrapper = styled.div<{ displayMobile?: boolean }>`
  display: flex;
  flex-direction: column;
  padding-bottom: 23px;
  padding-top: 30px;
  border-bottom: 2px solid #eca72c;
  @media only screen and (min-width: 1024px) {
    padding: 50px 0 0 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 0 5vw;
  }
`;

export default ContactWrapper;
