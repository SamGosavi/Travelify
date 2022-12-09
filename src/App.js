import React from "react";
// import { BrowserRouter as Router } from "react-router-dom";
// import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Main from "./Components/Main/Main";
import Destinations from "./Components/Destinations/Destinations";
import Search from "./Components/Search/Search"
import Select from "./Components/Select/Select";
import ImgCarousel from "./Components/ImgCarousel/ImgCarousel";
import Footer from "./Components/Footer/Footer";



function App() {
  return (
    <>  
      <Navbar/>
      <Main/>
      <Destinations/>
      <Search/>
      <Select/>
      <ImgCarousel/>
      <Footer/>
    </>   
  );
}

export default App;
