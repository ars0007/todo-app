import React from "react";


const getStyle = (props) => {
  return {
    background: "#f4f4f4",
    borderBottom: "1px #ccc dotted",
    textDecoration: props.todoitem.completed ? "line-through" : "none",
  };
};

const TodoItem = (props) => {
  return (
    <div style={getStyle(props)}>
      <p>
        <input
          checked={props.todoitem.completed}
          type="checkbox"
          onChange={() => props.markComplete(props.todoitem.id)}
        ></input>{" "}
        {props.todoitem.task}
        <button className="buttn" onClick={() => props.delTodo(props.todoitem.id)} >x</button>
      </p>
    </div>
  );
};

export default TodoItem;
