import { notFound } from "next/navigation";

type Todo = {
  id: number;
  title: string;
  content: string;
};

const getTodo = async (id: number): Promise<Todo | null> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/todos/${id}`
  );
  if (!response.ok) throw new Error("Failed to fetch todo");
  return response.json();
};

const TodoDetailPage = async ({ params }: { params: { id: number } }) => {
  try {
    const id = params.id;
    const todo = await getTodo(id);

    if (!todo) {
      return <p className="p-6">Todo not found.</p>;
    }

    return (
      <div className="p-6">
        <h1>{todo.title}</h1>
        <p>{todo.content}</p>
      </div>
    );
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return notFound();
  }
};

export default TodoDetailPage;
