import React from 'react';
import "./Pagination.css";

const Pagination = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className="pagination flex gap-[5px]" >
      {pageNumbers.map((number) => (
        <li key={number} className={` bg-gray-900 text-white rounded-sm  ${number === currentPage ? 'active' : ''} `}>
          <button className="py-[6px] px-[7px] rounded-sm " onClick={() => onPageChange(number)}>
            {number}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
 