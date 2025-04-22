/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function Testimonial() {
  return (
    <div>
      <section className="bg-[#FDF1F7] py-16 px-4">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-pink-600 mb-4 animate-fadeIn">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 text-lg">
            Real reviews from our StyleAura family ✨
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              name: "Sadia Akter",
              role: "Fashion Blogger",
              image: "https://randomuser.me/api/portraits/women/79.jpg",
              text: "StyleAura has completely transformed my wardrobe! Their unique designs and premium feel are unmatched.",
            },
            {
              name: "Nusrat Jahan",
              role: "Model & Influencer",
              image: "https://randomuser.me/api/portraits/women/65.jpg",
              text: "Every piece I got from StyleAura feels custom-made. So elegant, comfy, and perfect for every occasion.",
            },
            {
              name: "Tahmid Hasan",
              role: "Lifestyle Vlogger",
              image: "https://randomuser.me/api/portraits/men/32.jpg",
              text: "As a content creator, presentation is everything. StyleAura always delivers that next-level charm.",
            },
          ].map((testimonial, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md p-6 border-2 border-pink-100 hover:shadow-lg hover:scale-[1.02] transition-all duration-500"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mx-auto mb-4 border-4 border-pink-200"
              />
              <h3 className="text-xl font-semibold text-pink-600">
                {testimonial.name}
              </h3>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
              <p className="mt-3 text-gray-700 italic">
                &quot;{testimonial.text}&quot;
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
