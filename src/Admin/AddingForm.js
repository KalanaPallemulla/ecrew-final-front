import React from "react";

export default function AddingForm() {
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
                placeholder="                Salon Name
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
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="                open Time
                "
              >
                open Time
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="                open Time
                "
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="username"
              >
                Closing Time
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="                Closing Time
                "
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
                    <select
                      name=""
                      id=""
                      className="px-2 outline-none appearance-none bg-transparent"
                    >
                      <option value="01">01</option>
                      <option value="02">02</option>
                      <option value="02">03</option>
                    </select>
                    <span className="px-2">:</span>
                    <select
                      name=""
                      id=""
                      className="px-2 outline-none appearance-none bg-transparent"
                    >
                      <option value="00">00</option>
                      <option value="01">01</option>
                    </select>
                    <select
                      name=""
                      id=""
                      className="px-2 outline-none appearance-none bg-transparent"
                    >
                      <option value="AM">AM</option>
                      <option value="PM">PM</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="md:pl-12">
                {" "}
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  for="username"
                >
                  Closing Time
                </label>
                <div className="container mx-auto">
                  <div className="inline-flex text-lg border rounded-md shadow-lg p-2">
                    <select
                      name=""
                      id=""
                      className="px-2 outline-none appearance-none bg-transparent"
                    >
                      <option value="01">01</option>
                      <option value="02">02</option>
                      <option value="02">03</option>
                    </select>
                    <span className="px-2">:</span>
                    <select
                      name=""
                      id=""
                      className="px-2 outline-none appearance-none bg-transparent"
                    >
                      <option value="00">00</option>
                      <option value="01">01</option>
                    </select>
                    <select
                      name=""
                      id=""
                      className="px-2 outline-none appearance-none bg-transparent"
                    >
                      <option value="AM">AM</option>
                      <option value="PM">PM</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div>9</div>
    </div>
  );
}
