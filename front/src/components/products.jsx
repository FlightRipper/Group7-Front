import React from 'react';
import '../stylesheets/products.css';
import { useState, useEffect } from 'react';


const Products = () => {
    const [products, setProducts] = useState([]);
    const [featured, setFeatured] = useState("");

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch("http://localhost:4000/api/products");
            const json = await response.json();
            console.log(json);
            if (response.ok) {
                setProducts(json);
            }
        };
        fetchProducts();
    }, []);

    return (
        <div className="site-wrapper1">
            <div className="header-titles">
                <p onClick={() => { setFeatured("smartphone") }}><a href='#'>SMARTPHONES</a></p>
                <p><a href="#"> SMARTPHONE ACCESSORIES</a></p>
                <p onClick={() => { setFeatured("laptops") }}><a href="#">LAPTOPS</a></p>
                <p><a href="#"> LAPTOP ACCESSORIES</a></p>
            </div>
            <>
                {
                    !featured ? (
                        <div className='pro-header1'>{products.map((product, index) =>
                        (
                            <div>{product.categoryId.categoryName == "smartphone" && <div className="card">
                                <div key={index} className="card-img">
                                    <div className="img">
                                        <img src={`http://localhost:4000/${product.imagePath}`} alt={`Image ${index + 1}`} />
                                    </div>
                                </div>
                                <div className="card-title">iPhone 15</div>
                                <div className="card-subtitle">Description</div>
                                <hr className="card-divider" />
                                <div className="card-footer">
                                    <div className="card-price"><span>$</span> 123.45</div>
                                </div>
                                <div className="button-container">
                                    <button className="button2">
                                        View More
                                    </button>
                                </div>
                            </div>
                            }

                            </div>
                        )
                        )}</div>
                    ) : (<div>{products.map((product, index) =>
                    (
                        <div>{product.categoryId.categoryName === featured && <div className="card">
                            <div key={index} className="card-img">
                                <div className="img">
                                    <img src={`http://localhost:4000/${product.imagePath}`} alt={`Image ${index + 1}`} />
                                </div>
                            </div>
                            <div className="card-title">iPhone 15</div>
                            <div className="card-subtitle">Description</div>
                            <hr className="card-divider" />
                            <div className="card-footer">
                                <div className="card-price"><span>$</span> 123.45</div>
                            </div>
                            <div className="button-container">
                                <button className="button2">
                                    View More
                                </button>
                            </div>
                        </div>
                        }

                        </div>
                    )
                    )} </div>
                    )
                }
            </>

        </div>

    )
}

export default Products