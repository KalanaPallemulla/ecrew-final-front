import React from "react";

export default function SalonTopic({ Topic }) {
  return (
    <div>
      <button className="flex justify-center py-3 md:px-40 px-6 text-white  font-bold text-2xl mt-2 rounded-full bg-sitetheme-blue hover:bg-white  border hover-border-sitetheme-blue hover-text-sitetheme-blue">
        {Topic}
      </button>
    </div>
  );
}
