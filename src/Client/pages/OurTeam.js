import React from "react";
import { Link } from "react-router-dom";

export default function OurTeam() {
  return (
    // <div id="ourTeam" className="text-gray-600 body-font bg-blue-50">
    //   <div className="container px-5 py-24 mx-auto">
    //     <div className="text-center mb-20">
    //       <h1 className="sm:text-3xl text-2xl font-medium title-font text-sitetheme-blue mb-4">
    //         Why eCrew ?{" "}
    //       </h1>

    //       <div className="flex mt-6 justify-center">
    //         <div className="w-16 h-1 rounded-full bg-sitetheme-blue inline-flex"></div>
    //       </div>
    //     </div>
    //     <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
    //       <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
    //         <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-sitetheme-blue mb-5 flex-shrink-0">
    //           <i class="fas fa-hand-holding-usd fa-2x"></i>
    //         </div>
    //         <div className="flex-grow">
    //           <h2 className="text-sitetheme-blue text-lg title-font font-medium mb-3">
    //             Transparent pricing{" "}
    //           </h2>
    //           <p className="leading-relaxed text-base">
    //             No hidden cost! What you see is what you spend.
    //           </p>
    //           <Link className="mt-3 text-sitetheme-blue inline-flex items-center">
    //             Learn More
    //             <svg
    //               fill="none"
    //               stroke="currentColor"
    //               stroke-linecap="round"
    //               stroke-linejoin="round"
    //               stroke-width="2"
    //               className="w-4 h-4 ml-2"
    //               viewBox="0 0 24 24"
    //             >
    //               <path d="M5 12h14M12 5l7 7-7 7"></path>
    //             </svg>
    //           </Link>
    //         </div>
    //       </div>
    //       <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
    //         <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-sitetheme-blue mb-5 flex-shrink-0">
    //           <i class="fas fa-user-tie fa-2x"></i>
    //         </div>
    //         <div className="flex-grow">
    //           <h2 className="text-sitetheme-blue text-lg title-font font-medium mb-3">
    //             Professionals Only{" "}
    //           </h2>
    //           <p className="leading-relaxed text-base">
    //             Experienced and well-trained professionals hand-picked just for
    //             you!
    //           </p>
    //           <Link className="mt-3 text-sitetheme-blue inline-flex items-center">
    //             Learn More
    //             <svg
    //               fill="none"
    //               stroke="currentColor"
    //               stroke-linecap="round"
    //               stroke-linejoin="round"
    //               stroke-width="2"
    //               className="w-4 h-4 ml-2"
    //               viewBox="0 0 24 24"
    //             >
    //               <path d="M5 12h14M12 5l7 7-7 7"></path>
    //             </svg>
    //           </Link>
    //         </div>
    //       </div>
    //       <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
    //         <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-sitetheme-blue mb-5 flex-shrink-0">
    //           <i class="fas fa-thumbs-up fa-2x"></i>
    //         </div>
    //         <div className="flex-grow">
    //           <h2 className="text-sitetheme-blue text-lg title-font font-medium mb-3">
    //             Trust Assured{" "}
    //           </h2>
    //           <p className="leading-relaxed text-base">
    //             Let’s handle your service needs with the best hands in the
    //             industry
    //           </p>
    //           <Link className="mt-3 text-sitetheme-blue inline-flex items-center">
    //             Learn More
    //             <svg
    //               fill="none"
    //               stroke="currentColor"
    //               stroke-linecap="round"
    //               stroke-linejoin="round"
    //               stroke-width="2"
    //               className="w-4 h-4 ml-2"
    //               viewBox="0 0 24 24"
    //             >
    //               <path d="M5 12h14M12 5l7 7-7 7"></path>
    //             </svg>
    //           </Link>
    //         </div>
    //       </div>
    //       <div className="p-4 md:w-1/2 flex flex-col text-center items-center">
    //         <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-sitetheme-blue mb-5 flex-shrink-0">
    //           <i class="fas fa-clock fa-2x"></i>
    //         </div>
    //         <div className="flex-grow">
    //           <h2 className="text-sitetheme-blue text-lg title-font font-medium mb-3">
    //             Better Time{" "}
    //           </h2>
    //           <p className="leading-relaxed text-base">
    //             Let’s handle your service needs with the best hands in the
    //             industry
    //           </p>
    //           <Link className="mt-3 text-sitetheme-blue inline-flex items-center">
    //             Learn More
    //             <svg
    //               fill="none"
    //               stroke="currentColor"
    //               stroke-linecap="round"
    //               stroke-linejoin="round"
    //               stroke-width="2"
    //               className="w-4 h-4 ml-2"
    //               viewBox="0 0 24 24"
    //             >
    //               <path d="M5 12h14M12 5l7 7-7 7"></path>
    //             </svg>
    //           </Link>
    //         </div>
    //       </div>
    //       <div className="p-4 md:w-1/2 flex flex-col text-center items-center">
    //         <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-sitetheme-blue mb-5 flex-shrink-0">
    //           <i class="fas fa-user-shield fa-2x"></i>
    //         </div>
    //         <div className="flex-grow">
    //           <h2 className="text-sitetheme-blue text-lg title-font font-medium mb-3">
    //             Safer{" "}
    //           </h2>
    //           <p className="leading-relaxed text-base">
    //             You can be confident that the services are conducted with proper
    //             safety regulations
    //           </p>
    //           <Link className="mt-3 text-sitetheme-blue inline-flex items-center">
    //             Learn More
    //             <svg
    //               fill="none"
    //               stroke="currentColor"
    //               stroke-linecap="round"
    //               stroke-linejoin="round"
    //               stroke-width="2"
    //               className="w-4 h-4 ml-2"
    //               viewBox="0 0 24 24"
    //             >
    //               <path d="M5 12h14M12 5l7 7-7 7"></path>
    //             </svg>
    //           </Link>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <>
      <main className="my-8">
        <div className="container mx-auto md:px-32">
          <div className="md:flex my-8 md:-mx-4 ">
            <div
              className="w-full h-64 md:mx-4 overflow-hidden bg-cover bg-center md:w-1/2"
              // style="background-image: url('https://images.unsplash.com/photo-1547949003-9792a18a2601?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80')"
              style={{
                backgroundImage: `url("https://images.unsplash.com/photo-1547949003-9792a18a2601?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80")`,
              }}
            >
              <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
                <div className="px-10 max-w-xl">
                  <h2 className="text-2xl text-white font-semibold">Safer </h2>
                  <p className="mt-2 text-gray-400">
                    You can be confident that the services are conducted with
                    proper // safety regulations
                  </p>
                  <Link
                    to="/Services"
                    className="flex items-center mt-4 text-white text-sm uppercase font-medium rounded focus:outline-none"
                  >
                    <span>View </span>
                    <svg
                      className="h-5 w-5 mx-2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="w-full h-64 mt-8 md:mx-4 overflow-hidden bg-cover bg-center md:mt-0 md:w-1/2"
              // style="background-image: url('https://images.unsplash.com/photo-1486401899868-0e435ed85128?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80')"
              style={{
                backgroundImage: `url("https://images.unsplash.com/photo-1486401899868-0e435ed85128?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80")`,
              }}
            >
              <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
                <div className="px-10 max-w-xl">
                  <h2 className="text-2xl text-white font-semibold">
                    Better Time{" "}
                  </h2>
                  <p className="mt-2 text-gray-400">
                    Let’s handle your service needs with the best hands in the
                    industry
                  </p>
                  <Link
                    to="/Projects"
                    className="flex items-center mt-4 text-white text-sm uppercase font-medium rounded focus:outline-none"
                  >
                    <span>View</span>
                    <svg
                      className="h-5 w-5 mx-2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className="h-64 overflow-hidden bg-cover bg-center"
            // style="background-image: url('https://images.unsplash.com/photo-1577655197620-704858b270ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1280&q=144')"
            style={{
              backgroundImage: `url("https://images.unsplash.com/photo-1577655197620-704858b270ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1280&q=144")`,
            }}
          >
            <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
              <div className="px-10 max-w-xl">
                <h2 className="text-2xl text-white font-semibold">
                  Trust Assured{" "}
                </h2>
                <p className="mt-2 text-gray-400">
                  Let’s handle your service needs with the best hands in the
                  industry
                </p>
                <Link
                  to="/Shop"
                  className="flex items-center mt-4 text-white text-sm uppercase font-medium rounded focus:outline-none"
                >
                  <span>View </span>
                  <svg
                    className="h-5 w-5 mx-2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="md:flex mt-8 md:-mx-4">
            <div
              className="w-full h-64 md:mx-4 overflow-hidden bg-cover bg-center md:w-1/2"
              // style="background-image: url('https://images.unsplash.com/photo-1547949003-9792a18a2601?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80')"
              style={{
                backgroundImage: `url("https://images.unsplash.com/photo-1547949003-9792a18a2601?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80")`,
              }}
            >
              <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
                <div className="px-10 max-w-xl">
                  <h2 className="text-2xl text-white font-semibold">
                    Professionals Only{" "}
                  </h2>
                  <p className="mt-2 text-gray-400">
                    Experienced and well-trained professionals hand-picked just
                    for // you!
                  </p>
                  <Link
                    to="/Services"
                    className="flex items-center mt-4 text-white text-sm uppercase font-medium rounded focus:outline-none"
                  >
                    <span>View </span>
                    <svg
                      className="h-5 w-5 mx-2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="w-full h-64 mt-8 md:mx-4 overflow-hidden bg-cover bg-center md:mt-0 md:w-1/2"
              // style="background-image: url('https://images.unsplash.com/photo-1486401899868-0e435ed85128?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80')"
              style={{
                backgroundImage: `url("https://images.unsplash.com/photo-1486401899868-0e435ed85128?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80")`,
              }}
            >
              <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
                <div className="px-10 max-w-xl">
                  <h2 className="text-2xl text-white font-semibold">
                    Transparent pricing{" "}
                  </h2>
                  <p className="mt-2 text-gray-400">
                    // No hidden cost! What you see is what you spend.
                  </p>
                  <Link
                    to="/Projects"
                    className="flex items-center mt-4 text-white text-sm uppercase font-medium rounded focus:outline-none"
                  >
                    <span>View</span>
                    <svg
                      className="h-5 w-5 mx-2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
