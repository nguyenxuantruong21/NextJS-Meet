import ButtonDelete from "./button-delete";
import ButtonView from "./button-view";

type Todo = {
  id: number;
  title: string;
};

export const getTodoList = async (q: string): Promise<Todo[]> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/todos?_sort=id&_order=desc&q=${q}`,
    {
      cache: "force-cache",
    }
  );
  return response.json();
};

const TodoList = async ({ searchParams }: { searchParams: { q: string } }) => {
  const q = searchParams.q;

  const todoList = await getTodoList(q);
  console.log(todoList);

  return (
    <div>
      {todoList.map((todo: Todo) => (
        <div key={todo.id}>
          <h3>{todo.title}</h3>
          <div className="flex gap-3">
            <ButtonView id={todo.id} />
            <ButtonDelete id={todo.id} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
