import React from "react";

export const InputFilter = (props) => {
  const {name, handleChange, handleSubmit, searchResult} = props;

  return (
    <input
      type="text"
      name={name}
      placeholder="Search value"
      value={searchResult ? searchResult[name] : '' }
      onBlur={handleSubmit}
      onChange={handleChange}
    />
  )
}
