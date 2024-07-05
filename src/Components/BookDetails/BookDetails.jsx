import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { setBooksApplication } from '../../Utilits/localStorage';


const BookDetails = () => {
    const notify = () => {
        setBooksApplication(intId)
        toast("Add to Details File here!");
    }
    const handleWhished = () => toast("Wish of all want any books!");
    const books = useLoaderData();
    const {id} = useParams();
    const intId = parseInt(id);
    const book = books.find(book => book.id === intId)
    console.log(book);
    return (
        <div>
           
            <div className='grid grid-cols-4 gap-10'>
                <div className='flex items-center justify-center w-full p-12 rounded-lg  bg-[#1313130D] md:col-span-2'>
                    <div>
                        <img src={book.image} className='w-60' ></img>
                    </div>
                </div>
                <div className='p-12 md:col-span-2'>
                    <h1 className='my-6 text-4xl font-bold'>{book.bookName}</h1>
                    <h1 className='my-4'>By: {book.author}</h1>
                    <p className='my-4'>{book.category}</p>
                    <h2 className='my-8'><span className='text-xl font-bold'>Review:</span> {book.review}</h2>
                    <div className='flex gap-20 my-4'>
                        <div>
                            <p>Name OF Pages:</p>
                            <p>Publisher:</p>
                            <p>Year of Publishing:</p>
                            <p>Rating:</p>
                        </div> 
                        <div className='font-bold'>
                            <p>{book.totalPages}</p>
                            <p>{book.publisher}</p>
                            <p>{book.yearOfPublishing}</p>
                            <p>{book.rating}</p>
                        </div>                
                    </div>
                    <div className='flex gap-8'>
                    <button onClick={notify} className='w-24 font-bold text-black bg-white btn'>Red</button>
                    <button onClick={handleWhished} className='w-24 font-bold text-white btn-primary btn'>Wished</button>
                    </div>
                    
                </div>
                <ToastContainer />
            </div>

        </div>
    );
};

export default BookDetails;