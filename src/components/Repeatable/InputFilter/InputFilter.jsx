import React from "react";

import localStyles from './InputFilter.styl'

export const InputFilter = (props) => {
  const {name, handleChange, handleSubmitOnBlur, searchResult} = props;

  let userIcon = '';
  switch(name) {
    case 'email':
      userIcon = '<svg width="20" height="15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.333.833H1.667a1.389 1.389 0 00-1.39 1.39v11.11a1.389 1.389 0 001.39 1.39h16.666a1.389 1.389 0 001.39-1.39V2.223a1.39 1.39 0 00-1.39-1.39zm-1.527 1.39L10 6.93 3.194 2.222h13.612zm-15.14 11.11V2.854l7.938 5.493a.694.694 0 00.792 0l7.937-5.493v10.48H1.667z" fill="#C6C2DE"/></svg>'
      break
    case 'phone':
      userIcon = '<svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.406 19.689c-.187 0-.373-.021-.556-.061a18.84 18.84 0 01-9.233-4.861 18.173 18.173 0 01-5-9.028 2.544 2.544 0 01.75-2.378l2.222-2.139a1.111 1.111 0 01.855-.3 1.111 1.111 0 01.806.484L8.028 5.51a.889.889 0 01-.061 1.056L6.572 8.233a10.523 10.523 0 002.317 3.273 10.7 10.7 0 003.372 2.272l1.728-1.372a.91.91 0 011.033-.067l4.195 2.711a1.111 1.111 0 01.227 1.728l-2.166 2.144a2.634 2.634 0 01-1.872.767zM4.356 2.022l-2.223 2.14a1.411 1.411 0 00-.416 1.332 17.056 17.056 0 004.672 8.478 17.722 17.722 0 008.689 4.572 1.526 1.526 0 001.389-.41l2.166-2.145-4.05-2.617-1.855 1.478a.557.557 0 01-.511.094 11.143 11.143 0 01-4.09-2.638 10.828 10.828 0 01-2.705-4 .556.556 0 01.134-.528l1.5-1.795-2.7-3.96z" fill="#C6C2DE"/></svg>'
      break
    case 'dateOfBirth':
      userIcon = '<svg width="20" height="23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.444 10h2.223v2.222H4.444V10zM20 4.444V20c0 1.222-1 2.222-2.222 2.222H2.222A2.222 2.222 0 010 20L.011 4.444c0-1.222.978-2.222 2.211-2.222h1.111V0h2.223v2.222h8.888V0h2.223v2.222h1.11C19 2.222 20 3.222 20 4.444zM2.222 6.667h15.556V4.444H2.222v2.223zM17.778 20V8.889H2.222V20h15.556zm-4.445-7.778h2.223V10h-2.223v2.222zm-4.444 0h2.222V10H8.89v2.222z" fill="#C6C2DE"/></svg>'
      break

    default:
      userIcon = '<svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.333 20S20 20 20 18.333c0-1.666-1.667-6.666-10-6.666s-10 5-10 6.666C0 20 1.667 20 1.667 20h16.666zm-16.63-1.667h16.594a.45.45 0 00.023-.003l.013-.003c-.001-.41-.256-1.644-1.386-2.774-1.087-1.086-3.132-2.22-6.947-2.22-3.817 0-5.86 1.134-6.947 2.22-1.13 1.13-1.383 2.364-1.386 2.774l.036.006zm8.297-10a3.333 3.333 0 100-6.666 3.333 3.333 0 000 6.666zM15 5A5 5 0 115 5a5 5 0 0110 0z" fill="#C6C2DE"/></svg>'
  }

  return (
    <div className={localStyles.searchControlWrap} >
      <div
        dangerouslySetInnerHTML={{ __html: userIcon }}
        className={localStyles.searchControlIcon}
      ></div>
      <input
        type="text"
        className={localStyles.searchControl}
        name={name}
        placeholder='...'
        value={searchResult ? searchResult[name] : '' }
        onBlur={handleSubmitOnBlur}
        onChange={handleChange}
      />
    </div>

  )
}
