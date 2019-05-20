import React, { Component } from 'react';
import './App.css';

import TodoList from './components/TodoList';

// Instruments
import uuid from 'uuid/v1';

class App extends Component {
  state = {
    todos: [
      { id: uuid(), text: 'Todo 1', isFavorite: false, isCompleted: false },
      { id: uuid(), text: 'Todo 2', isFavorite: false, isCompleted: false },
      { id: uuid(), text: 'Todo 3', isFavorite: false, isCompleted: false },
      { id: uuid(), text: 'Todo 4', isFavorite: false, isCompleted: false },
    ],
    currentTextInput: '',
  };

  createTodoItem = text => {
    return { id: uuid(), text, isFavorite: false, isComplited: false };
  };

  onChangeInput = event => {
    this.setState({ currentTextInput: event.target.value });
  };

  addTodoItem = event => {
    event.preventDefault();
    if (this.state.currentTextInput) {
      const newTodo = this.createTodoItem(this.state.currentTextInput);
      this.setState({ todos: [newTodo, ...this.state.todos], currentTextInput: '' });
    }
  };

  updateTodoItemStatus = (id, status) => {
    const updatedTodos = this.state.todos.map(todo => {
      return todo.id === id ? { ...todo, [status]: !todo[status] } : todo;
    });
    this.setState({ todos: updatedTodos });
  };

  deleteTodoItem = id => {
    const updatedTodos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({ todos: updatedTodos });
  };

  render() {
    return (
      <section className="scheduler">
        <main>
          <header>
            <h1>Todo List</h1>
            <span>Todos: {this.state.todos.length}</span>
          </header>
          <section className="scheduler-list">
            <form onSubmit={this.addTodoItem}>
              <input
                type="text"
                placeholder="New Todo Description"
                onChange={this.onChangeInput}
                value={this.state.currentTextInput}
              />
              <button type="submit">Add New Todo</button>
            </form>
            <div>
              <TodoList
                todoItems={this.state.todos}
                updateTodoItemStatus={this.updateTodoItemStatus}
                deleteTodoItem={this.deleteTodoItem}
              />
            </div>
          </section>
          <footer>Show All / Completed / Uncompleted / Favorite items</footer>
        </main>
      </section>
    );
  }
}

export default App;
