import React from "react";
import { TimePicker } from "antd";
import "antd/dist/antd.css";
import moment from "moment";

export default function AddingForm() {
  const format = "HH:mm";

  return (
    <div className="md:grid md:grid-cols-2 gap-4 md:py-12 py-8">
      <div className="md:px-12">
        <div className="w-full">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
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
                placeholder="Salon Name
                "
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
                <TimePicker
                  defaultValue={moment("00:00", format)}
                  format={format}
                />{" "}
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
                  <TimePicker
                    defaultValue={moment("00:00", format)}
                    format={format}
                  />{" "}
                </div>
              </div>
              <div className="ml-36">
                <label className="flex flex-col items-center px-2 py-3 bg-white rounded-md shadow-md tracking-wide uppercase border border-blue cursor-pointer hover:bg-purple-600 hover:text-white text-purple-600 ease-linear transition-all duration-150">
                  <i className="fas fa-cloud-upload-alt "></i>
                  <span className="mt-2 text-xs leading-normal">
                    Select a file
                  </span>
                  <input type="file" className="hidden" />
                </label>
              </div>
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
