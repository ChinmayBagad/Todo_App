import { Todos } from "./components/Todos";
import { useRecoilValue } from "recoil";
import { totalTodoSelector } from "./state/atoms/selectors/TotalTodos";

function App() {
  const totalTodo = useRecoilValue(totalTodoSelector);
  return (
    <div>
      Hey
      <Todos />
      <h3>Total Todos : {totalTodo} </h3>
    </div>
  );
}

export default App;
