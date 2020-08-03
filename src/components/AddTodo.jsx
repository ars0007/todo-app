import React, { useState } from "react";

const AddTodo = (props) => {
  const [text, setText] = useState("");

  const onTextChange = (e) => {
      e.preventDefault()
      setText(e.target.value)
  };
  return (
    <div style={{ display: "flex" }}>
      <input
        onChange={onTextChange}
        type="text"
        name="task"
        placeholder="Add Todo"
        style={{ flex: "10", padding: "5px" }}
      ></input>
      <button
        onClick={()=> props.addTodo(text)}
        value="Add"
        className="addbtn"
        style={{ flex: "1" }}
      >
        Add
      </button>
    </div>
  );
};

export default AddTodo;
