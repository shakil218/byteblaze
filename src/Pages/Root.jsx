import React from "react";
import Nav from "../Components/Navbar/Nav";
import Footer from "../Components/Footer/Footer";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <Nav></Nav>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
