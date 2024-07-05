import React from 'react';

const PagesToReds = ({page}) => {
    const {image, id, bookName, author, category, rating, publisher,tags,totalPages,yearOfPublishing
    } = page;
    return (
       <div>
        
         <div className='flex items-center gap-8 p-12 my-8 border rounded-lg'>
           <div className='my-4'> <img src={image}></img></div>
           <div className='my-4'>
                <h1 className='text-4xl'>{bookName}</h1>
                <p><span className='text-xl font-bold'>By:</span> {author}</p>
                <div className='flex gap-8 my-4'>
                    <p>Tag: </p>
                    <span className='text-green-500'>#{tags[0]}</span>
                    <span className='text-green-500'>#{tags[1]}</span>
                    <p>Year Publishing: {yearOfPublishing}</p>
                </div>
                <div className='flex gap-8 my-4'>
                    <p>Publisher: {publisher}</p>
                    <p>Page {totalPages}</p>
                </div>
                <div className='flex gap-8 my-5'>
                    <p className='p-2 text-indigo-400 bg-white border border-none rounded-xl'>Category: {category}</p>
                    <p className='p-2 text-red-500 bg-red-200 border border-none rounded-xl'>Rating: {rating}</p>
                    <button className='p-2 text-white bg-green-500 border border-none rounded-xl'>View Details</button>
                </div>
            </div>
        </div>
           
  </div>

       
    );
};

export default PagesToReds;