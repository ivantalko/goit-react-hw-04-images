import { GalleryItem } from './GalleryItem';
import css from './ImageGallary.module.css';
import PropTypes from 'prop-types';

export const ImageGallery = ({ toggleModal, gallery }) => {
  return (
    <>
      <ul className={css.ImageGallery}>
        {gallery.map(image => (
          <GalleryItem
            id={image.id}
            key={image.id}
            web={image.webformatURL}
            largeImageURL={image.largeImageURL}
            tags={image.tags}
            toggleModal={toggleModal}
          />
        ))}
      </ul>
    </>
  );
};
ImageGallery.propTypes = {
  gallery: PropTypes.array.isRequired,
  toggleModal: PropTypes.func.isRequired,
};
