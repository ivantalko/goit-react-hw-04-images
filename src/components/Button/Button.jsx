import { Component } from 'react';
import css from './Batton.module.css';

export class Button extends Component {
  render() {
    return (
      <>
        <button
          className={css.Button}
          type="button"
          onClick={this.props.handleClick}
        >
          Load More
        </button>
      </>
    );
  }
}
