import './App.css';
import LoginForm from './components/adminlogin/adminlogin'
import Navbar from './components/navbar/navbar';
import Contactus from './components/contactus/contactus';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
       {/* <Navbar /> */}
      {/* <LoginForm /> */}
      <Contactus />
      <Footer />
    </div>
  );
}

export default App;
