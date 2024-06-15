import { selector } from "recoil";
import { todoState } from "../TodoState";

const totalTodoSelector = selector({
  key: "totalTodoSelector",
  get: ({ get }) => {
    const todo = get(todoState);

    return todo.length;
  },
});

export { totalTodoSelector };
