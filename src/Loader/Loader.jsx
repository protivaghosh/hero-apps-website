import React from "react";
import { HashLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-white/70 z-50">
      <HashLoader color="#2563eb" size={60} speedMultiplier={1.5} />
    </div>
  );
};

export default Loader;
