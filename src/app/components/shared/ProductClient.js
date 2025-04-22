/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";

export default function ProductClient({ product }) {
  console.log("ProductClient", product);
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-5xl mx-auto p-6 md:p-10"
    >
      <div className="grid md:grid-cols-2 gap-8 bg-[#FDF3F9] rounded-2xl shadow-xl p-6 md:p-10">
        {/* Product Image */}
        <div className="w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl border border-gray-200 bg-gray-100">
          <img
            src={
              `https://admin.refabry.com/storage/product/${product.image}` ||
              "https://via.placeholder.com/300"
            }
            alt={product.name}
            className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col justify-center space-y-5">
          <h1 className="text-3xl font-bold text-[#1f2937]">{product.name}</h1>
          <p className="text-[#4b5563] leading-relaxed">{product.short_desc}</p>
          <p className="text-xl font-semibold text-pink-600">
            Price: {product.price}৳
          </p>
        </div>
      </div>
    </motion.div>
  );
}
