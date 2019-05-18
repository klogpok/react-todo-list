import React, { Component} from 'react';
import TodoItem from '../TodoItem';

import './style.css';

type TodoListProps = {
    todoItems: {id: string, text: string}[];
}

export default class TodoList extends Component<TodoListProps> {
    render() {
        const todoItems = this.props.todoItems.map(item => <TodoItem key={item.id} {...item} />);
        return (
            <ul>{todoItems}</ul>
        )
    }
}
