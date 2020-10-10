import React, { useState, useEffect } from "react";
import "./style.css";

const PagesPagination = ({ products = [], setPaginatedProducts }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const pageSize = 10;
  const pages = Math.ceil(products.length / pageSize);
  const pagify = start => {
    const paginatedProducts = products.slice(start, pageSize);
    setPaginatedProducts(paginatedProducts);
    setCurrentPage(start / pageSize);
  };

  useEffect(() => {
    pagify(currentPage);
  }, [products]);

  return (
    <>
      <nav aria-label="...">
        <ul class="pagination pagination-sm">
          {
            pages && new Array(pages).map((page, i) => (
              <li class={`page-item ${currentPage === i ? "active" : ""}`} aria-current="page">
                <button onClick={() => { pagify(pageSize * i) }} class="no-background no-border page-link">
                  {i + 1}
                  {
                    currentPage === i && <span class="sr-only">(current)</span>
                  }
                </button>
              </li>
            ))
          }
        </ul>
      </nav>
    </>

  )
}

export default PagesPagination;