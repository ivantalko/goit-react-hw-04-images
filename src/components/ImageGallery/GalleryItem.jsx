import { Component } from 'react';

export class GalleryItem extends Component {
  render() {
    const { id, web, tags } = this.props;
    return (
      <li key={id}>
        <img src={web} alt={tags} />
      </li>
    );
  }
}
