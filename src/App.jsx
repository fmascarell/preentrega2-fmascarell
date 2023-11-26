console.error = (message) => {
  if (message.startsWith('Warning: validateDOMNesting')) return;
  console.error(message);
};

import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import "./App.css";

import NavBar from "./components/NavBar/NavBar.jsx";
import "./components/Logo/Logo.css";
import "./components/NavBar/NavBar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/CartWidget/CartWidget.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import Home from "./pages/Home/Home";
import { CartContextProvider } from "./components/CartContext/CartContext";
import CartWidget from "./components/CartWidget/CartWidget";

function App() {
  return (
    <CartContextProvider>
      <div className="border border-5"></div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route
            path="/category/:cid"
            element={<ItemListContainer greeting="Productos" />}
          />
          <Route
            path="/category/detail/:pid"
            element={<ItemDetailContainer />}
          />
          <Route path="/cart" element={<CartWidget />} />
          <Route path="*" element={<Navigate />} />
        </Routes>
      </Router>
    </CartContextProvider>
  );
}

export default App;
