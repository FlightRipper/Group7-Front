import React from 'react';
import Header from '../components/header.jsx';
import Navbar from '../components/navbar';
import Carousel from '../components/carousel';
import CarouselBottom from '../components/carousel-bottom';
import Products from '../components/products';
import Featured from '../components/featuredCarousel';
import Blogs from '../components/blogs.jsx';
import Bottom from '../components/bottom.jsx'
import AdminAddProductPage from '../components/AdminAddProductPage.jsx'

const Home = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Carousel />
      <CarouselBottom />
      <Products />
      <Featured />
      <Blogs />
      <Bottom />
      <AdminAddProductPage/>
      </>
  )
}

export default Home;