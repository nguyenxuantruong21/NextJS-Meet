const ProductDetail = ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: string;
}) => {
  const { slug } = params;
  console.log(searchParams);
  console.log(slug);

  if (!slug) {
    return <>Product list</>;
  }

  return <div>ProductDetail</div>;
};

export default ProductDetail;
