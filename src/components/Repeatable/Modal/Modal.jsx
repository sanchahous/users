import React, {useEffect, useRef, useState} from 'react'

import localStyles from './Modal.styl'
import linkStyles from '../../../styles/linkStyles.styl'
import './Animatedicon.css'
import {NavLink} from "react-router-dom";

export const Modal = ({history, userName, update}) => {
  const modalWrap = useRef(null);
  useEffect(() => {
    if(update) {
      setTimeout(() => history.go(0), 5000); // refreshing the page
    } else {
      setTimeout(() => history.push('/'), 5000);
    }

  }, [])

  return (
    <div ref={modalWrap} className={localStyles.outer} >
      <div className={localStyles.middle} >
        <div className={localStyles.inner} >
          <div className={localStyles.textBlock} >
            <h1>The user <strong>{userName}</strong></h1>
            <p>was {update ? 'updated' : 'created'} successfully</p>
          </div>
          <div className="svg-container">
            <svg className="ft-green-tick" xmlns="http://www.w3.org/2000/svg" height="100" width="100" viewBox="0 0 48 48" aria-hidden="true"><circle className="circle" fill="#5bb543" cx="24" cy="24" r="22"/><path className="tick" fill="none" stroke="#FFF" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M14 27l5.917 4.917L34 17"/></svg>
          </div>
          <div className={localStyles.modalNavLink} >
            <NavLink className={linkStyles.link} to='/' >Back to users list</NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}
