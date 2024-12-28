import React from "react";
import { TbExternalLink } from "react-icons/tb";

import { Link } from "react-router";

const Banner = () => {
  return (
    <div className="px-4 py-32 bg-gray-700 mx-auto w-full ">
      <div className="text-center">
        <h1 className="text-5xl lg:text-7xl font-bold mb-5">Welcome to Our Blog</h1>
        <p className="text-gray-100 lg:w-4/5 mx-auto mb-5 font-sans">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur obcaecati reiciendis nobis in eveniet praesentium repellendus ipsam at laboriosam exercitationem deserunt doloribus, corrupti, officiis dolorum veritatis neque cupiditate! Fugit id aliquid quasi perspiciatis ab! Earum quaerat placeat, molestiae ab ipsa, dignissimos et voluptate nobis mollitia officiis, maxime id ipsum tempore qui sit eum dolorum harum sed consequuntur. Consequuntur illo voluptatibus autem. Accusantium animi quibusdam ab.</p>
        <div><Link to="/" className="text-gray-200 font-medium hover:text-orange-500 inline-flex">Learn More<TbExternalLink className="h-6 ml-1"/></Link></div>
      </div>
    </div>
  );
};

export default Banner;
