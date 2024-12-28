import React from "react";
import pic from "../assets/pic.jpg";
import first from "../assets/1st.jpg";
import second from "../assets/2nd.jpg";
import third from "../assets/3rd.jpg"
import fourth from "../assets/4th.jpg"
import { RiArticleLine } from "react-icons/ri";


const AboutPage = () => {
  return (
    <div className="flex flex-col m-10 p-20 gap-8  ">
      {/* upper portion */}
      <div className="flex justify-center md:flex-row flex-col items-center">
        {/* img */}
        <div className="w-[550px] h-[300px] mb-9">
          <img src={pic} alt="" />
        </div>
        <div className="flex flex-col gap-4 w-[500px]">
          <h2 className="font-bold text-orange-500 text-xl">Who We are</h2>
          <h3 className="font-bold text-4xl w-[500px] ">
            We Provide high quality Artcles & blogs
          </h3>
          <div className="text-lg w-[800px]">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro
              perspiciatis quisquam sapiente harum vitae, a ducimus deserunt.
              Officia consequatur quibusdam velit incidunt, unde cumque
              accusantium debitis veniam id odit autem tenetur magnam sit vero
              dolore sapiente officiis, at architecto earum, consectetur ex.
              Quaerat molestias rem iure modi impedit fugit labore.
            </p>
            <br />
            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
              esse minima similique praesentium quidem ut doloremque illum est
              iure assumenda.
            </p>
          </div>
        </div>
      </div>
      {/* lower portion */}
      <div>
        <h2 className="text-4xl font-bold ml-[100px] mt-10  overflow-hidden">
          Top Authors
        </h2>
      </div>
      {/* authors profile */}
      <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 pl-24 pt-6 border-t-2">
        <div className="flex flex-col justify-center items-center bg-slate-100  w-[210px] rounded-md gap-2  hover:bg-slate-200 cursor-pointer  transition-all duration-300  ">
          <img
            className="w-[120px] h-[120px] rounded-full "
            src={first}
            alt=""
          />
          <h2 className="font-medium">Adrio Devid</h2>
          <h4>Director of Operations</h4>
          <p><RiArticleLine className="inline mr-2 w-6 h-5 mb-1"/>12 article published</p>
        </div>
        <div className="flex flex-col justify-center items-center bg-slate-100 h-[250px] w-[210px] rounded-md gap-1 hover:bg-slate-200 cursor-pointer  transition-all duration-300">
          <img
            className="w-[120px] h-[120px] rounded-full "
            src={second}
            alt=""
          />
          <h2 className="font-medium">Devid Tac</h2>
          <h4>Content Writer</h4>
          <p><RiArticleLine className="inline mr-2 w-6 h-5 mb-1"/>5 article published</p>
        </div>
        <div className="flex flex-col justify-center items-center bg-slate-100 h-[250px] w-[210px] rounded-md gap-1 hover:bg-slate-200 cursor-pointer  transition-all duration-300 ">
          <img   
            className="w-[120px] h-[120px] rounded-full "
            src={third}
            alt=""
          />
          <h2 className="font-medium">Rayna Mario</h2>
          <h4>Head Of Marketing</h4>
          <p><RiArticleLine className="inline mr-2 w-6 h-5 mb-1"/>8 article published</p>
        </div>
        <div className="flex flex-col justify-center items-center bg-slate-100 h-[250px] w-[210px] rounded-md gap-1 hover:bg-slate-200 cursor-pointer  transition-all duration-300 ">
          <img
            className="w-[120px] h-[120px] rounded-full "
            src={fourth}
            alt=""
          />
          <h2 className="font-medium">Mark Jacob</h2>
          <h4>Head Of Marketing</h4>
          <p><RiArticleLine className="inline mr-2 w-6 h-5 mb-1"/>5 article published</p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
