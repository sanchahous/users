import React from "react";
import {Controller} from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import ReactDatepicker from "react-datepicker";

import {errorMessages, regExp} from "../UserStaticData/UserStaticData";

import formStyles from "../../../_styles/form.styl";

export const UpdateUserView = ({handleSubmit, onSubmit, errors, control, register, startDate}) => {
  const {firstName: firstNameError, lastName: lastNameError, email: emailError, phone: phoneError, dateOfBirth: dateOfBirthError}  = errors;

  const {message: firstNameErrorMessage, type: firstNameErrorType} = firstNameError || {};
  const {message: lastNameErrorMessage, type: lastNameErrorType} = lastNameError || {};
  const {message: phoneErrorMessage, type: phoneErrorType} = phoneError || {};
  const {message: emailErrorMessage} = emailError || {};
  const {message: dateOfBirthErrorMessage} = dateOfBirthError || {};

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className={formStyles.formGroup}>
        <label htmlFor="firstName">First name</label>
        <input
          id="firstName"
          name="firstName"
          ref={register({
            required: "required",
            pattern: {
              message: errorMessages.firstName
            },
            minLength: 2,
            maxLength: 80,
          })}
          type="text"
        />
        <div>
          {firstNameError && <span role="alert">{firstNameErrorMessage}</span>}
          {(firstNameErrorType === "minLength") && <span role="alert">{errorMessages.minLength}</span>}
          {(firstNameErrorType === "maxLength") && <span role="alert">{errorMessages.maxLength}</span>}
        </div>
      </div>

      <div className={formStyles.formGroup}>
        <label htmlFor="lastName">Last name</label>
        <input
          id="lastName"
          name="lastName"
          ref={register({
            required: "required",
            pattern: {
              message: errorMessages.lastName
            },
            minLength: 2,
            maxLength: 80,
          })} type="text"
        />
        <div>
          {lastNameError && <span role="alert">{lastNameErrorMessage}</span>}
          {(lastNameErrorType === "minLength") && <span role="alert">{errorMessages.minLength}</span>}
          {(lastNameErrorType === "maxLength") && <span role="alert">{errorMessages.maxLength}</span>}
        </div>
      </div>

      <div className={formStyles.formGroup}>
        <label htmlFor="email">email</label>
        <input
          id="email" name="email" ref={register({
          required: "required",
          pattern: {
            value: regExp.email,
            message: errorMessages.email
          }
        })}
          type="email"
        />
        <div>
          {emailError && <span role="alert">{emailErrorMessage}</span>}
        </div>
      </div>

      <div className={formStyles.formGroup}>
        <label htmlFor="phone">phone</label>
        <Controller
          defaultValue=""
          as={
            <PhoneInput
              id="phone" country={'ua'} placeholder="Enter phone number" inputRef={register}
            />
          }
          name="phone"
          control={control}
          rules={{
            required: errorMessages.phone,
            pattern: {
              value: regExp.phone
            },
            minLength: 9,
            maxLength: 14,
          }}
          type='text'
        />
        <div>
          {phoneError && <span role="alert">{phoneErrorMessage}</span>}
          {phoneErrorType === "minLength" && <span role="alert">{errorMessages.minLength}</span>}
          {phoneErrorType === "maxLength" && <span role="alert">{errorMessages.maxLength}</span>}
        </div>
      </div>

      <div className={formStyles.formGroup}>
        <Controller
          defaultValue={startDate} control={control} name="dateOfBirth" rules={{
          required: errorMessages.dateOfBirth,
        }} render={({onChange, onBlur, value}) => (
          <ReactDatepicker
            onChange={onChange}
            onBlur={onBlur}
            selected={value || startDate}
            dateFormat="dd/MM/yyyy"
            peekNextMonth
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
            minDate={new Date("01/01/1960")}
          />
        )}
        />
        {dateOfBirthError && <span role="alert">{dateOfBirthErrorMessage}</span>}
      </div>

      <button type="submit">SUBMIT</button>
    </form>
  );
}
