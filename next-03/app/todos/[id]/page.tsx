import { notFound } from "next/navigation";

export type TodoType = {
  id: number;
  title: string;
};

export const getTodo = async (id: number): Promise<TodoType | null> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/todos/${id}`,
    {
      cache: "force-cache",
      next: {
        tags: [`todo-detail-${id}`],
      },
    }
  );
  if (!response.ok) throw new Error("Failed to fetch todo");
  return response.json();
};

const TodoDetailPage = async ({ params }: { params: { id: number } }) => {
  try {
    const { id } = await params;
    const todo = await getTodo(id);

    if (!todo) {
      return <p className="p-6">Todo not found.</p>;
    }

    return (
      <div className="p-6">
        <h1>{todo.title}</h1>
      </div>
    );
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return notFound();
  }
};

export default TodoDetailPage;
