import React from 'react';
import './style.css';

export interface TodoItemProps {
    id: string;
    text: string;
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
        </li>
    );
};

export default TodoItem;
