import WorkItem from "./components/work-item";

const WORKS = [
  {
    id: 1,
    image: "/featured-1.png",
    name: "Designing Dashboards",
    created: "2020",
    category: "Dashoard",
    contents: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque cum
        deserunt architecto consectetur cumque nostrum at fugiat commodi!
        Consequatur nesciunt quo dolor reiciendis minus doloribus maiores
        perspiciatis nisi tenetur nulla?`,
  },
  {
    id: 2,
    image: "/featured-2.png",
    name: "Designing Dashboards",
    created: "2020",
    category: "Dashoard",
    contents: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque cum
        deserunt architecto consectetur cumque nostrum at fugiat commodi!
        Consequatur nesciunt quo dolor reiciendis minus doloribus maiores
        perspiciatis nisi tenetur nulla?`,
  },
  {
    id: 3,
    image: "/featured-3.png",
    name: "Designing Dashboards",
    created: "2020",
    category: "Dashoard",
    contents: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque cum
        deserunt architecto consectetur cumque nostrum at fugiat commodi!
        Consequatur nesciunt quo dolor reiciendis minus doloribus maiores
        perspiciatis nisi tenetur nulla?`,
  },
];

const WorkPage = () => {
  return (
    <div className="px-72">
      <div className="text-4xl font-bold mt-20">Works</div>
      <div className="flex flex-col gap-14 mt-10">
        {WORKS.map((item) => (
          <WorkItem
            key={item.id}
            id={item.id}
            category={item.category}
            image={item.image}
            contents={item.contents}
            created={item.created}
            name={item.name}
          />
        ))}
      </div>
    </div>
  );
};

export default WorkPage;
