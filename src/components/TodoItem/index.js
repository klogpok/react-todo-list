import React from 'react';
import './style.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar as starRegular,
  faSquare,
  faCheckSquare,
} from '@fortawesome/free-regular-svg-icons';
import { faStar as starSolid, faTrash } from '@fortawesome/free-solid-svg-icons';

const TodoItem = props => {
  return (
    <li className="todo">
      <div className="content">
        <input autoFocus disabled minLength={50} name="taskInput" type="text" value={props.text} />
      </div>
      <div className="actions">
        <div>
          <FontAwesomeIcon
            icon={!props.isCompleted ? faSquare : faCheckSquare}
            color="#136BD6"
            cursor="pointer"
            onClick={() => props.updateTodoItemStatus(props.id, 'isCompleted')}
          />
        </div>
        <div>
          <FontAwesomeIcon
            icon={!props.isFavorite ? starRegular : starSolid}
            color="#136BD6"
            cursor="pointer"
            onClick={() => props.updateTodoItemStatus(props.id, 'isFavorite')}
          />
        </div>
        <div>
          <FontAwesomeIcon
            icon={faTrash}
            color="#136BD6"
            cursor="pointer"
            onClick={() => props.deleteTodoItem(props.id)}
          />
        </div>
      </div>
    </li>
  );
};

export default TodoItem;
