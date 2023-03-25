import React from 'react';

function Pagination({ totalItems, pageSize, currentPage, onPageChange }) {
  const totalPages = Math.ceil(totalItems / pageSize);

  if (totalPages === 1) return null;

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <>
        <div className="card-filiere-pagination">
            <ul className="pagination">
                {pages.map((page) => (
                <li key={page} className={page === currentPage ? 'page-item active' : 'page-item'}>
                    <button className="page-link" onClick={() => onPageChange(page)}>
                    {page}
                    </button>
                </li>
                ))}
            </ul>
        </div>
    </>
    
  );
}

export default Pagination;
