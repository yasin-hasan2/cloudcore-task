"use client";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#FCE7F3] flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-3xl bg-white shadow-2xl rounded-2xl p-8 md:p-12 animate-fade-up">
        <h1 className="text-4xl font-bold text-pink-600 mb-6 text-center">
          Get in Touch
        </h1>
        <p className="text-gray-700 mb-10 text-center">
          We’d love to hear from you! Fill out the form below and our team will
          get back to you shortly.
        </p>

        <form className="space-y-6">
          <div>
            <label className="block mb-2 font-medium text-pink-600">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-3 text-gray-700 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-pink-600">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 text-gray-700 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-pink-600">
              Message
            </label>
            <textarea
              rows="5"
              placeholder="Write your message here..."
              className="w-full px-4 py-3 text-gray-700 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 rounded-lg transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
