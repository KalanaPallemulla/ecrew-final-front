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
              <div className="">
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
      <div>9</div>
    </div>
  );
}
