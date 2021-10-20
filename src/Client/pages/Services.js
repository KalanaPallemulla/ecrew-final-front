import React, { useEffect, useState } from "react";
import Service from "../components/cards/Service";
import { getAllSalons } from "../../actions/salon";
import { useDispatch, useSelector } from "react-redux";

export default function Services() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const { salons, salonLoading } = useSelector((state) => state.salon);

  useEffect(() => {
    dispatch(getAllSalons());
  }, [getAllSalons]);

  return (
    <>
      <div className="md:grid md:grid-cols-4 md:gap-4">
        <div>
          {" "}
          <div className="flex flex-center my-16">
            {/* This is an example component --> */}
            <div className="pt-2 relative mx-auto text-gray-600">
              <input
                className="border-2 border-gray-300 bg-white h-10 px-5  px-full w-full rounded-full text-sm focus:outline-none"
                type="search"
                name="search"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button
                type="submit"
                className="absolute right-0 top-0 mt-5 mr-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-2	">
          {salons
            .filter(
              (salon) =>
                salon.name.toLowerCase().indexOf(search.toLowerCase()) >= 0 ||
                salon.location.toLowerCase().indexOf(search.toLowerCase()) >= 0
            )
            .map((salon) => (
              <Service />
            ))}

          <div className="flex justify-center ">
            <div>
              <ul className="flex pl-0 list-none rounded my-2">
                <li className="relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-sitetheme-blue border-r-0 ml-0 rounded-l hover:bg-gray-200">
                  <a className="page-link" href="#">
                    Previous
                  </a>
                </li>
                <li className="relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-sitetheme-blue border-r-0 hover:bg-gray-200">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-sitetheme-blue border-r-0 hover:bg-gray-200">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-sitetheme-blue border-r-0 hover:bg-gray-200">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-sitetheme-blue rounded-r hover:bg-gray-200">
                  <a className="page-link" href="#">
                    Next
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
}
