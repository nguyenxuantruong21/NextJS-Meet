import BlogItem from "./components/blog-item";

const BLOGS = [
  {
    id: 1,
    image: "/featured-1.png",
    name: "Designing Dashboards",
    created: "12 Feb 2019",
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
    created: "12 Feb 2019",
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
    created: "12 Feb 2019",
    category: "Dashoard",
    contents: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque cum
        deserunt architecto consectetur cumque nostrum at fugiat commodi!
        Consequatur nesciunt quo dolor reiciendis minus doloribus maiores
        perspiciatis nisi tenetur nulla?`,
  },
];

const BlogPage = () => {
  return (
    <div className="px-72">
      <div className="text-4xl font-bold mt-20">Blog</div>
      <div className="flex flex-col gap-14 mt-10">
        {BLOGS.map((blog) => (
          <BlogItem
            key={blog.id}
            category={blog.category}
            contents={blog.contents}
            created={blog.created}
            name={blog.name}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
