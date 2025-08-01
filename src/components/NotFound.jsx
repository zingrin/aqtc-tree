import React from "react";
import { Link } from "react-router";
import { FaArrowLeft } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh] text-center px-4">
      <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
      <p className="text-gray-600 mb-6">
        Sorry, the page you are looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 bg-[#6b4226] text-white py-2 px-5 rounded-full hover:bg-[#543319] transition-all"
      >
        <FaArrowLeft /> Go Home
      </Link>
    </div>
  );
}
