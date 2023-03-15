import React from "react";
import "./App.css";
import { Homepage } from "./layouts/HomePage/Homepage";
import { Footer } from "./layouts/NavbarAndFooter/Footer";
import { Navbar } from "./layouts/NavbarAndFooter/Navbar";


export const App = () => {
  return (
    <div>
   <Navbar/>
   <Homepage/>
    <Footer/>
    </div>
  );
}

