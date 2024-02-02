import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DataScienceInfo from "./components/DataScienceInfo";
import Footer from "./components/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";
import Error404 from "./components/Error404";
import CartContextProvider from "./components/context/CartContext";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import ThankYou from "./components/ThankYou";

function App() {
  return (
    <CartContextProvider>
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
          <Route path={"/"} element={<ItemListContainer />} />
            <Route path={"/category/:id"} element={<ItemListContainer />} />
            <Route path={"/item/:id"} element={<ItemDetailContainer />} />
            <Route path={"/cart"} element={<Cart />} />
            <Route path={"/checkout"} element={<Checkout/>} />
            <Route path={"/thankyou/:id"} element={<ThankYou/>} />
            <Route path={"*"} element={<Error404 />} />
          </Routes>
          <DataScienceInfo />
          <Footer />
        </BrowserRouter>
      </div>
    </CartContextProvider>
  );
}

export default App;
