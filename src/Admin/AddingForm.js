import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSalon } from "../actions/salon";
import { TimePicker } from "antd";
import "antd/dist/antd.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import moment from "moment";

export default function AddingForm() {
  const dispatch = useDispatch();

  const { addSalonSuc, error } = useSelector((state) => state.salon);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [contact, setContact] = useState("");

  const [openTime, setOpen] = useState("");
  const [closeTime, setClose] = useState("");
  const [wifi, setWifi] = useState(false);
  const [parking, setParking] = useState(false);
  const [ac, setAc] = useState(false);
  const [image, setImage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    let data = new FormData();
    data.append("name", name);
    data.append("location", location);
    data.append("contact", contact);
    data.append("openTime", openTime);
    data.append("closeTime", closeTime);
    data.append("parking", parking);
    data.append("ac", ac);
    data.append("wifi", wifi);

    image && data.append("image", image);

    // console.log(data);
    dispatch(addSalon(data));
  };

  const format = "HH:mm";

  useEffect(() => {
    if (error) {
      toast.error(error);
    } else if (addSalonSuc) {
      toast.success(addSalonSuc);
    }
  }, [error]);

  console.log("Image", parking);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {error && <h1 className="text-red-500 text-center">{error}</h1>}
      <div className="md:grid md:grid-cols-2 gap-4 md:py-12 py-8">
        <div className="md:px-12">
          <div className="w-full">
            <form
              className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
              onSubmit={handleSubmit}
            >
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  for="username"
                >
                  Salon Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Salon Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  for="username"
                >
                  Location
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  for="username"
                >
                  Contact No
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Contact no"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                />
              </div>

              <div className="mb-4 flex flex-row">
                <div>
                  {" "}
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    for="username"
                  >
                    open Time
                  </label>
                  <div className="container mx-auto">
                    <div className="inline-flex text-lg border rounded-md shadow-lg p-2">
                      <TimePicker
                        defaultValue={moment("00:00", format)}
                        format={format}
                        onChange={(time, timeString) => setOpen(timeString)}
                      />{" "}
                    </div>
                  </div>
                </div>

                <div className="md:pl-12">
                  {" "}
                  <div>
                    {" "}
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      for="username"
                    >
                      Closing Time
                    </label>
                    <div className="container mx-auto">
                      <div className="inline-flex text-lg border rounded-md shadow-lg p-2">
                        <TimePicker
                          defaultValue={moment("00:00", format)}
                          format={format}
                          onChange={(time, timeString) => setClose(timeString)}
                        />{" "}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="">
                  <label className="flex flex-col items-center px-2 py-3 bg-white rounded-md shadow-md tracking-wide uppercase border border-blue cursor-pointer hover:bg-purple-600 hover:text-white text-purple-600 ease-linear transition-all duration-150">
                    <i className="fas fa-cloud-upload-alt "></i>
                    <span className="mt-2 text-xs leading-normal">
                      Select a file
                    </span>
                    <input
                      type="file"
                      name="image"
                      accept="image/*"
                      hidden
                      onChange={(e) => setImage(e.target.files[0])}
                    />
                  </label>
                </div>
              </div>
              <div>
                <div className="md:grid md:grid-cols-4  text-gray-600 mb-2">
                  <div className="flex flex-row">
                    Parking{" "}
                    <div class="bg-white border-2 rounded border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-500 ml-2">
                      <input
                        type="checkbox"
                        class="opacity-0 absolute"
                        name="parking"
                        onChange={(e) => setParking(e.target.checked)}
                      />
                      <svg
                        class="fill-current hidden w-4 h-4 text-sitetheme-blue pointer-events-none"
                        viewBox="0 0 20 20"
                      >
                        <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex flex-row">
                    Wifi
                    <div class="bg-white border-2 rounded border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-500 ml-2">
                      <input
                        type="checkbox"
                        class="opacity-0 absolute"
                        name="wifi"
                        onChange={(e) => setWifi(e.target.checked)}
                      />
                      <svg
                        class="fill-current hidden w-4 h-4 text-sitetheme-blue pointer-events-none"
                        viewBox="0 0 20 20"
                      >
                        <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                      </svg>
                    </div>{" "}
                  </div>

                  <div className="flex flex-row">
                    A/C{" "}
                    <div class="bg-white border-2 rounded border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-500 ml-2">
                      <input
                        type="checkbox"
                        class="opacity-0 absolute"
                        name="ac"
                        onChange={(e) => setAc(e.target.checked)}
                      />
                      <svg
                        class="fill-current hidden w-4 h-4 text-sitetheme-blue pointer-events-none"
                        viewBox="0 0 20 20"
                      >
                        <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <button className="py-2 px-4 border border-gray-400 text-black rounded-lg">
                  Submit
                </button>
              </div>
            </form>

            <div>Add Locations</div>
            <form>
              <input
                className="w-48 border border-gray-600 rounded-full p-2"
                placeholder="Add a location"
              />
              <button className="ml-4 p-2 border border-blue-700 hover:bg-blue-700 hover:text-white rounded-full">
                Add Location
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
