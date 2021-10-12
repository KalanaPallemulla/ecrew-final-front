import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <div className="h-14 flex items-center px-4 justify-between bg-sitetheme-blue text-white">
        {/* <NavLink to="" className="" href="#pablo">
          <img alt="meaningfull" src={logo} className="w-10 h-10 shadow-md " />
        </NavLink>{" "} */}
        <div className="space-x-6  items-center sm:block hidden ">
          <NavLink activeStyle={{ color: "yellow" }} to="">
            {" "}
            <i class="fas fa-home pr-2 mt-1"></i>
            Home
          </NavLink>
          <NavLink activeStyle={{ color: "yellow" }} to="/Services">
            {" "}
            <i class="fab fa-servicestack pr-2 mt-1"></i>
            Services
          </NavLink>

          <NavLink activeStyle={{ color: "yellow" }} to="aboutUs">
            {" "}
            <i class="far fa-address-card pr-2 mt-1"></i>
            About
          </NavLink>
          <NavLink activeStyle={{ color: "yellow" }} to="/contactUs">
            {" "}
            <i class="far fa-id-badge pr-2 mt-1"></i>
            Contact
          </NavLink>
        </div>
        <button className="md:hidden block">
          <i className="fas fa-bars"></i>
        </button>
      </div>
    </>
  );
}
