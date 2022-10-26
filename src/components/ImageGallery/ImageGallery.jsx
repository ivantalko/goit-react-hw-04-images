import { Component } from 'react';
import { GalleryItem } from './GalleryItem';
import css from './ImageGallary.module.css';
import PropTypes from 'prop-types';

export class ImageGallery extends Component {
  render() {
    return (
      <>
        <ul className={css.ImageGallery}>
          {this.props.gallery.map(image => (
            <GalleryItem
              id={image.id}
              key={image.id}
              web={image.webformatURL}
              largeImageURL={image.largeImageURL}
              tags={image.tags}
              toggleModal={this.props.toggleModal}
            />
          ))}
        </ul>
      </>
    );
  }
}
ImageGallery.propTypes = {
  gallery: PropTypes.array.isRequired,
  toggleModal: PropTypes.func.isRequired,
};
