import FeatureItem from "./featured-item";

const FEATURED_LIST = [
  {
    id: 1,
    image: "/featured-1.png",
    name: "Designing Dashboards",
    created: 2020,
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
    created: 2020,
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
    created: 2020,
    category: "Dashoard",
    contents: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque cum
        deserunt architecto consectetur cumque nostrum at fugiat commodi!
        Consequatur nesciunt quo dolor reiciendis minus doloribus maiores
        perspiciatis nisi tenetur nulla?`,
  },
];

const FeaturedList = () => {
  return (
    <div className="px-72 mt-6">
      <div>Featured Works</div>
      <div className="flex flex-col gap-10">
        {FEATURED_LIST.map((featured) => (
          <FeatureItem
            key={featured.id}
            category={featured.category}
            contents={featured.contents}
            created={featured.created}
            image={featured.image}
            name={featured.name}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedList;
