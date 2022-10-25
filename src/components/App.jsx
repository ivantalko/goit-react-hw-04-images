import { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { getGallery } from '../components/Helpers/Api';
export class App extends Component {
  state = {
    gallary: [],
  };
  async componentDidMount() {
    const data = await getGallery();
    this.setState({ gallary: data });
    console.log(data);
  }

  render() {
    return (
      <>
        <ImageGallery />
      </>
    );
  }
}
