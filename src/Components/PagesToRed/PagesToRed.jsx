import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getBooksApplication } from '../../Utilits/localStorage';
import PagesToReds from '../PagesToReds/PagesToReds';

const PagesToRed = () => {
    const books = useLoaderData();
    const [booksRed, setBooksRed] = useState([]);
    const [displayBooks, setDisplayBooks] = useState([]);
    const handleBooks = filter => {
        if(filter === 'all'){
            setDisplayBooks(booksRed);
        }
        else if(filter === 'fiction'){
            const appliedBooks = booksRed.filter(books => books.category === "Fiction");
            setDisplayBooks(appliedBooks);
        }
        else if(filter === 'non-fiction'){
            const fictionBooks = booksRed.filter(books=> books.category === "Non-Fiction");
            setDisplayBooks(fictionBooks);
        }
        else if(filter === 'fantasy'){
            const fantasyBooks = booksRed.filter(books => books.category === "Fantasy");
            setDisplayBooks(fantasyBooks);
        }
    }
    useEffect(()=>{
        const senBooks = getBooksApplication();
        if(books.length > 0){
            const redBooks = books.filter(book => senBooks.includes(book.id));
            console.log(redBooks, books, senBooks);
            setBooksRed(redBooks);
            setDisplayBooks(redBooks);
        }
    }, [])
    return (
        <div>
        <div className='flex items-center justify-center h-40 p-12 bg-[#1313130D] rounded-xl'>
            <h1 className='text-7xl '>Books</h1>
            
        </div>
{/*            
            <div role="tablist" className="tabs tabs-lifted">
                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Tab 1" />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    <h1>helo tab</h1>
                </div>


                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Tab 3" />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    Tab content 3
                </div> 
            </div> */}
            <div className="dropdown flex justify-center mb-8">
                <div tabIndex={0} role="button" className="m-1 btn bg-green-500 text-white">Sort By</div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li onClick={()=>handleBooks('all')}><a>All</a></li>
                    <li onClick={()=>handleBooks('fiction')}><a>Fiction</a></li>
                    <li onClick={()=>handleBooks('non-fiction')}><a>Non Fiction</a></li>
                    <li onClick={()=>handleBooks('fantasy')}><a>Fantasy</a></li>
                </ul>
            </div>
            <div >
                {
                    displayBooks.map(page => <PagesToReds key={page.id} page={page}></PagesToReds>)
                }
               
            </div>
        </div>
    );
};

export default PagesToRed;