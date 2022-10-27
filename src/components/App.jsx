import { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { getGallery } from 'components/Helpers/Api';
import { Loaderspiner } from './Loader/loader';
import { Button } from './Button/Button';
import { ModalGallary } from './Modal/Modal';
export class App extends Component {
  state = {
    serchImageName: '',
    isLoading: false,
    gallery: [],
    page: 1,
    bigImage: '',
    isOpen: false,
  };
  handleFormSubmit = serchImageName => {
    this.setState({ serchImageName, page: 1 });
  };

  async componentDidUpdate(_, prevState) {
    if (
      prevState.serchImageName !== this.state.serchImageName &&
      this.serchImageName !== ''
    ) {
      this.setState({ isLoading: true });
      const data = await getGallery(this.state.serchImageName, this.state.page);
      this.setState({ gallery: data, isLoading: false });
    }
    if (this.state.page !== prevState.page) {
      const data = await getGallery(this.state.serchImageName, this.state.page);
      this.setState(prevState => ({
        gallery: [...prevState.gallery, ...data],
        isLoading: false,
      }));
    }
  }
  handleClick = () => {
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
  };
  toggleModal = largeImageURL => {
    if (!largeImageURL) {
      this.setState({
        bigImage: '',
      });
    } else {
      this.setState({ bigImage: largeImageURL });
    }
  };
  getActiveImage = () => {
    return this.state.gallery.find(item => item.id === this.state.bigImage);
  };

  render() {
    return (
      <>
        <Searchbar onFormSubmit={this.handleFormSubmit} />
        {this.state.isLoading ? (
          <Loaderspiner />
        ) : (
          <ImageGallery
            gallery={this.state.gallery}
            bigImage={this.state.bigImage}
            toggleModal={this.toggleModal}
          />
        )}
        {this.state.serchImageName && !this.state.isLoading && (
          <Button handleClick={this.handleClick} bigImage={this.bigImage} />
        )}
        {this.state.bigImage && (
          <ModalGallary
            toggleModal={this.toggleModal}
            largeImageURL={this.state.bigImage}
          />
        )}
      </>
    );
  }
}
