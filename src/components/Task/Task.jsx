import { useDispatch } from "react-redux";
import PropTypes from 'prop-types';
import { MdClose } from "react-icons/md";
import { deleteTask, toggleCompleted } from "../../redux/actions";
import css from "./Task.module.css";

export const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteTask(task.id));

  const handleToggle = () => dispatch(toggleCompleted(task.id));

  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        className={css.checkbox}
        checked={task.completed}
        onChange={handleToggle}
      />
      <p className={css.text}>{task.text}</p>
      <button className={css.btn} onClick={handleDelete}>
        <MdClose size={24} />
      </button>
    </div>
  );
};

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,       // id — число, обязательно
    text: PropTypes.string.isRequired,     // text — строка, обязательно
    completed: PropTypes.bool.isRequired,  // completed — булево, обязательно
  }).isRequired,
};