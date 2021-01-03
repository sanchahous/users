import React, {useEffect, useState} from 'react'
import localStyles from './BreadCrumbs.styl'
import linkStyles from '../../../styles/linkStyles.styl'
import {NavLink} from "react-router-dom";

export const BreadCrumbs = ({currentPage}) => {

  const [approve, setApprove] = useState(false);

  const handleClick = (e) => {
    setApprove(confirm("Are you sure, that you want to move out? You can lost your changes!"));
  }

  useEffect(() => {
    approve && window.location.replace("/");
  }, [approve])

  return (
    <ul className={localStyles.breadcrumb}>
      <li className={localStyles.breadcrumbItem} >
        <button
          className={linkStyles.link}
          onClick={ handleClick }
        >Users list</button>
      </li>
      <li className={localStyles.breadcrumbItem} >{currentPage}</li>
    </ul>
  )
}
