/* eslint-disable @next/next/no-img-element */
import Feature from "./components/shared/Feature";

import Hero from "./components/shared/Hero";
import Testimonial from "./components/shared/Testimonial";

/* eslint-disable @next/next/no-html-link-for-pages */
export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-pink-50 to-pink-100 text-gray-800">
      <Hero />

      <Feature />

      {/* Subscription Section */}
      <section className="bg-pink-600 text-white py-16 px-6 text-center">
        <h3 className="text-3xl font-bold mb-4">Get Exclusive Offers</h3>
        <p className="mb-6">
          Subscribe now and be the first to know about new arrivals and special
          discounts.
        </p>
        <img
          src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2"
          alt="Subscribe"
          className="mx-auto w-full max-w-xl rounded-lg mb-6 shadow-md"
        />
        <div className="flex justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-l-md text-black"
          />
          <button className="px-4 py-2 bg-pink-800 rounded-r-md hover:bg-pink-900">
            Subscribe
          </button>
        </div>
      </section>

      <Testimonial />
    </div>
  );
}
