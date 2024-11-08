import ButtonDelete from "./button-delete";
import ButtonEdit from "./button-edit";
import ButtonView from "./button-view";

type Todo = {
  id: number;
  title: string;
};

export const getTodoList = async (): Promise<Todo[]> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/todos`, {
    cache: "force-cache",
    next: {
      tags: ["todo-list"],
    },
  });
  if (!response.ok) {
    throw new Error("Failed to faild");
  }
  return await response.json();
};

const TodoList = async () => {
  const todoList = await getTodoList();

  return (
    <div>
      {todoList.map((todo: Todo) => (
        <div key={todo.id}>
          <h3>{todo.title}</h3>
          <div className="flex gap-3">
            <ButtonView id={todo.id} />
            <ButtonDelete id={todo.id} />
            <ButtonEdit id={todo.id} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
