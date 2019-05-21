import React, { Component } from 'react';
import TodoItem from '../TodoItem';

import './style.css';

export default class TodoList extends Component {
  render() {
    const todoItems = this.props.todoItems.map(item => (
      <TodoItem
        key={item.id}
        {...item}
        updateTodoItemStatus={this.props.updateTodoItemStatus}
        deleteTodoItem={this.props.deleteTodoItem}
      />
    ));
    return <ul> {todoItems}</ul>;
  }
}
