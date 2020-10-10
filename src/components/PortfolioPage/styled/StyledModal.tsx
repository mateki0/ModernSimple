import ReactModal from 'react-modal';
import styled from 'styled-components';

const StyledModal = styled(ReactModal)`
  z-index: 999;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  top: 200px;
  width: 80vw;
  padding: 20px 20px 20px 20px;
  height: auto;
  overflow-y: auto;
  border: 2px solid #eca72c;
  border-radius: 25px;
`;
export default StyledModal;
