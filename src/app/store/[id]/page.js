import ProductClient from "@/app/components/shared/ProductClient";

export default async function ProductPage({ params }) {
  const id = params.id;

  // Delay for loading effect (optional)
  await new Promise((res) => setTimeout(res, 3000));

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/all/product/get`,
      { cache: "no-store" }
    );

    if (!res.ok) {
      console.error("Fetch error:", await res.text());
      throw new Error("Failed to fetch products");
    }

    const data = await res.json();
    const allProducts = data?.data?.data || [];

    const product = allProducts.find((p) => p.id == id);

    if (!product) {
      return (
        <div className="text-center mt-10 text-red-600">Product not found!</div>
      );
    }

    return <ProductClient product={product} />;
  } catch (err) {
    console.error("Server error:", err.message);
    return (
      <div className="text-center mt-10 text-red-600">
        Server error. Please try again later.
      </div>
    );
  }
}
