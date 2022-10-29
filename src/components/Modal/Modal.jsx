import { Backdrop, Modal } from './ModalStyle';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
const modalWindow = document.querySelector('#modal-root');
export const ModalGallary = ({ toggleModal, largeImageURL, tags }) => {
  useEffect(() => {
    add();
    return remove();
  });

  function add() {
    window.addEventListener('keydown', onEscape);
  }
  function remove() {
    window.addEventListener('keydown', onEscape);
  }
  const onEscape = event => {
    if (event.code === 'Escape') {
      toggleModal();
    }
  };

  const onClickBack = e => {
    if (e.currentTarget === e.target) {
      toggleModal();
    }
  };
  return createPortal(
    <Backdrop onClick={onClickBack}>
      <Modal>
        <img src={largeImageURL} alt={tags} />
      </Modal>
    </Backdrop>,
    modalWindow
  );
};

ModalGallary.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string,
};
