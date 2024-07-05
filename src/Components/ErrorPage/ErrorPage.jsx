import React from 'react';
import { useRouteError } from "react-router-dom"
const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);
    return (
        <div className='text-center mt-40'>
            <h1 className='text-5xl'>Oops!</h1>
            <p className='text-3xl'>Sorry, an unexpected error has occurred.</p>
            <p>
              <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
};

export default ErrorPage;