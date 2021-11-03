import React from "react";

export default function SalonTopic({ Topic }) {
  return (
    <div>
      <button className="flex justify-center py-3 md:px-40 px-6 mt-2 rounded-full bg-sitetheme-blue text-white  hover:bg-white  border hover-border-sitetheme-blue">
        <div className="text-white hover-text-sitetheme-blue font-bold text-2xl">
          {" "}
          {Topic}
        </div>
      </button>
    </div>
  );
}
