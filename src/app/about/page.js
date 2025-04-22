/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect } from "react";

export default function AboutPage() {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-up");
    elements.forEach((el, index) => {
      el.style.transition = `all 0.6s ease ${(index + 1) * 0.2}s`;
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    });
  }, []);

  return (
    <div className="p-6 space-y-20 bg-[#FDF3F9] text-gray-900">
      {/* Section 1 - Intro */}
      <section className="max-w-5xl mx-auto text-center fade-up opacity-0 translate-y-8">
        <h1 className="text-4xl font-bold text-pink-600 mb-4">About Refabry</h1>
        <p className="text-gray-700 text-lg">
          Refabry is your go-to fashion destination — modern, stylish, and
          affordable. We bring the latest trends right to your doorstep with
          ease and elegance.
        </p>
        <img
          src="https://i.pinimg.com/736x/e6/82/27/e682275618d05a2410cf37b795e6f26d.jpg"
          alt="Fashion Store"
          className="mx-auto mt-8 rounded-xl shadow-lg w-full max-w-3xl object-cover"
        />
      </section>

      {/* Section 2 - Why Choose Us */}
      <section className="grid md:grid-cols-2 gap-12 items-center fade-up opacity-0 translate-y-8">
        <div>
          <h2 className="text-3xl font-semibold text-pink-600 mb-4">
            Why Choose Us?
          </h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Trendy collections updated weekly</li>
            <li>Secure checkout & fast delivery</li>
            <li>Quality you can trust</li>
            <li>Friendly customer support</li>
          </ul>
        </div>
        <img
          src="https://i.pinimg.com/736x/ce/a7/f4/cea7f4403e32f928028578f5542127e0.jpg"
          alt="Trendy Clothing"
          className="rounded-xl shadow-md object-cover h-80 w-full"
        />
      </section>

      {/* Section 3 - Our Vision */}
      <section className="text-center max-w-4xl mx-auto fade-up opacity-0 translate-y-8 mb-20">
        <h2 className="text-3xl font-semibold text-pink-600 mb-4">
          Our Vision
        </h2>
        <p className="text-gray-700 text-lg">
          We envision a fashion-forward world where style meets simplicity.
          Refabry aims to be the most loved online fashion brand in Bangladesh,
          offering elegance and value in every piece.
        </p>
        <img
          src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80"
          alt="Fashion Vision"
          className="mx-auto mt-8 rounded-xl shadow-md w-full max-w-3xl object-cover"
        />
      </section>
    </div>
  );
}
