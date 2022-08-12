import React from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductList from "./pages/ProductList";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import Register from "./pages/Register"

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

const App = () => {
  return (
     <Router>
       <Routes>
       <Route exact path="/AMBIKAshoppy" element={<Home/>} />
       <Route  path="/Products/:Category" element={<ProductList/>} />
       <Route  path="/Product/:id" element={<Product/>} />
       <Route  path="/Cart" element={<Cart/>} />
       <Route  path="/Login" element={<Login/>} />
       <Route  path="/Register" element={<Register/>} />
      </Routes>
    </Router>
  )
};

export default App;