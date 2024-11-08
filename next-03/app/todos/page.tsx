/* eslint-disable @typescript-eslint/no-unused-vars */
// import TodoAdd from "./todo-add";
import TodoAddTwo from "./todo-add-two";
import TodoList from "./todo-list";

const TodosPage = async () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl">Todos</h1>
      <TodoList />
      {/* <TodoAdd /> */}
      <TodoAddTwo />
    </div>
  );
};

export default TodosPage;
