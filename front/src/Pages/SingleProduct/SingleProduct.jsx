import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SingleProduct.css";
import mouse from "../../Assets/Images/mouse-removebg-preview.png";
import phone1 from "../../Assets/Images/Screenshot_from_2023-10-18_16-11-21-removebg-preview.png";
import phone from "../../Assets/Images/Screenshot_from_2023-10-18_17-00-19-removebg-preview.png";
import leftArrow from "../../Assets/Logo/leftarrow.svg";
import rightArrow from "../../Assets/Logo/rightarrow.svg";
import Slider from "react-slick";
import Header from "../../components/Header/header.jsx";
import Navbar from "../../components/Navbar/navbar.jsx";
import Footer from "../../components/Footer/footer.jsx";
import GoBack from "../../components/GoBack/GoBack.js";
export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: <img className="arrow1" src={leftArrow} alt="Left Arrow" />,
    nextArrow: <img className="arrow1" src={rightArrow} alt="Right Arrow" />,
    style: {
      width: "20vw",
      height: "70vh",
      borderRadius: "30px",
      // display: "flex",
      // alignItems: "center",
      // justifyContent: "center",
      // alignContent: "center",
      boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      background: "linear-gradient(154deg, #105AB2 38%, rgba(255, 255, 255, 0.00) 128.25%)"

    },
  };

  return (
    <>
      <Header />
      <Navbar />
      <div className="SingleProduct">
        <div className="SingleProduct_name">
          <span className="product_name">Galaxy Note 10+</span>
          <GoBack/>
        </div>
        <div className="carousel_container">
          <Slider {...settings}>
            <div>
              <img className="cimage" height="500" src={mouse} alt="mouse" />
            </div>
            <div>
              <img className="cimage" src={phone1} alt="logo" />
            </div>
            <div>
              <img className="cimage" src={phone} alt="phone" />
            </div>
          </Slider>
        </div>
        <div className="desc">
          <h3>
            $ <span>Price</span>
          </h3>
          <form>
            <ul>
              <li>Name</li>
              <li>Description</li>
              <li>OperatingSystem (OS)</li>
              <li>Camera</li>
              <li>Display</li>
              <li>Battery</li>
              <li>RAM</li>
              <li>CPU</li>
              <li>Storage</li>
            </ul>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

//fetch
// import React, { useState, useEffect } from "react";
// import Slider from "react-slick";
// import Header from "../components/header.js";
// import Navbar from "../components/navbar.js";
// import Footer from "../components/footer.js";

// export default function SimpleSlider() {
//   const [productData, setProductData] = useState({});

//   useEffect(() => {
//     // Make an API call to fetch product data
//     fetch("/api/products/6547ec8443469b90068ee70f")
//       .then((response) => response.json())
//       .then((data) => setProductData(data))
//       .catch((error) => console.error(error));
//   }, []);

//   return (
//     <>
//       <Header />
//       <Navbar />
//       <div className="SingleProduct">
//         <div className="SingleProduct_name">
//           <span>{productData.name}</span>
//         </div>
//         <div className="carousel_container">
//           <Slider {...settings}>
//             <div>
//               <img className="cimage" src={mouse} alt="mouse" />
//             </div>
//             <div>
//               <img className="cimage" src={phone1} alt="logo" />
//             </div>
//             <div>
//               <img className="cimage" src={phone} alt="phone" />
//             </div>
//           </Slider>
//         </div>
//         <div className="desc">
//           <h3>$ {productData.price}</h3>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }
