import React from "react";
import "./App.css";
import Header from "./components/Header/header.js";
import Footer from "./components/Footer/footer.js";
import Navbar from "./components/Navbar/navbar.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Footer />
    </div>
  );
}

export default App;
