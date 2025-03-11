import React, { useEffect, useState } from "react";
import { deleteBlogs, getBlogs } from "../utils";
import BlogCard from "../Components/BlogCard/BlogCard";
import EmptyState from "../Components/EmptyState/EmptyState";

const Bookmarks = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const storedBlogs = getBlogs();
    setBlogs(storedBlogs);
  }, []);

  const handleDelete = (id) =>{
    deleteBlogs(id)
    const storedBlogs = getBlogs();
    setBlogs(storedBlogs);
  }

  if(blogs.length<1) return <EmptyState massage={'No Bookmarks Found'} address={'/blogs'} label={'Browse Blogs'}></EmptyState>
 
  return (
    <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 px-4 sm:px-8 lg:px-12 py-8">
      {blogs.map((blog) => (
        <BlogCard deletable={true} handleDelete={handleDelete} key={blog.id} blog={blog}></BlogCard>
      ))}
    </div>
  );
};

export default Bookmarks;
