import { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
export class App extends Component {
  state = {
    serchImageName: '',
    isLoading: false,
  };
  handleFormSubmit = serchImageName => {
    this.setState({ serchImageName });
  };
  // async componentDidMount() {
  //   const data = await getGallery();
  //   this.setState({ gallary: data });
  //   console.log(data);
  // }

  render() {
    return (
      <>
        <Searchbar onFormSubmit={this.handleFormSubmit} />
        {this.state.isLoading ? (
          'LOADING'
        ) : (
          <ImageGallery serchImageName={this.state.serchImageName} />
        )}
      </>
    );
  }
}
