import React, { Component} from 'react';
import TodoItem from '../TodoItem';

import './style.css';

type TodoListProps = {
    todoItems: {id: string, text: string, isFavorite: boolean}[];
    updateItemFavoriteStatus: (id: string) => void;
}

export default class TodoList extends Component<TodoListProps> {
    render() {
        const todoItems = this.props.todoItems.map(item => <TodoItem key={item.id} {...item} updateItemFavoriteStatus = {this.props.updateItemFavoriteStatus}/>);
        return (
            <ul>{todoItems}</ul>
        )
    }
}
