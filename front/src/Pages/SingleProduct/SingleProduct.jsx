import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SingleProduct.css";
import leftArrow from "../../Assets/Logo/leftarrow.svg";
import rightArrow from "../../Assets/Logo/rightarrow.svg";
import Slider from "react-slick";
import Header from "../../components/Header/header.jsx";
import Navbar from "../../components/Navbar/navbar.jsx";
import Footer from "../../components/Footer/footer.jsx";
import GoBack from "../../components/GoBack/GoBack.js";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function SingleProduct() {
  const { productId } = useParams();
  console.log(productId);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `http://localhost:4000/api/products/${productId}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
        setProduct(null);
      }
    };

    fetchProduct();
  }, [productId]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <img className="arrow1" src={leftArrow} alt="Left Arrow" />,
    nextArrow: <img className="arrow1" src={rightArrow} alt="Right Arrow" />,
    style: {
      width: "20vw",
      height: "70vh",
      borderRadius: "30px",
      boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      background:
        "linear-gradient(154deg, #105AB2 38%, rgba(255, 255, 255, 0.00) 128.25%)",
    },
  };

  return (
    <>
      <Header />
      <Navbar />
      <div className="SingleProduct_name">
        {product !== null && (
          <span className="product_name">{product.description}</span>
        )}
        <GoBack />
      </div>

      <div className="SingleProduct">
        <div className="carousel_container">
          {product !== null && (
            <Slider {...settings}>
              {product.imagePath.map((image, index) => (
                <div key={index}>
                  <img
                    className="cimage"
                    src={"http://localhost:4000/" + image}
                    alt={`${index}`}
                  />
                </div>
              ))}
            </Slider>
          )}
        </div>
        <div className="SingleProduct_desc">
          {product !== null && (
            <h3>
              $ <span>{product.price}</span>
            </h3>
          )}
          <form className="SingleProduct_form">
            <ul>
              {product !== null && (
                <li>
                  <span className="label">Name: </span>
                  {product.name}
                </li>
              )}
              {product !== null && (
                <li>
                  <span className="label">Description: </span>{" "}
                  {product.description}
                </li>
              )}

              {/* Laptop/Phone attributes */}
              {product !== null && product.attributes.operatingSystem && (
                <li>
                  <span className="label">Operating System (OS): </span>
                  {product.attributes.operatingSystem}
                </li>
              )}
              {product !== null && product.attributes.camera && (
                <li>
                  <span className="label">Camera: </span>
                  {product.attributes.camera}
                </li>
              )}
              {product !== null && product.attributes.display && (
                <li>
                  <span className="label">Display: </span>{" "}
                  {product.attributes.display}
                </li>
              )}
              {product !== null && product.attributes.battery && (
                <li>
                  <span className="label">Battery: </span>
                  {product.attributes.battery}
                </li>
              )}
              {product !== null && product.attributes.ram && (
                <li>
                  <span className="label">RAM: </span>
                  {product.attributes.ram}
                </li>
              )}
              {product !== null && product.attributes.cpu && (
                <li>
                  <span className="label">CPU: </span>
                  {product.attributes.cpu}
                </li>
              )}
              {product !== null && product.attributes.storage && (
                <li>
                  <span className="label">Storage: </span>
                  {product.attributes.storage}
                </li>
              )}
              {/* Accessories attributes */}
              {product !== null && product.attributes.accessoriesBrand && (
                <li>
                  <span className="label">Brand: </span>{" "}
                  {product.attributes.accessoriesBrand}
                </li>
              )}
              {product !== null && product.attributes.accessoriesType && (
                <li>
                  <span className="label">Type: </span>
                  {product.attributes.accessoriesType}
                </li>
              )}
              {product !== null && product.attributes.accessoriesColor && (
                <li>
                  <span className="label">Color: </span>
                  {product.attributes.accessoriesColor}
                </li>
              )}
            </ul>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
