import React from "react";

export default function Feature() {
  return (
    <div>
      {/* Features Section */}
      <section className="py-16 px-6">
        <h3 className="text-3xl font-bold text-center mb-12">
          Why Choose StyleAura?
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg transform transition hover:scale-105 animate-slide-up">
            <img
              src="https://images.unsplash.com/photo-1541099649105-f69ad21f3246"
              alt="Trendy Collection"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h4 className="text-xl font-semibold mb-2">Trendy Collection</h4>
            <p>
              Stay stylish with our hand-picked fashion essentials that blend
              comfort and design.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg transform transition hover:scale-105 animate-slide-up delay-100">
            <img
              src="https://i.pinimg.com/736x/de/37/57/de3757fcb63f6e201dde0cdafe0e74c9.jpg"
              alt="Fast Delivery"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h4 className="text-xl font-semibold mb-2">Fast Delivery</h4>
            <p>
              Swift shipping ensures your outfits reach you just in time for any
              occasion.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg transform transition hover:scale-105 animate-slide-up delay-200">
            <img
              src="https://i.pinimg.com/736x/50/23/5a/50235a1d8e6e22c9a29c82bef0d9e3fa.jpg"
              alt="Secure Checkout"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h4 className="text-xl font-semibold mb-2">Secure Checkout</h4>
            <p>
              Shop with confidence through our reliable and secure payment
              process.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
