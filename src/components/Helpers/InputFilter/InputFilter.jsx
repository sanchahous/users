import React from "react";

import localStyles from './InputFilter.styl'

export const InputFilter = (props) => {
  const {name, value, handleChange, handleSubmitOnBlur, searchResult} = props;

  return (
    <input
      type="text"
      className={localStyles.searchControl}
      name={name}
      placeholder=''
      value={searchResult ? searchResult[name] : '' }
      onBlur={handleSubmitOnBlur}
      onChange={handleChange}
    />
  )
}
