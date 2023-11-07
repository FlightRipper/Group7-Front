// backup
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "./SingleProduct.css";
// import leftArrow from "../../Assets/Logo/leftarrow.svg";
// import rightArrow from "../../Assets/Logo/rightarrow.svg";
// import Slider from "react-slick";
// import Header from "../../components/Header/header.jsx";
// import Navbar from "../../components/Navbar/navbar.jsx";
// import Footer from "../../components/Footer/footer.jsx";
// import GoBack from "../../components/GoBack/GoBack.js";
// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";

// export default function SingleProduct() {
//   const { productId } = useParams();
//   const [Product, setProduct] = useState(null);

//   useEffect(() => {
//     // Replace '123' with the actual product ID you want to fetch
//     // fetch('http://localhost:4000/api/products/653fb27967a73e001776485d')
//     // fetch("http://localhost:4000/api/products/65493daffbda558f8efc520b")
//     fetch(`http://localhost:4000/api/products/${productId}`)
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         return response.json();
//       })
//       .then((data) => setProduct(data))
//       .catch((error) => {
//         console.error("Error:", error);
//         setProduct(null);
//       });
//   }, [productId]);

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 5000,
//     prevArrow: <img className="arrow1" src={leftArrow} alt="Left Arrow" />,
//     nextArrow: <img className="arrow1" src={rightArrow} alt="Right Arrow" />,
//     style: {
//       width: "20vw",
//       height: "70vh",
//       borderRadius: "30px",
//       boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
//       background:
//         "linear-gradient(154deg, #105AB2 38%, rgba(255, 255, 255, 0.00) 128.25%)",
//     },
//   };

//   return (
//     <>
//       <Header />
//       <Navbar />
//       <div className="SingleProduct">
//         <div className="SingleProduct_name">
//           {Product !== null && (
//             <span className="product_name">{[Product.description]}</span>
//           )}
//           <GoBack />
//         </div>
//         <div className="carousel_container">
//           {Product !== null && (
//             <Slider {...settings}>
//               {Product.imagePath.map((image, index) => (
//                 <div key={index}>
//                   <img
//                     className="cimage"
//                     src={"http://localhost:4000/" + image}
//                     alt={`${index}`}
//                   />
//                 </div>
//               ))}
//             </Slider>
//           )}
//         </div>
//         <div className="desc">
//           {Product !== null && (
//             <h3>
//               $ <span>{Product.price}</span>
//             </h3>
//           )}
//           <form>
//             <ul>
//               {Product !== null && <li>Name: {Product.name}</li>}
//               {Product !== null && <li>Description: {Product.description}</li>}

//               {/*Laptop/Phone attributes */}
//               {Product !== null && Product.attributes.operatingSystem && (
//                 <li>
//                   OperatingSystem (OS): {Product.attributes.operatingSystem}
//                 </li>
//               )}
//               {Product !== null && Product.attributes.camera && (
//                 <li>Camera: {Product.attributes.camera}</li>
//               )}
//               {Product !== null && Product.attributes.display && (
//                 <li>Display: {Product.attributes.display}</li>
//               )}
//               {Product !== null && Product.attributes.battery && (
//                 <li>Battery: {Product.attributes.battery}</li>
//               )}
//               {Product !== null && Product.attributes.ram && (
//                 <li>RAM: {Product.attributes.ram}</li>
//               )}
//               {Product !== null && Product.attributes.cpu && (
//                 <li>CPU: {Product.attributes.cpu}</li>
//               )}
//               {Product !== null && Product.attributes.storage && (
//                 <li>Storage: {Product.attributes.storage}</li>
//               )}
//               {/*Accessories attributes */}
//               {Product !== null && Product.attributes.accessoriesBrand && (
//                 <li>Brand: {Product.attributes.accessoriesBrand}</li>
//               )}
//               {Product !== null && Product.attributes.accessoriesColor && (
//                 <li>Color: {Product.attributes.accessoriesColor}</li>
//               )}
//               {Product !== null && Product.attributes.accessoriesType && (
//                 <li>Type: {Product.attributes.accessoriesType}</li>
//               )}
//             </ul>
//           </form>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }

// fetch
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
  const [Product, setProduct] = useState(null);

  useEffect(() => {
    // Replace '123' with the actual product ID you want to fetch
    // fetch('http://localhost:4000/api/products/653fb27967a73e001776485d')
    // fetch("http://localhost:4000/api/products/65493daffbda558f8efc520b")
    fetch(`http://localhost:4000/api/products/${productId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setProduct(data))
      .catch((error) => {
        console.error("Error:", error);
        setProduct(null);
      });
  }, [productId]);

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
      boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      background:
        "linear-gradient(154deg, #105AB2 38%, rgba(255, 255, 255, 0.00) 128.25%)",
    },
  };

  return (
    <>
      <Header />
      <Navbar />
      <div className="SingleProduct">
        <div className="SingleProduct_name">
          {Product !== null && (
            <span className="product_name">{[Product.description]}</span>
          )}
          <GoBack />
        </div>
        <div className="carousel_container">
          {Product !== null && (
            <Slider {...settings}>
              {Product.imagePath.map((image, index) => (
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
        <div className="desc">
          {Product !== null && (
            <h3>
              $ <span>{Product.price}</span>
            </h3>
          )}
          <form>
            <ul>
              {Product !== null && (
                <li>
                  <span className="label">Name: </span>
                  {Product.name}
                </li>
              )}
              {Product !== null && (
                <li>
                  <span className="label">Description: </span>{" "}
                  {Product.description}
                </li>
              )}

              {/*Laptop/Phone attributes */}
              {Product !== null && Product.attributes.operatingSystem && (
                <li>
                  <span className="label">Operating System (OS): </span>
                  {Product.attributes.operatingSystem}
                </li>
              )}
              {Product !== null && Product.attributes.camera && (
                <li>
                  <span className="label">Camera: </span>
                  {Product.attributes.camera}
                </li>
              )}
              {Product !== null && Product.attributes.display && (
                <li>
                  <span className="label">Display: </span>{" "}
                  {Product.attributes.display}
                </li>
              )}
              {Product !== null && Product.attributes.battery && (
                <li>
                  <span className="label">Battery: </span>
                  {Product.attributes.battery}
                </li>
              )}
              {Product !== null && Product.attributes.ram && (
                <li>
                  <span className="label">RAM: </span>
                  {Product.attributes.ram}
                </li>
              )}
              {Product !== null && Product.attributes.cpu && (
                <li>
                  <span className="label">CPU: </span>
                  {Product.attributes.cpu}
                </li>
              )}
              {Product !== null && Product.attributes.storage && (
                <li>
                  <span className="label">Storage: </span>
                  {Product.attributes.storage}
                </li>
              )}
              {/*Accessories attributes */}
              {Product !== null && Product.attributes.accessoriesBrand && (
                <li>
                  <span className="label">Brand: </span>{" "}
                  {Product.attributes.accessoriesBrand}
                </li>
              )}
              {Product !== null && Product.attributes.accessoriesColor && (
                <li>
                  <span className="label">Color: </span>
                  {Product.attributes.accessoriesColor}
                </li>
              )}
              {Product !== null && Product.attributes.accessoriesType && (
                <li>
                  <span className="label">Type: </span>
                  {Product.attributes.accessoriesType}
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
