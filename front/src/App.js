import './App.css';
import Header from './components/header';
import Navbar from './components/navbar';
import Carousel from './components/carousel';
import CarouselBottom from './components/carousel-bottom';
import Products from './components/products';
import Featured from './components/featuredCarousel';



function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Carousel />
      <CarouselBottom/>
      <Products/>
      <Featured/>
    </div>
  );
}

export default App;
