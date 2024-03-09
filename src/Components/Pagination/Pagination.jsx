import React from 'react';
import "./Pagination.css";

const Pagination = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination flex gap-[5px] justify-center w-full items-center" >
      {pageNumbers.map((number) => (
        <div key={number} className={` bg-[var(--dark-foreground)] text-white rounded-sm  ${number === currentPage ? 'active' : ''} `}>
          <button className="py-[6px] px-7 rounded-sm " onClick={() => onPageChange(number)}>
            {number}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Pagination;
 