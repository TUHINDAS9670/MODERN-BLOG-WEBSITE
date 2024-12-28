import React, { useState } from "react";
import "../App.css";
import { NavLink } from "react-router";
// react icons
import { FaBars, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdMenuOpen } from "react-icons/md";
import Modal from'./Modal'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  //usestate for loginmodal
  const[isModalOpen,setIsModalOpen]=useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const navItems = [
    { path: "/", link: "Home" },
    { path: "/blogs", link: "Blogs" },
    { path: "/contactus", link: "ContactUs" },
    { path: "/about", link: "About" },
    { path: "/services", link: "Services" },
  
  ];
  const openModal=()=>{
    setIsModalOpen(true);
  }
  const closeModal=()=>{
    setIsModalOpen(false);
  }
  return (
    <header className="bg-black text-white fixed top-0 left-0 right-0 ">
      <nav className="px-4 py-4 max-w-7xl mx-auto flex justify-between items-center">
        <a href="/" className="text-4xl font-bold text-white">
          BLOG<span className="text-orange-500">TD</span>
        </a>
        {/* nav items for lg devices */}
        <ul className="md:flex gap-10 text-lg hidden">
          {navItems.map(({ path, link }) => (
            <li className="text-white" key={path}>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}//when items is in activestatesetcssof active classname which is defined at app.css
                to={path}
              >
                {link}
              </NavLink>
            </li>
          ))}
        </ul>
        {/* Menu icons */}
        <div className="text-white lg:flex gap-4 items-center hidden">
          <a className="hover:text-orange-500 cursor-pointer">
            <FaFacebook className="h-6 w-6" />
          </a>
          <a className="hover:text-orange-500 cursor-pointer ">
            <FaInstagram className="h-6 w-6" />
          </a>
          <a className="hover:text-orange-500 cursor-pointer ">
            <FaLinkedin className="h-6 w-6" />
          </a>
          <button onClick={openModal} className="text-black bg-orange-500 font-semibold rounded-lg px-6 py-2 hover:bg-slate-50 transition-all duration-150 ease-in">
            Log In
          </button>
        </div>
        {/* Modal component is here */}
        <Modal isModalOpen={isModalOpen} onClose={closeModal}/>

        {/* mobile menu btn , diplay in mobile screen */}
        <div className="md:hidden ">
          <button onClick={toggleMenu} className="text-white">
            {isMenuOpen ? (
              <MdMenuOpen className="w-7 h-8 " />
            ) : (
              <FaBars className="w-7 h-8" />
            )}
          </button>
        </div>
      </nav>
      {/* menu items only for mobile view */}
      <div>
        <ul
          className={`md:hidden gap-10 text-lg block space-y-4 px-4 py-6 mt-14 bg-white w-full ${
            isMenuOpen
              ? "fixed top-4 transition-all ease-out duration-150"
              : "hidden"
          }`}
        >
          {navItems.map(({ path, link }) => (
            <li className="text-black" key={path}>
              <NavLink
                onClick={toggleMenu} //it means first we open menu then ismenu is become true after click anyy items of menu it will ismenu will be false and menu is off automaticaly as ismenu is set to false now
                to={path}
              >
                {link}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
