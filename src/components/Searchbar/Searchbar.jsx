import { Component } from 'react';

export class Searchbar extends Component {
  state = {
    value: '',
  };
  hendleChange = event => {
    const { value } = event.target;
    this.setState({ value });
  };
  render() {
    return (
      <>
        <header class="searchbar">
          <form class="form">
            <button type="submit" class="button">
              <span class="button-label">Search</span>
            </button>

            <input
              value={this.state.value}
              class="input"
              type="text"
              autocomplete="off"
              autofocus
              placeholder="Search images and photos"
            />
          </form>
        </header>
      </>
    );
  }
}
