import React, { Component } from 'react';
import './App.css';

import TodoList from './components/TodoList';

// Instruments
import uuid from 'uuid/v1';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare, faCheckSquare } from '@fortawesome/free-regular-svg-icons';

class App extends Component {
  state = {
    todos: [
      { id: uuid(), text: 'Todo 1', isFavorite: false, isCompleted: false },
      { id: uuid(), text: 'Todo 2', isFavorite: false, isCompleted: false },
      { id: uuid(), text: 'Todo 3', isFavorite: true, isCompleted: false },
      { id: uuid(), text: 'Todo 4', isFavorite: false, isCompleted: false },
    ],
    todosToDisplay: [],
    currentTextInput: '',
    filters: {
      showAllFilter: true,
      completedFilter: false,
      unCompletedFilter: false,
      favoriteFilter: false,
    },
    currentFilter: 'showAllFilter',
  };

  componentDidMount() {
    this.setState({ todosToDisplay: this.todosToDisplay() });
  }

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

  todosToDisplay = (filter = 'showAllFilter') => {
    switch (filter) {
      case 'completedFilter':
        return this.state.todos.filter(todo => todo.isCompleted);
      case 'unCompletedFilter':
        return this.state.todos.filter(todo => !todo.isCompleted);
      case 'favoriteFilter':
        return this.state.todos.filter(todo => todo.isFavorite);
      default:
        return this.state.todos;
    }
  };

  changeFilterHandler = filter => {
    if (filter === this.state.currentFilter) return;
    else {
      const newFilters = { ...this.state.filters };

      for (let item in newFilters) {
        item === filter ? (newFilters[item] = true) : (newFilters[item] = false);
      }

      this.setState({
        filters: { ...newFilters },
        currentFilter: filter,
      });
    }
  };

  render() {
    const todos = this.todosToDisplay(this.state.currentFilter);

    return (
      <section className="scheduler">
        <main>
          <header>
            <h1>Todo List</h1>
            <span>Todos: {todos.length}</span>
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
                todoItems={todos}
                updateTodoItemStatus={this.updateTodoItemStatus}
                deleteTodoItem={this.deleteTodoItem}
              />
            </div>
          </section>
          <footer>
            <div className="todos-filter">
              <span>Show All</span>
              <FontAwesomeIcon
                icon={!this.state.filters.showAllFilter ? faSquare : faCheckSquare}
                color="#136BD6"
                size="lg"
                cursor="pointer"
                onClick={() => this.changeFilterHandler('showAllFilter')}
              />
            </div>
            <div className="todos-filter">
              <span>Completed</span>
              <FontAwesomeIcon
                icon={!this.state.filters.completedFilter ? faSquare : faCheckSquare}
                color="#136BD6"
                size="lg"
                cursor="pointer"
                onClick={() => this.changeFilterHandler('completedFilter')}
              />
            </div>
            <div className="todos-filter">
              <span>Uncompleted</span>
              <FontAwesomeIcon
                icon={!this.state.filters.unCompletedFilter ? faSquare : faCheckSquare}
                color="#136BD6"
                size="lg"
                cursor="pointer"
                onClick={() => this.changeFilterHandler('unCompletedFilter')}
              />
            </div>
            <div className="todos-filter">
              <span>Favorite items</span>
              <FontAwesomeIcon
                icon={!this.state.filters.favoriteFilter ? faSquare : faCheckSquare}
                color="#136BD6"
                size="lg"
                cursor="pointer"
                onClick={() => this.changeFilterHandler('favoriteFilter')}
              />
            </div>
          </footer>
        </main>
      </section>
    );
  }
}

export default App;
