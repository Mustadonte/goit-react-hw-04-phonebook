import PropTypes from 'prop-types';
import css from './ContactListItem.module.css';

export const ContactListItem = ({ id, name, number, onDeleteBtn }) => {
  return (
    <li key={id} className={css.listItem}>
      {name}: {number}{' '}
      <button
        className={css.button}
        type="button"
        onClick={() => onDeleteBtn(id)}
      >
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteBtn: PropTypes.func.isRequired,
};
