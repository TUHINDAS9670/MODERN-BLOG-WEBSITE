import React, { useEffect, useState } from "react";
import { MdReadMore } from "react-icons/md";

import { Link } from "react-router";

const Sidebar = () => {
  const [popularBlogs, setPopularBlogs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/blogs")
      .then((res) => res.json())
      .then((data) => setPopularBlogs(data.slice(0, 15)));
  }, []);
  return (
    <div>
      <div>
        <h3 className="text-2xl font-bold text-center mb-6 border-b-2 pb-2">Popular Blogs</h3>
        <div className="space-y-7 text-black font-semibold">
          {//slice is used to show inly 5 to 12 blogs id from populars blogs array if we (0,1)then only 1st blog will be shown
            popularBlogs.slice(5,14).map(blog=> <div key={blog.id} className=" border-b-2">
              <h4>{blog.title}</h4>
              <Link to="/" className="text-orange-900 font-medium hover:text-orange-500 mt-1 text-lg mb-3 inline-flex">Read More<MdReadMore className="h-6 w-7 ml-1"/></Link></div>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
