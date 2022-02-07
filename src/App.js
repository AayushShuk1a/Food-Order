import React, { useState } from "react";
import Cart from "./Components/Carts/Cart";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import ItemsContextProvider from "./Store/ItemsContextProvider";

function App() {
  const [CartIsShow, SetCart] = useState(false);
  const ShowCartHandler = () => {
    SetCart(true);
  };

  const CloseCartHandler = () => {
    SetCart(false);
  };

  return (
    <ItemsContextProvider>
      {CartIsShow && <Cart onClick={CloseCartHandler} />}
      <Header onClick={ShowCartHandler} />
      <main>
        <Meals />
      </main>
    </ItemsContextProvider>
  );
}

export default App;
