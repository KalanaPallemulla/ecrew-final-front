import React, { useEffect, useState } from "react";
import Service from "../components/cards/Service";
import { getAllSalons } from "../../actions/salon";
import { useDispatch, useSelector } from "react-redux";
import ServiceImage from "../images/salon-working-01.png";
import { Scrollbars } from "react-custom-scrollbars";

export default function Home() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const { salons, salonLoading } = useSelector((state) => state.salon);

  useEffect(() => {
    dispatch(getAllSalons());
  }, []);

  return (
    <div>
      {" "}
      {/* <div className="relative bg-white overflow-hidden my-36">
        <div className="max-w-7xl mx-auto">
          <div className="relative lg:pt-12 z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Ecrew </span>{" "}
                  {/* <span className="block text-gray-600 xl:inline">
              Order Your dream Product{" "}
            </span> 
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  We make your dream design a reality...
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="">
                    <a
                      href="#"
                      className="w-full flex items-center justify-center px-8 py-3 text-base font-medium  text-white bg-gray-900 hover:bg-gray-700 md:py-2 md:text-lg md:px-5"
                    >
                      View Shop{" "}
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a
                      href="#"
                      className="w-full flex items-center justify-center px-8 py-3   text-base font-medium  text-gray-700 bg-gray-100 hover:bg-gray-200 md:py-2 md:text-lg md:px-5"
                    >
                      View Projects
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:mr-80">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
            alt=""
          />
        </div>
      </div> */}
      <>
        <div className="md:h-full lg:h-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5 gap-5 mt-6">
          {/* <!--Card 1--> */}
          <div className="border-r border-gray-200 flex md:flex-col flex-row justify-center md:justify-start px-8">
            sdfghjkjhgfbhj
          </div>
          {/* <!--Card 2--> */}
          <div className="border-r border-gray-200 col-span-3	px-4 sm:px-10 ">
            <Scrollbars style={{ height: 500 }}>
              {salons
                .filter(
                  (salon) =>
                    salon.name.toLowerCase().indexOf(search.toLowerCase()) >=
                      0 ||
                    salon.location
                      .toLowerCase()
                      .indexOf(search.toLowerCase()) >= 0
                )
                .map((salon) => (
                  <Service key={salon._id} salon={salon} />
                ))}
            </Scrollbars>
          </div>

          {/* <!--Card 3--> */}
          <div className="border-r border-gray-200">
            <img alt="meaningfull" className="pt-44" src={ServiceImage} />
          </div>
        </div>
      </>
    </div>
  );
}
