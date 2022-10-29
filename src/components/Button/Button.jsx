import css from './Batton.module.css';
import PropTypes from 'prop-types';

export const Button = ({ handleClick }) => {
  return (
    <>
      <button className={css.Button} type="button" onClick={handleClick}>
        Load More
      </button>
    </>
  );
};

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
