// == Import
import PropTypes from 'prop-types';
import './styles.scss';

import Task from './task';

// == Composant
function ListTodo({ tasks }) {
  return (
    <ul className="list">
      {
        tasks.map((item) => (
          <Task
            key={item.id}
            id={item.id}
            label={item.label}
            done={item.done}
          />
        ))
      }
    </ul>
  );
}

ListTodo.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired,
    }),
  ).isRequired,
};

// == Export
export default ListTodo;
