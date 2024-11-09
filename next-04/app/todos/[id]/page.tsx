export const getTodoDetail = async (id: number) => {
  const response = await fetch(`${process.env.SERVER_API}/todos/${id}`, {
    cache: "force-cache",
    next: {
      tags: [`todo-${id}`],
    },
  });
  if (!response.ok) {
    throw new Error("fetch todos failed!");
  }
  return response.json();
};

const TodoDetailPage = async ({ params }: { params: { id: number } }) => {
  const { id } = await params;
  const response = await getTodoDetail(id);
  return <div>{response.title}</div>;
};

export default TodoDetailPage;
