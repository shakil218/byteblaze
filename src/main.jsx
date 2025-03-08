import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Pages/Root.jsx";
import Home from "./Pages/Home.jsx";
import Blogs from "./Pages/Blogs.jsx";
import Bookmarks from "./Pages/Bookmarks.jsx";
import Blog from "./Pages/Blog.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path:"/blogs",
        element: <Blogs></Blogs>,
        loader: ()=>fetch('https://dev.to/api/articles?per_page=20&top=7'),
      },
      {
        path:"/blog/:id",
        element:<Blog></Blog>,
        loader: ({params})=>fetch(`https://dev.to/api/articles/${params.id}`)
      },
      {
        path:"/bookmarks",
        element: <Bookmarks></Bookmarks>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
