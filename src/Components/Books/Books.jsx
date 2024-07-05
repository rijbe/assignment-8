import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';
// import Book from '../Book/Book';


const Books = () => {
    const [books, setBooks] = useState([])
    useEffect(()=> {
        fetch('book.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    }, [])
    return (
        <div>
        <h1 className='text-5xl text-center my-24'>Books</h1>
           
            <div className='grid md: grid-cols-3 gap-10'>
                {
                    books.map(book =><Book key={book.id} book={book}></Book>)
                    
                }
            </div>
        </div>
    );
};

export default Books;