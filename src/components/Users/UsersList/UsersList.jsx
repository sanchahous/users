import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {UsersListView} from "./UsersListView";

import {ITEMS_PER_PAGE, usersHeadTitles} from "./UserListStatic";
import {usersListActions} from "../../../_actions";

import tableStyles from "../../../_styles/table.styl";
import {NavLink} from "react-router-dom";
import {InputFilter} from "../../Helpers/InputFilter/InputFilter";
import {ProjectPagination} from "../../Helpers/ProjectPagination/ProjectPagination";

export const UsersList = () => {
  const dispatch = useDispatch();
  const usersListData = useSelector(state => state.usersList?.list);

  const perPage = ITEMS_PER_PAGE;
  const [pageCount, setPageCount] = useState(0)
  const [offset, setOffset] = useState(1);
  const [searchResult, setSearchResult] = useState({})

  useEffect(() => {
    dispatch(usersListActions.getList());
  }, [dispatch])

  useEffect(() => {
    setPageCount(Math.ceil(usersListData.length / perPage));
  }, [offset, usersListData])

  /**
   *
   * @param {object} selected - current selected page
   */
  const handlePageClick = (event) => {
    const selectedPage = event.selected;
    setOffset( selectedPage + 1 )
  };

  /* Search filter action */
  const handleSearchChange = (e) => {
    if(e && e.target) {
      const name = e.target.name;
      const value = '' + e.target.value; //stringify target value

      /**
       * @Param {Object} set in state & collect result of searching
       */
      setSearchResult({
        ...searchResult,
        [`${name}`]: value
      })
    }
  };

  /**
   * @Param {Object} searchResult
   */
  const handleSearchSubmit = () => {
    dispatch(usersListActions.getList(searchResult));
  }

  /**
   * @param paginatedUsersList Sliced & paginated array of objects
   * sliced by formula: (offset - 1 * perPage), offset * perPage
   */
  const paginatedUsersList = usersListData.slice(((offset - 1) * perPage), offset * perPage);

  /* Preparing layouts for transfer into view component  */
  const usersListLayout = paginatedUsersList.map(userItem => {
    const {id, firstName, lastName, email, phone, dateOfBirth} = userItem;
    return (
      <tr className={tableStyles.usersTableRow} key={email}>
        <td
          data-label={firstName}
          className={tableStyles.usersTableCol}
        >{firstName}</td>
        <td
          data-label={lastName}
          className={tableStyles.usersTableCol}
        >{lastName}</td>
        <td
          data-label={email}
          className={tableStyles.usersTableCol}
        >{email}</td>
        <td
          data-label={phone}
          className={tableStyles.usersTableCol}
        >{phone}</td>
        <td
          data-label={dateOfBirth}
          className={tableStyles.usersTableCol}
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
      <th className={tableStyles.usersTableHeadCol}>
        <div className={tableStyles.usersTableHeadLabel} >{value}</div>
        <InputFilter
          handleChange={handleSearchChange}
          handleSubmitOnBlur={handleSearchSubmit}
          searchResult={searchResult}
          name={key}
          value={value}
        />
      </th>
    )
  });
  /* -/Preparing data for transfer layouts into view component  */

  return (
    <div className={tableStyles.usersTableWrap} >
      <UsersListView
        usersListLayout={usersListLayout}
        usersHeadLayout={usersHeadLayout}
      />
      <ProjectPagination
        handlePageClick={handlePageClick}
        pageCount={pageCount}
      />
    </div>
  );
}
