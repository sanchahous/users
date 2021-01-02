import React from 'react'
import localStyles from './BreadCrumbs.styl'
import {NavLink} from "react-router-dom";

export const BreadCrumbs = ({currentPage}) => {
  return (
    <ul className={localStyles.breadcrumb}>
      <li className={localStyles.breadcrumbItem} >
        <NavLink className={localStyles.breadcrumbLink} to='/' >Users list</NavLink>
      </li>
      <li className={localStyles.breadcrumbItem} >{currentPage}</li>
    </ul>
  )
}
