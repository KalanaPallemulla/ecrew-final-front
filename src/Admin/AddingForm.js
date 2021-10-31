import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addSalon } from "../actions/salon";
import { TimePicker } from "antd";
import "antd/dist/antd.css";
import moment from "moment";

export default function AddingForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [contact, setContact] = useState("");

  const [open, setOpen] = useState("");
  const [close, setClose] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = new FormData();
    data.append("name", name);
    data.append("location", location);
    data.append("contact", contact);
    // image && addData.append("image", image);

    dispatch(addSalon(data));
  };

  const format = "HH:mm";

  return (
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
                      />{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div className="ml-36 mt-4">
                <label className="flex flex-col items-center px-2 py-3 bg-white rounded-md shadow-md tracking-wide uppercase border border-blue cursor-pointer hover:bg-purple-600 hover:text-white text-purple-600 ease-linear transition-all duration-150">
                  <i className="fas fa-cloud-upload-alt "></i>
                  <span className="mt-2 text-xs leading-normal">
                    Select a file
                  </span>
                  <input type="file" className="hidden" />
                </label>
              </div>
            </div>
            <div className="md:grid md:grid-cols-4  text-gray-600 mb-2">
              <div className="flex flex-row">
                Parking{" "}
                <div class="bg-white border-2 rounded border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-500 ml-2">
                  <input type="checkbox" class="opacity-0 absolute" />
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
                  <input type="checkbox" class="opacity-0 absolute" />
                  <svg
                    class="fill-current hidden w-4 h-4 text-sitetheme-blue pointer-events-none"
                    viewBox="0 0 20 20"
                  >
                    <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                  </svg>
                </div>{" "}
              </div>
              <div className="flex flex-row">
                Flexible Service
                <div class="bg-white border-2 rounded border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-500 ml-2">
                  <input type="checkbox" class="opacity-0 absolute" />
                  <svg
                    class="fill-current hidden w-4 h-4 text-sitetheme-blue pointer-events-none"
                    viewBox="0 0 20 20"
                  >
                    <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                  </svg>
                </div>
              </div>
              <div className="flex flex-row">
                Washrooms{" "}
                <div class="bg-white border-2 rounded border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-500 ml-2">
                  <input type="checkbox" class="opacity-0 absolute" />
                  <svg
                    class="fill-current hidden w-4 h-4 text-sitetheme-blue pointer-events-none"
                    viewBox="0 0 20 20"
                  >
                    <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                  </svg>
                </div>
              </div>
            </div>
            <div>
              <button className="py-2 px-4 border border-gray-400 text-black rounded-lg">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="px-4">
        <table className="table-auto">
          <thead>
            <tr>
              <th className="w-1/4 px-2">Name</th>
              <th className="w-1/4 px-2">Image</th>
              <th className="w-1/4 px-2">Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t ">
              <td className="p-2">Intro to CSS</td>
              <td className="p-2">Adam</td>
              <td className="p-2">
                <button class="bg-transparent hover:bg-red-500 text-red-700  hover:text-white py-1 px-2 border border-red-500 hover:border-transparent rounded">
                  Button
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
