import { Component } from 'react';
import { Backdrop, Modal } from './ModalStyle';
import PropTypes from 'prop-types';
export class ModalGallary extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onEscapeKey);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.onEscapeKey);
  }
  onEscapeKey = e => {
    if (e.code === 'Escape') this.props.toggleModal();
  };
  onClickBack = e => {
    if (e.currentTarget === e.target) {
      this.props.toggleModal();
    }
  };
  render() {
    return (
      <Backdrop onClick={this.onClickBack}>
        <Modal>
          <img src={this.props.largeImageURL} alt={this.props.tags} />
        </Modal>
      </Backdrop>
    );
  }
}
ModalGallary.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string,
};
