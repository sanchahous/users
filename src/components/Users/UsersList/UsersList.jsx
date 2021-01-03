import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {UsersListView} from "./UsersListView";

import {ITEMS_PER_PAGE, usersHeadTitles} from "./UserListStatic";
import {userRemoveActions, usersListActions} from "../../../actions";

import {NavLink} from "react-router-dom";
import {InputFilter} from "../../Repeatable/InputFilter/InputFilter";
import {ProjectPagination} from "../../Repeatable/ProjectPagination/ProjectPagination";
import {Loader} from "../../Repeatable/Loader/Loader";

import tableStyles from "../../../styles/table.styl";
import localStyles from "./UsersList.styl";
import classnames from "classnames";

export const UsersList = () => {
  const dispatch = useDispatch();
  const usersListData = useSelector(state => state.usersList?.list);
  const loading = useSelector(state => state.usersList?.loading);
  const [removedUserId, setRemovedUserId] = useState('')
  const perPage = ITEMS_PER_PAGE;
  const [pageCount, setPageCount] = useState(0);
  const [offset, setOffset] = useState(1);
  const [searchResult, setSearchResult] = useState({});

  useEffect(() => {
    dispatch(usersListActions.getList());
  }, [dispatch]);

  useEffect(() => {
    setPageCount(Math.ceil(usersListData.length / perPage));
  }, [offset, usersListData]);

  useEffect(() => {
    if(removedUserId) {
      (async () => {
        await dispatch(userRemoveActions.remove(removedUserId));
        dispatch(usersListActions.getList(searchResult || null));
      })()
    }
  }, [removedUserId]);

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
    setOffset( 1);
  }

  const handleUserRemove = (id, name) => {
    setRemovedUserId(confirm(`Are you sure that you want to delete user { ${name} }`) ? id : false);
  }

  /**
   * @param paginatedUsersList Sliced & paginated array of objects
   * sliced by formula: (offset - 1 * perPage), offset * perPage
   */
  const paginatedUsersList = (usersListData.length > perPage) ? usersListData.slice(((offset - 1) * perPage), offset * perPage) : usersListData;
  /* Preparing layouts for transfer into view component  */
  const usersListLayout = paginatedUsersList.map(userItem => {
    const {id, firstName, lastName, email, phone, dateOfBirth} = userItem;
    return (
      <tr className={tableStyles.usersTableRow} key={email}>
        <td
          data-label='First name'
          className={tableStyles.usersTableCol}
        ><span>{firstName}</span></td>
        <td
          data-label='Last name'
          className={tableStyles.usersTableCol}
        ><span>{lastName}</span></td>
        <td
          data-label='email'
          className={classnames(tableStyles.usersTableCol, tableStyles.usersTableTextLight)}
        ><span>{email}</span></td>
        <td
          data-label='phone'
          className={classnames(tableStyles.usersTableCol, tableStyles.usersTableTextLight)}
        ><span>{phone}</span></td>
        <td
          data-label='Date of birth'
          className={classnames(tableStyles.usersTableCol, tableStyles.usersTableTextLight)}
        ><span>{dateOfBirth}</span></td>
        <td
          className={tableStyles.usersTableCol}
        >
          <NavLink
            to={`/users/update/${id}`}
            className={localStyles.userUpdateLink}
          >
            <svg className={localStyles.iconUpdate} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M5 18.08V19h.92l9.06-9.06-.92-.92z" opacity=".3"/><path d="M20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83zM3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19z"/></svg>
          </NavLink>
        </td>
        <td
          className={tableStyles.usersTableCol}
        >
          <button
            type='button'
            onClick={ () => handleUserRemove(id, firstName) }
            className={localStyles.userRemoveBtn}
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M16 9H8v10h8V9zm-.47 7.12l-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12 1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12z" opacity=".3"/><path d="M14.12 10.47L12 12.59l-2.13-2.12-1.41 1.41L10.59 14l-2.12 2.12 1.41 1.41L12 15.41l2.12 2.12 1.41-1.41L13.41 14l2.12-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9z"/></svg>
          </button>
        </td>
      </tr>
    )
  });

  const usersHeadLayout = usersHeadTitles.map(userHeadTitle => {
    const {key, value} = userHeadTitle
    return (
      <th className={tableStyles.usersTableHeadCol} >
        <div className={tableStyles.usersTableHeadLabel} >{value}</div>
        <InputFilter
          handleChange={handleSearchChange}
          handleSubmitOnBlur={handleSearchSubmit}
          searchResult={searchResult}
          name={key}
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
      {(usersListData.length > perPage) &&
        <ProjectPagination
          handlePageClick={handlePageClick}
          pageCount={pageCount}
        />
      }
      { loading &&
        <Loader />
      }
    </div>
  );
}
