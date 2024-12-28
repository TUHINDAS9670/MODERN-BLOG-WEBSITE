import React from 'react'
import BlogPage from '../components/BlogPage'

const Blogs = () => {
  return (
   <div>
     <div className='py-40 text-center bg-gray-700 px-4'>
      <h1 className="text-5xl lg:text-7xl font-bold mb-5">Welcome to Our Blog</h1>
    </div>
    {/* all blogs container */}
    <div className='max-w-7xl mx-auto'>
    <BlogPage/>
    </div>
   </div>

  )
}

export default Blogs