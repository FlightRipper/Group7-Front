import React from 'react';
import '../stylesheets/products.css';
import Phone from '../assets/phone.png'

const products = () => {
    return (
        <div className="site-wrapper1">
            <div className="header-titles">
                <p>SMARTPHONES</p>
                <p>SMARTPHONE ACCESSORIES</p>
                <p>LAPTOPS</p>
                <p>LAPTOP ACCESSORIES</p>
            </div>
            <div className='pro-header'>
                <div className="card">
                    <div className="card-img">
                        <div className="img">
                            <img src={Phone} alt="phone" />
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

                <div className="card">
                    <div className="card-img">
                        <div className="img">
                            <img src={Phone} alt="phone" />
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

                <div className="card">
                    <div className="card-img">
                        <div className="img">
                            <img src={Phone} alt="phone" />
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

                <div className="card">
                    <div className="card-img">
                        <div className="img">
                            <img src={Phone} alt="phone" />
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
            </div>
        </div>

    )
}

export default products