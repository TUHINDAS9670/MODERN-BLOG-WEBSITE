import React from "react";

const Pagination = ({ onPageChange, blogs, blogsPerPage, currentPage }) => {
  const totalPages = Math.ceil(blogs.length / blogsPerPage);
  const renderPaginationLinks = () => {
    return Array.from({ length: totalPages }, (_,index) => index + 1).map(
      (pageNumber) => (
        <li
          className={pageNumber === currentPage ? "activePagination" : ""}
          key={pageNumber}
        >
          <a href="#" onClick={() => onPageChange(pageNumber)}>
            {pageNumber}
          </a>
        </li>
      )
    );
  };

  return <ul className="pagination flex-wrap gap-4">
    <li>
      <button onClick={()=>onPageChange(currentPage-1)} disabled={currentPage===1}>PREVIOUS</button>
    </li>
    <div className="flex gap-3 ">{renderPaginationLinks()}</div>
    <li>
    <button onClick={()=>onPageChange(currentPage+1)} disabled={currentPage===totalPages}>NEXT</button>

    </li>
  </ul>;
};

export default Pagination;
