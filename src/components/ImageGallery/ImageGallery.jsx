import { getGallery } from 'components/Helpers/Api';
import { Component } from 'react';
import { GalleryItem } from './GalleryItem';

export class ImageGallery extends Component {
  state = {
    gallery: [],
  };
  async componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.serchImageName !== this.props.serchImageName &&
      this.serchImageName !== ''
    ) {
      const data = await getGallery(this.props.serchImageName);

      this.setState({ gallery: data });
    }
  }
  render() {
    return (
      <ul className="gallery">
        {this.state.gallery.map(image => (
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
