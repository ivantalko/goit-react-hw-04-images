import { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { getGallery } from 'components/Helpers/Api';
import { Loaderspiner } from './Loader/loader';
import { Button } from './Button/Button';
export class App extends Component {
  state = {
    serchImageName: '',
    isLoading: false,
    gallery: [],
    page: 1,
  };
  handleFormSubmit = serchImageName => {
    this.setState({ serchImageName, page: 1 });
  };
  async componentDidMount() {
    this.setState({ isLoading: true });
    const data = await getGallery();
    this.setState({
      gallery: data,
      isLoading: false,
    });
  }
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

  render() {
    return (
      <>
        <Searchbar onFormSubmit={this.handleFormSubmit} />
        {this.state.isLoading ? (
          <Loaderspiner />
        ) : (
          <ImageGallery gallery={this.state.gallery} />
        )}
        {this.state.serchImageName && !this.state.isLoading && (
          <Button handleClick={this.handleClick} />
        )}
      </>
    );
  }
}
