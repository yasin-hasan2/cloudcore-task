import ProductClient from "@/app/components/shared/ProductClient";

export default async function ProductPage({ params }) {
  const id = params.id;

  // Artificial delay (3 seconds)
  await new Promise((resolve) => setTimeout(resolve, 3000));

  // Fetch all products
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/all/product/get`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    console.error("Failed to fetch product:", await res.text());
    return (
      <div className="text-center mt-10 text-red-600">
        Failed to load product
      </div>
    );
  }

  const data = await res.json();
  const allProducts = data?.data?.data || [];
  const product = allProducts.find((p) => p.id === Number(id));

  if (!product) {
    return <div className="text-center mt-10">Product not found!</div>;
  }

  return <ProductClient product={product} />;
}
