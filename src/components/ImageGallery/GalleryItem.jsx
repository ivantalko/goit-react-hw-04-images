import { Component } from 'react';
import css from './ImageGallary.module.css';
import PropTypes from 'prop-types';

export class GalleryItem extends Component {
  render() {
    const { id, web, tags, toggleModal, largeImageURL } = this.props;
    return (
      <li key={id} className={css.ImageGalleryItem}>
        <img
          className={css.ImageGalleryItem_image}
          src={web}
          alt={tags}
          onClick={() => toggleModal(largeImageURL)}
        />
      </li>
    );
  }
}
GalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  web: PropTypes.string.isRequired,
  tags: PropTypes.string,
  largeImageURL: PropTypes.string.isRequired,
  toggleModal: PropTypes.func.isRequired,
};
