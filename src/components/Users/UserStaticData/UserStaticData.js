export const regExp = {
  email: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  phone: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/
}

export const errorMessages = {
  firstName: 'Name may not be empty',
  lastName: 'Last name may not be empty',
  email: 'Entered value does not match email format',
  phone: 'Entered value does not match phone format',
  dateOfBirth: 'Entered value does not match date of Birth format',
  minLength: 'Your input does not match minLength',
  maxLength: 'Your input does not match maxLength',
}
