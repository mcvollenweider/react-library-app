import React from "react";
import { Route, Switch, Redirect, useHistory } from "react-router-dom";
import "./App.css";
import { BookCheckoutPage } from "./layouts/BookCheckoutPage/BookCheckoutPage";
import { Homepage } from "./layouts/HomePage/Homepage";
import { Footer } from "./layouts/NavbarAndFooter/Footer";
import { Navbar } from "./layouts/NavbarAndFooter/Navbar";
import { SearchBooksPage } from "./layouts/SearchBooksPage/SearchBooksPage";
import { oktaConfig } from "./lib/oktaConfig";
import { OktaAuth, toRelativeUrl } from "@okta/okta-auth-js";
import { Security, LoginCallback, SecureRoute } from "@okta/okta-react";
import LoginWidget from "./Auth/LoginWidget";
import { ReviewListPage } from "./layouts/BookCheckoutPage/ReviewListPage/ReviewListPage";
import { ShelfPage } from "./layouts/ShelfPage/ShelfPage";

const oktaAuth = new OktaAuth(oktaConfig);

export const App = () => {
  const customAuthHandler = () => {
    history.push("/login");
  };

  const history = useHistory();

  const restoreOriginalUri = async (_oktaAuth: any, originalUri: any) => {
    history.replace(toRelativeUrl(originalUri || "/", window.location.origin));
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Security
        oktaAuth={oktaAuth}
        restoreOriginalUri={restoreOriginalUri}
        onAuthRequired={customAuthHandler}
      >
        <Navbar />
        <div className="flex-grow-1">
          {" "}
          {/*this div is for the footer to stay on bottom */}
          <Switch>
            {/*exact overrides*/}
            <Route path="/" exact>
              <Redirect to="/home" />
            </Route>
            <Route path="/home">
              <Homepage />
            </Route>
            <Route path="/search">
              <SearchBooksPage />
            </Route>
            <Route path="/reviewlist/:bookId">
              <ReviewListPage/>
            </Route>
            <Route path="/checkout/:bookId">
              <BookCheckoutPage />
            </Route>
            <Route
              path="/login"
              render={() => <LoginWidget config={oktaConfig} />}
            />
            <Route path='/login/callback' component={LoginCallback}/>
            <SecureRoute path='/shelf'><ShelfPage/></SecureRoute>
          </Switch>

        </div>
        <Footer />
      </Security>
    </div>
  );
};
