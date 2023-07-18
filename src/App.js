// import logo from './logo.svg';
import "./App.css";
// import Home from "./component/Home/header";
// import Loading from "./component/Loader/loading";
// import Homepage from "./component/homepage/homepage";
// import React, {useEffect, useState } from "react";
// import DotRing from "./component/mousecursor/dotRing";
// import Footer from "./component/Footer/footer";
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Contact from "./component/contact/contact";
// import Header from "./component/Home/header";
import Layout from "./component/layout/layout";

function App() {
  // const [loading,setLoading]=useState(true);
  // const sparkLoader=async()=>{
  //   await  setTimeout(()=> setLoading(false),2000)
  //  };
  // useEffect(()=>{
  //   sparkLoader();

  // });
  return (
<BrowserRouter>
<div className="overAll">
      <Routes>      
      <Route path="/*" name="Home" element={<Layout />} />     
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
