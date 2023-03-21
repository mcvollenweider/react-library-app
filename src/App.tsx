import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import { Homepage } from "./layouts/HomePage/Homepage";
import { Footer } from "./layouts/NavbarAndFooter/Footer";
import { Navbar } from "./layouts/NavbarAndFooter/Navbar";
import { SearchBooksPage } from "./layouts/SearchBooksPage/SearchBooksPage";

export const App = () => {
  return (
    <div>
      <Navbar />
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
      <Footer />
    </div>
  );
};
