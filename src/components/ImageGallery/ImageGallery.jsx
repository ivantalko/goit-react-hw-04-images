import { Component } from 'react';
import { GalleryItem } from './GalleryItem';

export class ImageGallery extends Component {
  render() {
    return (
      <ul className="gallery">
        {this.props.gallery.map(image => (
          <GalleryItem
            id={image.id}
            key={image.id}
            web={image.webformatURL}
            large={image.largeImageURL}
            tags={image.tags}
          />
        ))}
      </ul>
    );
  }
}
