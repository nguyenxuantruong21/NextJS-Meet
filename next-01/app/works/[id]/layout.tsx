import Footer from "@/components/footer";
import Header from "@/components/header";

const WorkDetailLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="py-10">
      <main>{children}</main>
    </div>
  );
};

export default WorkDetailLayout;
