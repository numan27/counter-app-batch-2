import React from "react";
import LOGO from "../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-[#232323] px-24 py-4">
      <div className="flex items-center justify-between">
        <img width={200} src={LOGO} alt="" />

        <div className="flex text-white gap-3">
          <Link className="text-base hover:text-orange-600" to="/">
            Home
          </Link>
          <Link className="text-base hover:text-orange-600" to="/about">
            About
          </Link>
          <Link className="text-base hover:text-orange-600" to="/contact">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
