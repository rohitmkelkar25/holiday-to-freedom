"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-gray-100 dark:bg-gray-900 shadow">
      <h1 className="text-2xl font-bold text-amber-50">Holiday to Freedom</h1>
      <div className="space-x-4 text-amber-50">
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
        <Link href="/services">Services</Link>
        <Link href="/about">About</Link>
        <Link href="/resume">Resume</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}
