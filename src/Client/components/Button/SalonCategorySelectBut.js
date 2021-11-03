import React from "react";
import { HashLink } from "react-router-hash-link";

export default function SalonCategorySelectBut({ content, SalonName }) {
  return (
    <div className="flex justify-center pt-2 pr-2">
      <button className="flex justify-center py-2 px-4  rounded-full bg-sitetheme-blue text-white  hover:bg-white  border hover-border-sitetheme-blue">
        {/* <Link to="/#"> {content} </Link> */}
        <HashLink smooth to={`/#${SalonName}`}>
          <div className="text-white hover-text-sitetheme-blue"> {content}</div>
        </HashLink>
      </button>
    </div>
  );
}
