import ProductCard from "./components/ProductCard";

async function getProducts() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/all/product/get`
  );
  const data = await res.json();
  return data.data.data; // Correct path to the array of products
}

export default async function Store() {
  const products = await getProducts();

  return (
    <div className="min-h-screen p-6 bg-[#FDF3F9] text-gray-900">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Store</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
