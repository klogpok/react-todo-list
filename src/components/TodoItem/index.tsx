import React from 'react';
import './style.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface TodoItemProps {
    id: string;
    text: string;
    isFavorite: boolean;
    updateItemFavoriteStatus: (id: string) => void
}

const TodoItem = (props:TodoItemProps) =>  {
    return (
        <li className="todo">
            <div className="content">
                <input
                    autoFocus
                    disabled
                    minLength = { 50 }
                    name = 'taskInput'
                    type = 'text'
                    value = { props.text }
                />
            </div>
            <div className="actions">
                <FontAwesomeIcon icon="star" color="blue" onClick={props.updateItemFavoriteStatus(props.id)}/>
            </div>
        </li>
    );
};

export default TodoItem;
