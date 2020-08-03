import React from "react";
import TodoItem from "./TodoItem";



const Todo = (props) => {
  return props.todos.map((todo) => (
    <div key={todo.id}>
      <TodoItem
        todoitem={todo}
        markComplete={props.markComplete}
        delTodo={props.delTodo}
      />
    </div>
  ));
};

export default Todo;
