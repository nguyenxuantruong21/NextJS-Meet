import { notFound } from "next/navigation";

const AdminPage = () => {
  const a = 10;
  if (a <= 10) {
    return notFound();
  }
  return <div>x</div>;
};

export default AdminPage;
