import { useState } from 'react';
import css from './Searchbar.module.css';
import PropTypes from 'prop-types';

export const Searchbar = ({ onFormSubmit }) => {
  const [value, setValue] = useState('');

  const hendleChange = event => {
    const { value } = event.target;
    setValue(value);
  };
  const handleFormSubmit = event => {
    event.preventDefault();
    if (value.trim() === '') {
      return alert('Введите что-то');
    }
    onFormSubmit(value);
    setValue('');
  };
  return (
    <>
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={handleFormSubmit}>
          <button type="submit" className={css.SearchForm_button}>
            <span className={css.SearchForm_button_label}>Search</span>
          </button>

          <input
            onChange={hendleChange}
            value={value}
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
};

Searchbar.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};
