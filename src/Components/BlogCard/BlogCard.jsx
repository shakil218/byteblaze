import React from "react";
import { Link } from "react-router-dom";
import Null_image from "../../assets/404.jpg"

const BlogCard = ({blog}) => {
  return (
    <Link
      to={"/"}
      className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50"
    >
      <img
        role="presentation"
        className="object-cover w-full rounded h-44 dark:bg-gray-500"
        src={blog.cover_image ? blog.cover_image : Null_image}
      />
      <div className="p-6 space-y-2">
        <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
          {blog.title}
        </h3>
        <span className="text-xs dark:text-gray-600">{blog.published_at}</span>
        <p>
          {blog.description}
        </p>
      </div>
    </Link>
  );
};

export default BlogCard;
