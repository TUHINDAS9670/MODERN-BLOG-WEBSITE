import React from "react";

const Modal = ({ isModalOpen, onClose }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${
        isModalOpen ? "" : "hidden"
      }`}
    >
      <div className="modal-container">
        <div className="bg-indigo-700 text-center p-5 h-96 lg:w-[400px] rounded-xl shadow-md ">
          {/* modal content */}
          <h2 className="text-xl font-semibold mb-4 mt-6t  uppercase">
            
            Please Login Here
          </h2>
          <form className="px-4">
            {/* email */}
            <div className="mb-7">
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="example@gmail.com"
                className="w-full rounded-md border-pink-200 bg-white py-3 px-6 text-justify font-medium text-fuchsia-500 "
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                id="password"
                required
                placeholder="Enter your Password"
                className="w-full rounded-md border-pink-200 bg-white py-3 px-6 text-justify font-medium text-fuchsia-500 "
              />
            </div>
            <div>
              <button className="hover:shadow-xl rounded-md bg-orange-400 hover:bg-white py-3 px-8 mt-8 font-semibold text-black outline-none text-xl ">Log In</button>
            </div>
          </form>
          <div>
            <button onClick={onClose} className="hover:shadow-xl rounded-md bg-gray-400 hover:bg-white py-3 px-8 mt-8 font-semibold text-black outline-none text-xl ">Close</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
