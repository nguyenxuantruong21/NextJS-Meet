import EditForm from "../_components/edit-form";

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

const EditTodoPage = async ({ params }: { params: { id: number } }) => {
  const { id } = await params;
  const todo = await getTodoDetail(id);
  return (
    <div>
      <EditForm todo={todo} />
    </div>
  );
};

export default EditTodoPage;
