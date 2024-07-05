import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
            <div className="min-h-screen hero bg-base-200">
            <div className="flex-col gap-20 hero-content lg:flex-row-reverse">
                <img
                src="https://i.ibb.co/VxjdvGn/pngwing-1-1.png"
                className="max-w-lg rounded-lg shadow-2xl" />
                <div>
                <h1 className="text-5xl font-bold">Books to freshen <br></br> up your bookshelf</h1>
               
                <Link to='/listedBooks'><button className="mt-10 btn btn-primary">View the list</button></Link>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Banner;