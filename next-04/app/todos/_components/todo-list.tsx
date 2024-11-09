import { Fragment } from "react";
import ViewButton from "./view-button";
import EditButton from "./edit-button";
import DeleteButton from "./delete-button";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const getTodoLists = async () => {
  const response = await fetch(`${process.env.SERVER_API}/todos`, {
    cache: "force-cache",
    next: {
      tags: ["todo-list"],
    },
  });
  if (!response.ok) {
    throw new Error("fetch todos failed!  ");
  }
  return response.json();
};

const TodoList = async () => {
  const todoLists = await getTodoLists();
  return (
    <>
      {todoLists.map((todo: any) => (
        <Fragment key={todo.id}>
          <h3>{todo.title}</h3>
          <ViewButton id={todo.id} />
          <EditButton id={todo.id} />
          <DeleteButton id={todo.id} />
        </Fragment>
      ))}
    </>
  );
};

export default TodoList;
