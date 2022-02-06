import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import Cart from "./Components/Carts/Cart";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";

function App() {
  return (
    <Fragment>
      <Cart />
      <Header></Header>
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
