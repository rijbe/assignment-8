import React from 'react';
import { CiStar } from "react-icons/ci";
import { Link } from 'react-router-dom';
const Book = ({book}) => {
    const {id, bookName, author, image, review,rating, category, tags, publisher, yearOfPublishing} = book;

    return (
        <div>
            <Link to={`/book/${id}`}>
            <div className="card card-compact bg-base-100  shadow-xl">
                <figure>
                    <img src={image} alt="Shoes" />
                </figure>
                <div className="card-body">
                    <div className='flex gap-6 mt-10'>
                        <button className='btn text-green-400'>{tags[0]}</button>
                        <button className='btn text-green-400'>{tags[1]}</button>
                    </div>
                    <h2 className="card-title text-4xl font-bold my-5">{bookName}</h2>
                    <p>By: {author}</p>
                    <div className="card-actions ">
                        <div className='flex gap-60'>
                            <p>{category}</p>
                            <p className='flex items-center gap-2'>{rating}<CiStar className='text-2xl'></CiStar></p>
                        </div>
                    </div>
                </div>
            </div>  
            </Link>      
        </div>
    );
};

export default Book;