/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";

export default function ProductCard({ product }) {
  if (!product) return null;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col">
      <img
        src={`https://admin.refabry.com/storage/product/${product.image}`}
        alt={product.name}
        className="w-full h-48 lg:h-96 object-cover"
      />
      <div className="p-4 flex flex-col justify-between flex-grow">
        <div>
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <p className="text-sm text-gray-600">
            {product.short_desc.slice(0, 60)}...
          </p>
        </div>
        <Link
          href={`/store/${product.id}`}
          className="mt-4 inline-block bg-pink-600 hover:bg-pink-700 text-white text-sm font-medium px-4 py-2 rounded transition-colors duration-300 text-center"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
