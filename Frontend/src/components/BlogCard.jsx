import React from 'react'
import {Link } from 'react-router-dom'
import { FaPenToSquare } from "react-icons/fa6";

const BlogCard = ({blogs,currentPage,selectedCategory,blogsPerPage}) => {
  const filteredBlogs=blogs.filter((blogs)=>!selectedCategory || blogs.category ===selectedCategory ).slice((currentPage-1)*blogsPerPage,currentPage*blogsPerPage);

  return (
    <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6'>
      {
        filteredBlogs.map((blog)=>
        <Link to={`/blogs/${blog.id}`} key={blog.id} className='p-5 shadow-lg shadow-gray-500 rounded-xl bg-slate-100'>
        <div >
          <img src={blog.image} alt="" />
        </div>
        <h3 className='mt-4 mb-3 font-bold hover:text-blue-600'>{blog.title}</h3>
        <p className='mb-1 inline-flex gap-1 cursor-default text-gray-600'>-<FaPenToSquare className='mt-1' />{blog.author}</p>
        <p className=' text-gray-800-600 cursor-default'>Published: {blog.published_date}</p>
        </Link>
        )
      }
    </div>
  )
}

export default BlogCard