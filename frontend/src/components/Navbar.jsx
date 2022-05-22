import React from "react";
import Logo from "../asset/social-small.png";

const Navbar = () => {
  return (
    <div className="h-16 bg-white px-10 flex items-center shadow-md">
      <div className="flex items-end">
        <img src={Logo} alt="Social" />
        <h2 className="text-blue-500 font-bold text-2xl tracking-widest">
          ocial
        </h2>
      </div>
    </div>
  );
};

export default Navbar;
