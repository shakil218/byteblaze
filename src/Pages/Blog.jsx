import React, { useState } from "react";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import Spinner from "../Components/Spinner/Spinner";

const Blog = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const blog = useLoaderData();
  

  const {
    title,
    reading_time_minutes,
    readable_publish_date,
    comments_count,
    public_reactions_count,
  } = blog;

  return (
    <div className="max-w-3xl px-6 py-16 mx-auto space-y-12">
      <article className="space-y-8 dark:bg-gray-100 dark:text-gray-900">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">
            {title}
          </h1>
          <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center dark:text-gray-600">
            <p className="text-sm">
              {reading_time_minutes} min read •{" "}
              {new Date(readable_publish_date).toLocaleDateString()}
            </p>
            <p className="flex-shrink-0 mt-3 text-sm md:mt-0">
              {comments_count} comments • {public_reactions_count} views
            </p>
          </div>
          {/* tabs */}
          <div className="flex items-center overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap dark:bg-gray-100 dark:text-gray-800">
            <Link
              onClick={() => setTabIndex(0)}
              to=""
              className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
                tabIndex === 0 ? "border border-b-0" : "border-b"
              } rounded-t-lg dark:border-gray-600 dark:text-gray-900`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
              </svg>
              <span>Content</span>
            </Link>
            <Link
              onClick={() => setTabIndex(1)}
              to={`author`}
              className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
                tabIndex === 1 ? "border border-b-0" : "border-b"
              } rounded-t-lg dark:border-gray-600 dark:text-gray-900`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
              </svg>
              <span>Author</span>
            </Link>
          </div>
        </div>
        <Outlet></Outlet>
      </article>
      <div></div>
    </div>
  );
};

export default Blog;
