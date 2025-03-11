import React from "react";
import { Link } from "react-router-dom";
import Null_image from "../../assets/404.jpg";
import { MdDeleteForever } from "react-icons/md";

const BlogCard = ({ blog , deletable , handleDelete}) => {
  const { cover_image, title, description, published_at, id } = blog;
  return (
    <div className="flex relative">
      <Link
        to={`/blog/${id}`}
        className="max-w-sm mx-auto shadow-xl group hover:no-underline focus:no-underline dark:bg-gray-50 transition border-2 hover:scale-105 border-primary hover:border-secondary border-opacity-30"
      >
        <img
          role="presentation"
          className="object-cover w-full rounded h-44 dark:bg-gray-500"
          src={cover_image ? cover_image : Null_image}
        />
        <div className="p-6 space-y-2 leading-7">
          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
            {title}
          </h3>
          <span className="text-xs dark:text-gray-600">
            {new Date(published_at).toLocaleDateString()}
          </span>
          <p>{description}</p>
        </div>
      </Link>
      {deletable && (<div onClick={()=>handleDelete(id)} className="flex absolute p-3 mr-8 rounded-full bg-primary hover:bg-secondary group cursor-pointer hover:scale-105 overflow-hidden -top-5 -right-5"><MdDeleteForever size={20} className="text-secondary group-hover:text-primary"></MdDeleteForever></div>)}
    </div>
  );
};

export default BlogCard;
