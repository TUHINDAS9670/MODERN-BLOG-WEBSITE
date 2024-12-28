import React, { useEffect, useState } from 'react'
import BlogCard from './BlogCard';
import Pagination from './Pagination';
import CategorySelection from './CategorySelection';
import Sidebar from './Sidebar';

const BlogPage = () => {
  const [blogs,setBlogs]=new useState([]);
  //usestate for pagination part
  const[currentPage,setCurrentPage]=useState(1);
  const blogsPerPage=12//blogs per page
  const[selectedCategory,setSelectedCategory]=useState(null)
  const [activeCategory,setActiveCategory]=useState(null)

  useEffect(()=>{
    async function fetchBlogs(){
      const url=`http://localhost:5000/blogs?page=${currentPage}&limit=${blogsPerPage}`;
      //filter by category
      if(selectedCategory){
        url+=`&category=${selectedCategory}`;
      }

      const response =await fetch(url);
      const data=await response.json();
      console.log(data);
      
      setBlogs(data);
    }
    fetchBlogs();

  },[currentPage,blogsPerPage,selectedCategory])
//page changing btn
  const handlePageChange=(blogsPerPage)=>{
    setCurrentPage(blogsPerPage)
  }

  const handleCategoryChange=(category)=>{
    setSelectedCategory(category);
    setCurrentPage(1);
    setActiveCategory(category);
  }
  return (
    <div className=' flex flex-col space-y-10 pb-9'>
      {/* category section */}
      <div><CategorySelection onSelectCategory={handleCategoryChange} selectedCategory={selectedCategory} activeCategory={activeCategory}/></div>
      {/* blog */}
      <div className='flex flex-col lg:flex-row  gap-12'>
          <BlogCard blogs={blogs} currentPage={currentPage} selectedCategory={selectedCategory} blogsPerPage={blogsPerPage} />
        {/* side bar section */}
        <div>
        <Sidebar/>
        </div>
        </div>
      {/* pagination section */}
      <div><Pagination currentPage=
      {currentPage} onPageChange={handlePageChange} blogs={blogs} blogsPerPage={blogsPerPage} /></div>
    </div>
  )
}

export default BlogPage