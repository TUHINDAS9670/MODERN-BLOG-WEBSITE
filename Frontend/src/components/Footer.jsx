import React from "react";
import { FaBars, FaFacebook, FaInstagram, FaLinkedin,FaCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-900">
      <div className="px-4 pt-16 mx-auto  sm:mx-w-xl md:w-full lg:max-w-screen-xl md:px-24 lg:px-4">
        <div className="grid mb-8 lg:grid-cols-3  ">
          {/* <div className="grid grid-cols-2 gap-5 lg:col-span-3 md:grid-cols-5 font-semibold"> */}
          <div className="flex flex-col justify-between lg:col-span-3 lg:flex-row font-semibold">
            {/* category 1 */}
            <div>
              <p className="font-medium text-gray-300  text-2xl ">Category</p>
              <ul>
                <li>
                  <a
                    href="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-600"
                  >
                    News
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-600"
                  >
                    World
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-600"
                  >
                    Games
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-600"
                  >
                    References
                  </a>
                </li>
              </ul>
            </div>
            {/* category 2 */}
            <div>
              <p className="font-medium text-gray-300  text-2xl ">Apples</p>
              <ul>
                <li>
                  <a
                    href="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-600"
                  >
                    Web
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-600"
                  >
                    eCommerece
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-600"
                  >
                    Business
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-600"
                  >
                    Entertainment
                  </a>
                </li>
              </ul>
            </div>
            {/* category 3 */}
            <div>
              <p className="font-medium text-gray-300  text-2xl ">Cherry</p>
              <ul>
                <li>
                  <a
                    href="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-600"
                  >
                    Media
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-600"
                  >
                    Nonprofit
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-600"
                  >
                    Education
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-600"
                  >
                    Projects
                  </a>
                </li>
              </ul>
            </div>

            {/* category 4 */}
            <div>
              <p className="font-medium text-gray-300  text-2xl ">Business</p>
              <ul>
                <li>
                  <a
                    href="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-600"
                  >
                    Infopreneur
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-600"
                  >
                    Personal
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-600"
                  >
                    Wiki
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-600"
                  >
                    Fprum
                  </a>
                </li>
              </ul>
            </div>
            {/*Subscription*/}
            <div className="md:max-w-lg lg:col-span-5 lg:mt-0 mt-5">
              <p className="font-medium text-gray-300  text-2xl ">
                Subscribe for updates
              </p>
              <form className="mt-4 flex flex-col md:flex-row">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-md md:mr-2 md:mb-0 focus:border-purple-400 focus:outline-none "
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center h-12 px-6 font-medium text-white transition duration-200 rounded shadow-md bg-orange-500 focus:outline-none border hover:bg-orange-600"
                >
                  Subscribe
                </button>
              </form>
              <p className="mt-4 text-sm text-gray-500">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
                similique fugiat cum amet delectus corporis repellendus quo
                animi? Eius unde, atque assumenda quam est reiciendis minima rem
                dolorum porro autem, hic molestiae id similique. Tempora
                delectus, rerum velit non, amet quia voluptatibus quos totam
                laboriosam, consequuntur dolorem excepturi. Harum quis dolores
                consequuntur, autem atque sint iusto voluptatum perspiciatis
                pariatur illum dolor facilis aliquid possimus doloremque?
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center pb-3">
          <div className="inline-flex gap-5">
            <p className="text-xl text-blue-300">Join us -Get Social !</p>
            <a
              href="/"
              className="text-gray-300 transition-all duration-200 hover:text-orange-500"
            >
              <FaFacebook className="h-6 w-6" />
            </a>
            <a
              href="/"
              className="text-gray-300 transition-all duration-200 hover:text-orange-500"
            >
              <FaInstagram className="h-6 w-6" />
            </a>
            <a
              href="/"
              className="text-gray-300 transition-all duration-200 hover:text-orange-500"
            >
              <FaLinkedin className="h-6 w-6" />
            </a>
          </div>
          
        </div>
       
      </div>
      <div className="bg-stone-900 justify-center gap-[300px] p-3 center flex cursor-default">
        <p className="text-zinc-200 font-semibold text-lg">Website by <span className="font-bold text-xl">Tuhin</span></p>
           
            <p className="text-orange-200 font-semibold text-lg inline-flex">
            <span><FaCopyright className="text-orange-200 h-5 w-5 mt-1.5 mr-2"/></span>
              Copyright 2024 | All right reserved.
            </p>
          </div>
    </div>
  );
};

export default Footer;
