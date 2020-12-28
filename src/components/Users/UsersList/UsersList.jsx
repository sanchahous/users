import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import ReactPaginate from 'react-paginate';

import {UsersListView} from "./UsersListView";
import {usersHeadTitles} from "./UserListStatic";
import {usersListActions} from "../../../_actions";

import tableStyles from "../../../_styles/table.styl";
import {NavLink} from "react-router-dom";
import {InputFilter} from "../../Helpers/InputFilter/InputFilter";

export const UsersList = () => {
  const dispatch = useDispatch();
  const usersListData = useSelector(state => state.usersList.list);

  const [searchResult, setSearchResult] = useState({})

  const [offset, setOffset] = useState(1);
  const [perPage] = useState(5);
  const [pageCount, setPageCount] = useState(0)

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset( selectedPage + 1 )
  };

  console.log('offset', offset)

  useEffect(() => {
    dispatch(usersListActions.getList(null, null));
  }, [dispatch])

  useEffect(() => {
    setPageCount(Math.ceil(usersListData.length / perPage));
  }, [offset, usersListData])

  /* Search filter actions */
  const handleSearchChange = (e) => {
    if(e && e.target) {
      const name = e.target.name;
      const value = e.target.value;

      setSearchResult({
        ...searchResult,
        [`${name}`]: value
      })
    }
  };

  const handleSearchSubmit = () => {
    const paginationData = {
      _page: 1,
      _limit: 5,
    }
    dispatch(usersListActions.getList(searchResult, paginationData));
  }
  /* -/Search filter actions */
  /* Preparing data for transfer layouts into view component  */
  const slice = usersListData.slice((offset - 1) * perPage, offset * perPage);

  console.log('usersListData', usersListData);
  console.log('slice', slice);

  const usersListLayout = slice.map(userItem => {
    const {id, firstName, lastName, email, phone, dateOfBirth} = userItem;
    return (
      <tr className={tableStyles.tableRow} key={email}>
        <td
          data-label={firstName}
          className={tableStyles.tableCol}
        >{firstName}</td>
        <td
          data-label={lastName}
          className={tableStyles.tableCol}
        >{lastName}</td>
        <td
          data-label={email}
          className={tableStyles.tableCol}
        >{email}</td>
        <td
          data-label={phone}
          className={tableStyles.tableCol}
        >{phone}</td>
        <td
          data-label={dateOfBirth}
          className={tableStyles.tableCol}
        >{dateOfBirth}</td>
        <td>
          <NavLink to={`/users/update/${id}`} >
            Update {lastName} info
          </NavLink>
        </td>
      </tr>
    )
  });

  const usersHeadLayout = usersHeadTitles.map(userHeadTitle => {
    const {key, value} = userHeadTitle
    return (
      <th className={tableStyles.tableHeadCol}>
        <div>{value}</div>
        <InputFilter
          handleChange={handleSearchChange}
          handleSubmit={handleSearchSubmit}
          searchResult={searchResult}
          name={key}
        />
      </th>
    )
  });
  /* -/Preparing data for transfer layouts into view component  */

  return (
    <>
      { usersListData ? (
        <div>
          <UsersListView
            usersListLayout={usersListLayout}
            usersHeadLayout={usersHeadLayout}
          />
          <ReactPaginate
            previousLabel={"prev"}
            nextLabel={"next"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}/>
        </div>

        ) : (
          <div>empty</div>
        )
      }
    </>


  );
}
