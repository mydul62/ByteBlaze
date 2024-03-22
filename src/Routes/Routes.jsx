import {
  createBrowserRouter} from "react-router-dom";
import MainLayout from "../MainLayOut/MainLayout";
import Home from "../pages/Home";
import Blog from "../pages/Blog";
import BlogPosts from "../pages/BlogPosts";
import BookMark from "../pages/BookMarks"
import Content from "../Components/Content";
import Author from "../Components/Author";
export const router =createBrowserRouter([
  {
    path:'/',
    element:<MainLayout></MainLayout>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/blog',
        element:<Blog></Blog>,
        loader:()=>fetch('https://dev.to/api/articles?per_page=20$top=7'),
      },
      {
        path:'/blog/:id',
        element:<BlogPosts></BlogPosts>,
        loader:({params})=>fetch(`https://dev.to/api/articles/${params.id}`),
        children:[
          {
            index:true,
            element:<Content></Content>,
            loader:({params})=>fetch(`https://dev.to/api/articles/${params.id}`),
          },
          {
            path:"author",
            element:<Author></Author>,
            loader:({params})=>fetch(`https://dev.to/api/articles/${params.id}`),
          }
        ]
      },
      {
        path:'/bookmark',
        element:<BookMark></BookMark>
      }
    ]
  },
]);