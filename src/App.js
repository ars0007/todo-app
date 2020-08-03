import React from "react";
import "./App.css";
import Todo from "./components/Todo";
import AddTodo from "./components/AddTodo";

import { v1 as uuidv1 } from "uuid";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      myTodos: [
        { id: 1, task: "create react todo app", completed: false },
        { id: 2, task: "to do waxing", completed: true },
      ],
      text: "",
    };
  }

  addTodo = (task) => {
    const todo = {
      id: uuidv1(),
      task,
      completed: false,
    };
    const newTodo = this.state.myTodos;
    newTodo.push(todo);
    this.setState({ myTodos: newTodo });
  };

  markComplete = (todoId) => {
    const todos = this.state.myTodos;
    const index = todos.findIndex((todo) => todo.id === todoId);

    todos[index].completed = !todos[index].completed;
    this.setState({ myTodos: todos });
  };

  delTodo = (todoId) => {
    console.log(todoId);
    const todos = this.state.myTodos;
    const index = todos.findIndex((todo) => todo.id === todoId);
    todos.splice(index, 1);
    this.setState({ myTodos: todos });
  };
  render() {
    return (
      <div>
        <div className="App-header">Todo List</div>
        <AddTodo addTodo={this.addTodo} />
        <Todo
          key={this.state.myTodos.id}
          todos={this.state.myTodos}
          markComplete={this.markComplete}
          delTodo={this.delTodo}
        />
      </div>
    );
  }
}

export default App;
