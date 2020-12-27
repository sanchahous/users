import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {UsersListView} from "./UsersListView";
import {usersHeadTitles} from "./UserListStatic";
import {usersListActions} from "../../../_actions";

import tableStyles from "../../../_styles/table.styl";
import {NavLink} from "react-router-dom";

export const UsersList = () => {
  const dispatch = useDispatch();
  const usersListData = useSelector(state => state.usersList.list);

  useEffect(() => {
    dispatch(usersListActions.getList());
  }, [dispatch])

  const usersListLayout = usersListData.map(userItem => {
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
    return (
      <th className={tableStyles.tableHeadCol}>{userHeadTitle}</th>
    )
  });

  return (
    <UsersListView
      usersListLayout={usersListLayout}
      usersHeadLayout={usersHeadLayout}
    />
  );
}
