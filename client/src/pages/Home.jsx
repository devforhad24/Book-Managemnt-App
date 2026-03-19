import React, { useEffect, useState } from "react";
import { useBooks } from "../context/BookContext";
import Hero from "../components/Hero";

const Home = () => {
  const { books, currentBook, loading, error } = useBooks();

  console.log(books);

  return <div>
    <Hero/>

    <div className="container mx-auto">
      {books.length > 0 ? (
        <div>{books.map((book) => (
          <div key={book._id} className="space-y-6">
            {book.title}
          </div>
        ))}</div>
      ) : (
        "No books found"
      )}
    </div>
  </div>;
};

export default Home;
