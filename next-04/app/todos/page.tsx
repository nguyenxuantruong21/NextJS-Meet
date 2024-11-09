import React from "react";
import TodoList from "./_components/todo-list";
import TodoAdd from "./_components/todo-add";

const TodoPage = () => {
  return (
    <div>
      <TodoList />
      <TodoAdd />
    </div>
  );
};

export default TodoPage;
