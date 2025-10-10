import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "../../Loader/Loader";

const Root = () => {
  const navigation = useNavigation();
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    let timer;
    if (navigation.state === "loading") {
      setShowLoader(true);
     timer = setTimeout(() => {
        setShowLoader(false);
      }, 2000);
    } else {
      
      timer = setTimeout(() => setShowLoader(false), 2000);
    }

    return () => clearTimeout(timer);
  }, [navigation.state]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {showLoader && <Loader />}

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Root;
