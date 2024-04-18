import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { IoMdClose } from 'react-icons/io';
import { useTranslations } from 'next-intl';

// Custom styles for the modal
const customStyles = {
  content: {
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    margin: '0',
    padding: '20px',
    border: 'none',
    background: 'var(--color-secondary-dark)',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    outline: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10000,
    transition: 'transform 0.5s ease-out', // Smooth transition for 0.5 seconds
    transform: 'translateY(-100vh)', // Start above the viewport
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    zIndex: 10000,
    transition: 'opacity 0.5s ease-out', // Fade in transition for overlay
    opacity: 0, // Start with transparent overlay
  },
};

function ModalComponent({ isOpen, onRequestClose } : any) {
  const [afterOpen, setAfterOpen] = useState(false);
const t = useTranslations('Index');


  useEffect(() => {
    Modal.setAppElement('body');
  }, []);

  useEffect(() => {
    if (isOpen) {
      // Delay the slide-in effect to sync with the modal opening
      const timer = setTimeout(() => {
        setAfterOpen(true);
      }, 10); // Start shortly after modal opens

      return () => clearTimeout(timer);
    } else {
      setAfterOpen(false); // Reset when modal closes
    }
  }, [isOpen]);

  const finalStyles = {
    ...customStyles,
    content: {
      ...customStyles.content,
      transform: afterOpen ? 'translateY(0)' : 'translateY(-100vh)',
    },
    overlay: {
      ...customStyles.overlay,
      opacity: afterOpen ? 1 : 0,
    },
  };
  const htmlContent = t.raw('answerText');

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={finalStyles as any}
      contentLabel="Example Modal"
    >
      <button
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          background: 'none',
          border: 'none',
          fontSize: '25px',
          cursor: 'pointer',
        }}
        onClick={onRequestClose}
      >
        <IoMdClose color="black" />
      </button>
     
     <div className="text-black text-3xl mx-auto  modal-text  max-h-screen my-8 py-20 " dangerouslySetInnerHTML={{ __html: htmlContent }}>
    </div>

  
    </Modal>
  );
}

export default ModalComponent;
