import { useEffect, useState } from "react";
import { deleteItem, takeItem } from "../Unit/Util";
import BlogCard from "../Components/BlogCard";

const BookMarks = () => {
  const [blogs,setBlog]=useState([])
  useEffect(()=>{
    const localBlog = takeItem();
    setBlog(localBlog)
  },[])

  const handleDelete = (id)=>{
    deleteItem(id);
    const localBlog = takeItem();
    setBlog(localBlog)
  }

  return (
    <div className="grid max-w-7xl  mx-auto justify-center grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-10">
          {blogs.map((blog) => (
           <BlogCard handleDelete={handleDelete} deletable = {true} key={blog.id} blog={blog}></BlogCard>
          ))
          }
        </div>
  );
};

export default BookMarks;