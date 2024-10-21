import Footer from "@/components/footer";
import Header from "@/components/header";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="py-10">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default HomeLayout;
