// Pagination.jsx
import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const getPages = () => {
    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - 1 && i <= currentPage + 1)
      ) {
        pages.push(i);
      } else if (i === currentPage - 2 || i === currentPage + 2) {
        // pages.push("...");
      }
    }

    return [...new Set(pages)];
  };

  return (
    <div className="flex items-center gap-2">
      {/* Prev */}
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="px-3 py-1.5 rounded-lg bg-gray-200 text-gray-500 disabled:opacity-50"
      >
        &lt;
      </button>

      {/* Pages */}
      {getPages().map((page, index) => (
        <button
          key={index}
          onClick={() => typeof page === "number" && onPageChange(page)}
          disabled={page === "..."}
          className={`px-4 py-2 rounded-lg text-sm ${
            page === currentPage
              ? "bg-[#094C9F] text-white"
              : page === "..."
              ? "cursor-default bg-transparent"
              : "bg-[#E9F3FF] text-blue-800 hover:bg-blue-200"
          }`}
        >
          {page}
        </button>
      ))}

      {/* Next */}
      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="px-3 py-1.5 rounded-lg bg-gray-200 text-gray-500 disabled:opacity-50"
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
