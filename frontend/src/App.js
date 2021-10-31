import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage";
import CheckoutPage from "./pages/CheckoutPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <div className="app">
      <Header />
      <Navigation />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/category/:categoryName">
          <CategoryPage />
        </Route>
        <Route path="/category/:categoryName/:productId">
          <ProductPage />
        </Route>
        <Route exact path="/checkout">
          <CheckoutPage />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
