import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <div>
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-4 bg-pink-100">
        <img
          src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f"
          alt="Fashion Banner"
          className="w-full max-w-4xl rounded-xl mb-8 shadow-lg animate-fade-in"
        />
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 animate-fade-in">
          Unleash Your Style
        </h2>
        <p className="text-lg max-w-2xl text-gray-600 animate-fade-in delay-100">
          Discover the latest trends in fashion. Shop our exclusive collection
          of clothing and accessories tailored for every season.
        </p>
        <Link
          href="/store"
          className="mt-6 px-6 py-2 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-all animate-fade-in delay-200"
        >
          Shop Now
        </Link>
      </section>
    </div>
  );
}
