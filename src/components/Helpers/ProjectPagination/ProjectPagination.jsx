import React from "react";
import ReactPaginate from "react-paginate";

import localStyles from './ProjectPagination.styl'

export const ProjectPagination = ({ handlePageClick, pageCount }) => {
  return (
    <ReactPaginate
      previousLabel={"prev"}
      nextLabel={"next"}
      breakLabel={"..."}
      breakClassName={"break-me"}
      pageCount={pageCount}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      onPageChange={handlePageClick}
      containerClassName={localStyles.pagination}
      subContainerClassName={"pages pagination"}
      activeClassName={localStyles.active}
      pageClassName={localStyles.paginationItem}
      previousClassName={localStyles.paginationItem}
      nextClassName={localStyles.paginationItem}
    />
  )
}
