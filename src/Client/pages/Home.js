import React, { useEffect, useState } from "react";
import Service from "../components/cards/Service";
import { getAllSalons, getLocations } from "../../actions/salon";
import { useDispatch, useSelector } from "react-redux";
import ServiceImage from "../images/salon-working-01.png";
import { Scrollbars } from "react-custom-scrollbars";
import SalonCategorySelectBut from "../components/Button/SalonCategorySelectBut";

export default function Home() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [selectLoc, setSelectLoc] = useState("");

  const { salons, salonLoading } = useSelector((state) => state.salon);
  const { locations, locationLoading } = useSelector((state) => state.location);

  useEffect(() => {
    dispatch(getAllSalons());
    dispatch(getLocations());
  }, []);

  return (
    <>
      <div className="md:h-full lg:h-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5 gap-5 mt-6">
        {/* <!--Card 1--> */}
        <div className="border-r border-gray-200 flex md:flex-col flex-row justify-center md:justify-start px-8">
          <div>
            {" "}
            <div className="flex flex-center flex-col">
              {/* This is an example component --> */}
              {/* <div className="pt-2 relative mx-auto text-gray-600">
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
              </div> */}
              <div className="relative inline-flex mt-4 w-full">
                <select
                  onChange={(e) => {
                    e.preventDefault();
                    setSelectLoc(e.target.value);
                  }}
                  className="border border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
                >
                  <option name="" value="">
                    {selectLoc === "" ? "Choose a Location" : "Remove Location"}
                  </option>
                  {!locationLoading &&
                    locations.map((loc) => (
                      <option name={loc.name} value={loc.name}>
                        {loc.name}
                      </option>
                    ))}
                </select>
              </div>
            </div>
          </div>
          <SalonCategorySelectBut content="Beauty" SalonName="" />
        </div>
        {/* <!--Card 2--> */}
        <div className="border-r border-gray-200 col-span-3	px-4">
          <div className="w-full">
            {" "}
            <SalonCategorySelectBut content="Beauty" SalonName="" />
          </div>
          <Scrollbars style={{ height: 500 }}>
            {!salonLoading &&
              salons
                .filter(
                  (salon) =>
                    salon.location
                      .toLowerCase()
                      .indexOf(selectLoc.toLowerCase()) >= 0
                )
                .map((salon) => <Service key={salon._id} salon={salon} />)}
          </Scrollbars>
        </div>
        <div className="border-r border-gray-200">
          <img alt="meaningfull" className="pt-44" src={ServiceImage} />
        </div>
      </div>
    </>
  );
}
