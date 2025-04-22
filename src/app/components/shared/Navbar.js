"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Hamburger & close icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gradient-to-b from-white via-pink-50 to-pink-100 text-gray-800">
      <header className="flex justify-between items-center p-6 shadow-md bg-white sticky top-0 z-50">
        {/* Logo */}
        <h1 className="text-2xl font-bold px-6 py-3 rounded-2xl relative z-10 overflow-hidden group">
          <span className="relative z-10 bg-gradient-to-r from-pink-400 via-pink-600 to-pink-300 bg-[200%_auto] bg-clip-text text-transparent animate-textGradient transition-all duration-500 group-hover:brightness-110">
            StyleAura
          </span>
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
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

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-pink-600 focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Nav */}
      {isOpen && (
        <nav className="md:hidden bg-white shadow-lg px-6 pb-4 space-y-2 transition-all duration-300">
          <Link
            href="/"
            className="block text-pink-600 hover:underline"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/store"
            className="block text-pink-600 hover:underline"
            onClick={() => setIsOpen(false)}
          >
            Store
          </Link>
          <Link
            href="/about"
            className="block text-pink-600 hover:underline"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="block text-pink-600 hover:underline"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </nav>
      )}
    </div>
  );
}
