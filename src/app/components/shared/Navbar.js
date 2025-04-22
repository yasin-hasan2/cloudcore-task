import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div className=" bg-gradient-to-b from-white via-pink-50 to-pink-100 text-gray-800">
      {/* Navbar */}
      <header className="flex justify-between items-center p-6 shadow-md bg-white sticky top-0 z-50">
        <h1 className="text-2xl font-bold px-6 py-3 rounded-2xl relative z-10 overflow-hidden group">
          <span className="relative z-10 bg-gradient-to-r from-pink-400 via-pink-600 to-pink-300 bg-[200%_auto] bg-clip-text text-transparent animate-textGradient transition-all duration-500 group-hover:brightness-110">
            StyleAura
          </span>
        </h1>

        <nav className="space-x-6">
          <Link href="/" className="hover:text-pink-600">
            Home
          </Link>
          <Link href="/store" className="hover:text-pink-600">
            Store
          </Link>
          <Link href="/about" className="hover:text-pink-600">
            About
          </Link>
          <Link href="/contact" className="hover:text-pink-600">
            Contact
          </Link>
        </nav>
      </header>
    </div>
  );
}
