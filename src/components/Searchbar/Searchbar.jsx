import { Component } from 'react';
import css from './Searchbar.module.css';
import PropTypes from 'prop-types';

export class Searchbar extends Component {
  state = {
    value: '',
  };

  hendleChange = event => {
    const { value } = event.target;
    this.setState({ value });
  };
  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.value.trim() === '') {
      return alert('Введите что-то');
    }
    this.props.onFormSubmit(this.state.value);
    this.setState({ value: '' });
  };
  render() {
    return (
      <>
        <header className={css.Searchbar}>
          <form className={css.SearchForm} onSubmit={this.handleFormSubmit}>
            <button type="submit" className={css.SearchForm_button}>
              <span className={css.SearchForm_button_label}>Search</span>
            </button>

            <input
              onChange={this.hendleChange}
              value={this.state.value}
              className={css.SearchForm_input}
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
          </form>
        </header>
      </>
    );
  }
}
Searchbar.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};
