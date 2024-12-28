import React from "react";
import { FaAutoprefixer,FaCss3 } from "react-icons/fa";
import { BsBoxFill } from "react-icons/bs";
import { RiComputerLine } from "react-icons/ri";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";




const ServicesPage = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center m-10 p-3 gap-2  ">
        <h2 className="text-xl text-orange-700 font-medium">Our Services</h2>
        <h1 className="text-5xl font-bold ">What We Offer</h1>
        <p className="text-center md:w-[500px] text-lg ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi nam
          aliquid expedita ipsum nemo aspernatur, ipsa inventore hic
          consequuntur corporis! Ratione magnam quaerat natus veniam
          dignissimos, laborum sint quod ipsum, ullam impedit sapiente blanditii
        </p>
      </div>
      {/* service cards */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 m-12 ">
        <div className="p-9  rounded-3xl h-[300px] flex flex-col justify-center gap-5 shadow-2xl">
        <FaAutoprefixer className="text-blue-900 h-[50px] w-[50px]" />
          <h3 className="text-xl font-bold">Refreshing Design</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, in nihil dolorum placeat sunt odit. Blanditiis quasi dolore, suscipit incidunt aliquam odio dolor soluta magni iusto possimus. Voluptates, commodi. Vel?</p>
        </div>
        <div className="p-9  rounded-3xl h-[300px] flex flex-col justify-center gap-6 shadow-2xl">
        <FaCss3 className="text-blue-900 h-[50px] w-[50px]" />
          <h3 className="text-xl font-bold">Based on Taillwind CSS</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, in nihil dolorum placeat sunt odit. Blanditiis quasi dolore, suscipit incidunt aliquam odio dolor soluta magni iusto possimus. Voluptates, commodi. Vel?</p>
        </div>
        <div className="p-9  rounded-3xl h-[300px] flex flex-col justify-center gap-6 shadow-2xl">
        <BsBoxFill className="text-blue-900 h-[50px] w-[50px]" />
          <h3 className="text-xl font-bold">300+ Components</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, in nihil dolorum placeat sunt odit. Blanditiis quasi dolore, suscipit incidunt aliquam odio dolor soluta magni iusto possimus. Voluptates, commodi. Vel?</p>
        </div>
        <div className="p-9  rounded-3xl h-[300px] flex flex-col justify-center gap-6 shadow-2xl">
        <RiComputerLine className="text-blue-900 h-[50px] w-[50px]" />          <h3 className="text-xl font-bold">Speed optimized</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, in nihil dolorum placeat sunt odit. Blanditiis quasi dolore, suscipit incidunt aliquam odio dolor soluta magni iusto possimus. Voluptates, commodi. Vel?</p>
        </div>
        <div className="p-9  rounded-3xl h-[300px] flex flex-col justify-center gap-6 shadow-2xl">
        <MdOutlineDashboardCustomize className="text-blue-900 h-[50px] w-[50px]" />          <h3 className="text-xl font-bold">Fully Customizable</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, in nihil dolorum placeat sunt odit. Blanditiis quasi dolore, suscipit incidunt aliquam odio dolor soluta magni iusto possimus. Voluptates, commodi. Vel?</p>
        </div>
        <div className="p-9  rounded-3xl h-[300px] flex flex-col justify-center gap-6 shadow-2xl">
        <AiOutlineLike className="text-blue-900 h-[50px] w-[50px]" />          <h3 className="text-xl font-bold">Regular Updates</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, in nihil dolorum placeat sunt odit. Blanditiis quasi dolore, suscipit incidunt aliquam odio dolor soluta magni iusto possimus. Voluptates, commodi. Vel?</p>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
