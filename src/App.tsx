import React, { Component } from 'react';
import './App.css';

import TodoList from './components/TodoList';

// Instruments
import uuid from 'uuid/v1';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
library.add(faStar);

class App extends Component {
  state = {
    todos: [
      {id: uuid(), text: 'Todo 1', isFavorite: false},
      {id: uuid(), text: 'Todo 2', isFavorite: false},
      {id: uuid(), text: 'Todo 3', isFavorite: false},
      {id: uuid(), text: 'Todo 4', isFavorite: false},
    ],
    currentTextInput: ''
  };

  createTodoItem = (text: string) => {
    return {id: uuid(), text};
  };

  onChangeInput = (event: any) => {
   this.setState({currentTextInput: event.target.value});
  };

  addTodoItem = (event: any) => {
    event.preventDefault();
    if(this.state.currentTextInput) {
      const newTodo = this.createTodoItem(this.state.currentTextInput);
      this.setState({todos: [newTodo, ...this.state.todos], currentTextInput: ''});
    }
  };

  updateItemFavoriteStatus = (id: string) => {
    const updatedTodos = this.state.todos.map(todo => {
      if(todo.id === id) {
        return {...todo, isFavorite: !todo.isFavorite};
      } else {
        return todo;
      }
    });
    this.setState({todos: updatedTodos});
    console.log(id);
  };


  render() {
    return (
        <section className="scheduler">
          <main>
            <header>
              <h1>Todo List</h1>
              <span>Todos: {this.state.todos.length}</span>
              <input type="text" placeholder="Search Todo"/>
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
                <TodoList todoItems={this.state.todos} updateItemFavoriteStatus = {this.updateItemFavoriteStatus}/>
              </div>
            </section>
            <footer>Footer
            </footer>
          </main>
        </section>
    );
  }
}

export default App;
