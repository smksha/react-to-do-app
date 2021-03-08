import React, { useState, useEffect, useRef} from "react";

function TodoForm(props) {
  const [inputTask, setInputTask] = useState(
    props.edit ? props.edit.value : ""
  );

  const inputChangeHandler = e => {
    setInputTask(e.target.value);
  };
  const submitHandler = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 1000),
      text: inputTask,
      isComplete: false
    });
    setInputTask("");
  };
  return (
    <form className="too-form" onSubmit={submitHandler}>
      {props.edit ? (
        <>
          <input
            type="text"
            placeholder="Update task"
            value={inputTask}
            name="text"
            className="todo-input"
            onChange={inputChangeHandler}
          />

          <button type="submit" className="todo-button">
            Update
          </button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Add a task"
            value={inputTask}
            name="text"
            className="todo-input"
            onChange={inputChangeHandler}
          />

          <button type="submit" className="todo-button">
            Add
          </button>
        </>
      )}
    </form>
  );
}

export default TodoForm;
