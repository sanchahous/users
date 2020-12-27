import React from "react";
import tableStyles from '../../../_styles/table.styl'
import {NavLink} from "react-router-dom";

export const UsersListView = ({usersListLayout, usersHeadLayout}) => {
  return (
    <div>
      <NavLink to='/users/create' >
        Create new user
      </NavLink>
      <div className={tableStyles.tableWrap}>
        <table className={tableStyles.table}>
          <caption>Users list</caption>
          <thead className={tableStyles.tableHead}>
            <tr>
              {usersHeadLayout}
            </tr>
          </thead>
          <tbody>
            {usersListLayout}
          </tbody>
        </table>
      </div>
    </div>
  );
}
