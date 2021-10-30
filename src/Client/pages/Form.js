import React from "react";

export default function Form() {
  return (
    <div>
      <div className="font-mono py-4">
        <div className="container mx-auto">
          <div className="flex justify-center px-6 my-12">
            <div className="w-full xl:w-3/4 lg:w-11/12 flex">
              <div
                className="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
                // style="background-image: url('https://source.unsplash.com/Mv9hjnEUHR4/600x800')"
              ></div>
              <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
                <h3 className="pt-4 text-2xl text-center">Form Topic </h3>
                <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                  <div className="mb-4 md:mr-2 ">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      for="firstName"
                    >
                      Full Name{" "}
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="firstName"
                      type="text"
                      placeholder="Full Name"
                    />
                  </div>

                  <div className="mb-4 md:mr-2 ">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      for="firstName"
                    >
                      Location{" "}
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="firstName"
                      type="text"
                      placeholder="Location"
                    />
                  </div>

                  <div className="mb-4 md:mr-2 ">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      for="firstName"
                    >
                      Contact Number{" "}
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="firstName"
                      type="text"
                      placeholder="Contact Number "
                    />
                  </div>

                  <div className="mb-4 md:mr-2 ">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      for="firstName"
                    >
                      Description{" "}
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="firstName"
                      type="text"
                      placeholder="Description"
                    />
                  </div>

                  <div className="mb-6 text-center">
                    <button
                      className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                      type="button"
                    >
                      button title{" "}
                    </button>
                  </div>
                  <hr className="mb-6 border-t" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

//name location contact number decription
