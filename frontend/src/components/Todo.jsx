import { useSetRecoilState } from "recoil";
import { todoState } from "../state/atoms/TodoState";

function Todo({ text, id }) {
  const setTodos = useSetRecoilState(todoState);

  function deleteTodo() {
    setTodos((pre) => {
      return pre.filter((todo) => todo.id !== id);
    });
  }
  return (
    <>
      <p>{text}</p>
      <button onClick={deleteTodo}>X</button>
    </>
  );
}

export { Todo };
