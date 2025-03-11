import React from "react";
import { useLoaderData } from "react-router-dom";
import Null_image from "../../assets/404.jpg";

const Content = () => {

  const blog = useLoaderData();
  const { cover_image, title, tags, body_html } = blog;

  return (
    <div className="p-2 mx-auto group hover:no-underline focus:no-underline border-2 border-gray-200 border-opacity-30">
      <img
        role="presentation"
        className="object-cover w-full rounded h-44 dark:bg-gray-500"
        src={cover_image ? cover_image : Null_image}
      />
      <div className="flex flex-wrap py-6 gap-2 border-t border-dashed border-gray-200">
        {tags.map((tag, index) => (
          <a
            key={index}
            rel="noopener noreferrer"
            href="#"
            className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-600 dark:text-gray-50"
          >
            {`# ${tag}`}
          </a>
        ))}
      </div>
      <div className=" space-y-2 leading-7">
        <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
          {title}
        </h3>
        {/* https://learn2torials.com/a/include-html-file-in-react => I am following the instructions of this site to rendering or formatting to a html file to convert a jsx file . */}
        <div dangerouslySetInnerHTML={ {__html: body_html} } />
      </div>
    </div>
  );
};

export default Content;
