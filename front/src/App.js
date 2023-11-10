import './App.css';
import Header from './components/header';
import Navbar from './components/navbar';
import Carousel from './components/carousel';
import CarouselBottom from './components/carousel-bottom';
import Products from './components/products';
import Featured from './components/featuredCarousel';
import Blogs from './components/blogs.jsx';
import Bottom from './components/bottom.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home.jsx'


function App() {
  return (
    <div className="App">
      <Routes>
         <Route path='/' element = {<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
