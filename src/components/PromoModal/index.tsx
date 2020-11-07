import * as React from 'react';
import Modal from 'react-modal';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
Modal.setAppElement(`#___gatsby`);

const modalStyles = {
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.58)',
    cursor: 'pointer',
  },
  content: {
    position: 'relative',
    top: '200px',
    margin: 'auto',
    maxWidth: '640px',
  },
};
const PromoModal: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  React.useEffect(() => {
    const wasOpened = window.localStorage.getItem('modal');
    if (!wasOpened) {
      setIsOpen(true);
    }
    window.localStorage.setItem('modal', 'opened');
  }, []);
  const handleClose = () => {
    setIsOpen(false);
  };
  const promoImg = useStaticQuery(graphql`
    query {
      file(name: { eq: "promo" }) {
        id
        childImageSharp {
          id
          fluid(maxWidth: 640) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <Modal isOpen={isOpen} style={modalStyles} onRequestClose={handleClose}>
      <Img fluid={promoImg.file.childImageSharp.fluid} />
    </Modal>
  );
};

export default PromoModal;
