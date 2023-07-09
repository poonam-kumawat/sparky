// import logo from './logo.svg';
import "./App.css";
import Home from "./component/Home/home";
import Loading from "./component/Loader/loading";
import Homepage from "./component/homepage/homepage";
import React, {useEffect, useState } from "react";

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
{loading ? <Loading/> : <div><Home />
      <Homepage /></div>}
      
    </div>
  );
}

export default App;
