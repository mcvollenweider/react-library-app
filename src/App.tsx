import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import { Homepage } from "./layouts/HomePage/Homepage";
import { Footer } from "./layouts/NavbarAndFooter/Footer";
import { Navbar } from "./layouts/NavbarAndFooter/Navbar";
import { SearchBooksPage } from "./layouts/SearchBooksPage/SearchBooksPage";

export const App = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="flex-grow-1"> {/*this div is for the footer to stay on bottom */}
      <Switch>
        {/*exact overrides*/}
        <Route path="/" exact>
          <Redirect to='/home'/>
        </Route>
        <Route path="/home">
          <Homepage /> 
        </Route>
        <Route path="/search">
          <SearchBooksPage />
        </Route>
      </Switch>
      </div>
      <Footer />
    </div>
  );
};
