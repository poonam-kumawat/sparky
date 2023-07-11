// import logo from './logo.svg';
import "./App.css";
import Home from "./component/Home/home";
import Loading from "./component/Loader/loading";
import Homepage from "./component/homepage/homepage";
import React, {useEffect, useState } from "react";
import DotRing from "./component/mousecursor/dotRing";
import Footer from "./component/Footer/footer";

function App() {
  const [loading,setLoading]=useState(true);
  const sparkLoader=async()=>{
    await  setTimeout(()=> setLoading(false),2000)
   };
  useEffect(()=>{
    sparkLoader();

  });
  return (
    <div className="overAll">
{loading ? <Loading/> : <div><DotRing /><Home />
      <Homepage /><Footer/></div>}
      
    </div>
  );
}

export default App;
