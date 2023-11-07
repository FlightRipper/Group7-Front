import React, { useState, useEffect } from "react";
import Header from "../../components/Header/header";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import Card from "../../components/Card/Card";
import "./AllProducts.css";
// import { useParams } from "react-router-dom";

const AllProducts = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProductsByCategory = async () => {
      try {
        const response = await fetch(`http://localhost:4000/api/products/`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
        setProducts([]);
      }
    };
    fetchProductsByCategory();
  }, []);

  return (
    <>
      <Header />
      <Navbar />
      <div className="card-container">
        {products.length > 0 ? (
          products.map((product) => (
            <Card
              key={product.id}
              image={`http://localhost:4000/${product.imagePath[0]}`}
              name={product.name}
              price={product.price}
              description={product.description}
              productId={product._id}
            />
          ))
        ) : (
          <p>No products found!</p>
        )}
      </div>
      <Footer />
    </>
  );
};

export default AllProducts;
