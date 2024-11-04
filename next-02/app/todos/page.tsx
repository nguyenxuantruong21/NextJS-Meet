import TodoAdd from "./todo-add";
import TodoList from "./todo-list";

const TodosPage = async ({ searchParams }: { searchParams: { q: string } }) => {
  return (
    <div className="p-6">
      <h1 className="text-2xl">Todos</h1>
      <TodoList searchParams={searchParams} />
      <TodoAdd />
    </div>
  );
};

export default TodosPage;
