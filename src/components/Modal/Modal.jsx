import { Component } from 'react';
import { Backdrop, Modal } from './ModalStyle';
import PropTypes from 'prop-types';
export class ModalGallary extends Component {
  render() {
    return (
      <Backdrop onClick={() => this.props.toggleModal()}>
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
