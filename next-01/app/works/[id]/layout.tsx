const WorkDetailLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="sm:py-10">
      <main>{children}</main>
    </div>
  );
};

export default WorkDetailLayout;
