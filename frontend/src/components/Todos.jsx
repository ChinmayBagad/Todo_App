import { useRecoilState } from "recoil";
import { todoState } from "../state/atoms/TodoState";
import { useState } from "react";
import { Todo } from "./Todo";

function Todos() {
  const [todos, setTodos] = useRecoilState(todoState);
  const [inputText, setInputText] = useState("");

  function addTodo() {
    setTodos((pre) => [
      ...pre,
      {
        id: Math.random(),
        text: inputText,
      },
    ]);
    setInputText("");
  }

  function handleInputChange(e) {
    setInputText(e.target.value);
  }

  function clearTodos() {
    setTodos([]);
  }

  return (
    <main>
      <input
        type="text"
        id="todoInput"
        value={inputText}
        onChange={handleInputChange}
      />
      <button onClick={addTodo}>Add Todo</button>
      <button onClick={clearTodos}>Clear Todos</button>
      {todos.map((todo) => {
        return <Todo key={todo.id} text={todo.text} id={todo.id} />;
      })}
    </main>
  );
}

export { Todos };
