import React, {useEffect} from 'react'

import localStyles from './Modal.styl'
import './Animatedicon.css'
import {NavLink} from "react-router-dom";

export const Modal = ({history, userName}) => {

  console.log('history', history)

  useEffect(() => {
    setTimeout(() => history.push('/'), 5000)
  }, [])

  return (
    <div className={localStyles.outer} >
      <div className={localStyles.middle} >
        <div className={localStyles.inner} >
          <div className={localStyles.textBlock} >
            <h1>The user <strong>{userName}</strong></h1>
            <p>was created successfully</p>
          </div>
          <div className="svg-container">
            <svg
              className="ft-green-tick"
              xmlns="http://www.w3.org/2000/svg"
              height="100"
              width="100"
              viewBox="0 0 48 48"
              aria-hidden="true"
            >
              <circle className="circle" fill="#5bb543" cx="24" cy="24" r="22"/>
              <path
                className="tick"
                fill="none"
                stroke="#FFF"
                stroke-width="6"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
                d="M14 27l5.917 4.917L34 17"
              />
            </svg>
          </div>
          <NavLink to='/' >Users list</NavLink>
        </div>
      </div>
    </div>
  )
}
