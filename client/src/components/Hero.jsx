import React, { useState } from "react";
import bookHeroImage from "../assets/banner.webp";
import { useBooks } from "../context/BookContext";

const Hero = () => {
  const { books, filters, updateFilters } = useBooks();
  const [searchInput, setSearchInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    updateFilters({ search: searchInput.trim(), page: 1 });
  };

  

  return (
    <div className="bg-gray-900 min-h-[600px] relative overflow-hidden">
      <div className="container mx-auto px-4 py-36 flex flex-col lg:flex-row items-center justify-between">
        <div className="w-full lg:w-1/2 text-white z-10">
          <h1 className="text-4xl lg:text-5xl font-bold">
            <span className="text-amber-400">Welcome!</span> Discover Your Next
            Favorite Book
          </h1>

          <form onSubmit={handleSubmit} className="mt-8 max-w-md flex gap-2">
            <input
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              type="text"
              placeholder="Search for books..."
              className="bg-white px-4 py-2 border text-black w-full"
            />
            <button type="submit" className="bg-amber-400 px-6 py-2 text-black">
              Search
            </button>
          </form>
        </div>
        <div className="w-full lg:w-1/2">
          <img
            src={bookHeroImage}
            alt="Hero"
            className="w-full h-fit object-cover rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
