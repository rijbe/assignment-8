import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import ListedBooks from './Components/ListedBooks/ListedBooks';
import PagesToRed from './Components/PagesToRed/PagesToRed';
import BookDetails from './Components/BookDetails/BookDetails';
import Blog from './Components/Blog/Blog';
import ErrorPage from './Components/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/book/:id',
        element: <BookDetails></BookDetails>,
        loader: ()=>fetch('/book.json')
      },
      {
        path: '/listedBooks',
        element: <ListedBooks></ListedBooks>,

 
      },
      {
        path: '/pagesRed',
        element: <PagesToRed></PagesToRed>,
        loader: ()=>fetch('/book.json')
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
