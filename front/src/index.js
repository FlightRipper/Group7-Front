import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "./Pages/AboutUs/AboutUs";
import reportWebVitals from "./reportWebVitals";

import NotFound from "./Pages/NotFound/NotFound";
import SingleProduct from "./Pages/SingleProduct/SingleProduct";
// import SingleAccessory from "./Pages/SingleAccessory/SingleAccessory";
import ProductsByCategory from "./Pages/ProductsByCategory/ProductsByCategory.jsx";
import AllProducts from "./Pages/AllProducts/AllProducts.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/about" element={<AboutUs />} />
        <Route
          path="/products/:categoryName"
          element={<ProductsByCategory />}
        />
        <Route path="/product/:productId" element={<SingleProduct />} />
        {/* <Route path="/accessory/:productId" element={<SingleAccessory />} /> */}
        <Route path="/products" element={<AllProducts />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
