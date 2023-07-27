import React, { useEffect, useState } from "react";
import Header from "../Home/header";
import Footer from "../Footer/footer";
import { Routes, Route } from "react-router-dom";
import Loading from "../Loader/loading";
import Homepage from "../homepage/homepage";
import Contact from "../contact/contact";
import AboutUs from "../aboutus/aboutus";

const Layout = () => {
  const [loading, setLoading] = useState(true);
  const sparkLoader = async () => {
    await setTimeout(() => setLoading(false), 2000);
  };
  useEffect(() => {
    sparkLoader();
  });
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <Header />
          <Routes>
            <Route index element={<Homepage />}></Route>
            <Route path="contact" element={<Contact />} />
            <Route path="aboutus" element={<AboutUs />} />
          </Routes>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Layout;
