import React, { useEffect, useState } from 'react'

const Home = () => {
    const [books, setBooks] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/books')
            .then(res => res.json())
            .then(data => setBooks(data.books))
    }, [])

    // console.log(books)
  return (
    <div>
      {books.map(book => (
        <div key={book._id} className='text-center'>
          <h2 className='font-bold text-amber-600'>{book.title}</h2>
          <p>{book.description}</p>
          <p>Author: {book.author}</p>
          <p>Published Year: {book.publishedYear}</p>
          <p>Price: ${book.price.toFixed(2)}</p>
          <br />
        </div>
      ))}
    </div>
  )
}

export default Home
