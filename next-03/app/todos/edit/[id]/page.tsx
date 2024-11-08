/* eslint-disable @typescript-eslint/no-unused-vars */

import { getTodo } from "../../[id]/page";
import FormUpdate from "./form";

const EditPage = async ({ params }: { params: { id: number } }) => {
  const { id } = await params;
  const todo = await getTodo(id);
  return (
    <div>
      <h2>Edit Todo</h2>
      <FormUpdate todo={todo || undefined} />
    </div>
  );
};

export default EditPage;
