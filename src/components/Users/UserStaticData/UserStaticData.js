export const regExp = {
  email: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  phone: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/
}

export const MIN_DATE_OF_BIRTH = '01/01/1960';
export const MIN_LENGTH_PHONE = 9;
export const MAX_LENGTH_PHONE = 14;
export const MIN_LENGTH_NAME = 2;
export const MAX_LENGTH_NAME = 80;

export const errorMessages = {
  firstName: 'Please enter your name!',
  lastName: 'Please enter your last name!',
  email: 'Incorrect email format',
  phone: 'Incorrect phone format',
  dateOfBirth: `Minimum date of birth ${MIN_DATE_OF_BIRTH} symbols`,
  minPhoneLength: `minimum phone length ${MIN_LENGTH_PHONE} symbols` ,
  maxPhoneLength: `maximum phone length ${MAX_LENGTH_PHONE} symbols` ,
  minNameLength: `minimum name length ${MIN_LENGTH_NAME} symbols` ,
  maxNameLength: `maximum name length ${MAX_LENGTH_NAME} symbols` ,
  minLastNameLength: `minimum last name length ${MIN_LENGTH_NAME} symbols` ,
  maxLastNameLength: `maximum last name length ${MAX_LENGTH_NAME} symbols` ,
}


