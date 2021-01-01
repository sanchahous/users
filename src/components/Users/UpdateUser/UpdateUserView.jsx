import React, {useState} from "react";
import {Controller} from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'
import ReactDatepicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import moment from 'moment';

import {
  errorMessages,
  MAX_LENGTH_NAME, MAX_LENGTH_PHONE, MIN_DATE_OF_BIRTH,
  MIN_LENGTH_NAME,
  MIN_LENGTH_PHONE,
  regExp
} from "../UserStaticData/UserStaticData";

import formStyles from "../../../_styles/form.styl";
import classnames from "classnames";

export const UpdateUserView = ({handleSubmit, onSubmit, errors, control, register, startDate, currentUserInfo}) => {
  const{firstName, lastName, email, phone } = currentUserInfo || '';
  const dateOfBirth = currentUserInfo && currentUserInfo.dateOfBirth;
  const formattedDateOfBirth = moment(dateOfBirth, 'DD/MM/yyyy').toDate();
  const {firstName: firstNameError, lastName: lastNameError, email: emailError, phone: phoneError, dateOfBirth: dateOfBirthError}  = errors;

  const {message: firstNameErrorMessage, type: firstNameErrorType} = firstNameError || {};
  const {message: lastNameErrorMessage, type: lastNameErrorType} = lastNameError || {};
  const {message: phoneErrorMessage, type: phoneErrorType} = phoneError || {};
  const {message: emailErrorMessage} = emailError || {};
  const {message: dateOfBirthErrorMessage} = dateOfBirthError || {};

  return (
    <form
      className={formStyles.form}
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="off"
    >

      <div className={formStyles.formGroup}>
        <input
          defaultValue={firstName}
          id="firstName"
          name="firstName"
          autoComplete="random"
          className={classnames(formStyles.formControl, {
            [formStyles.formControlError]: firstNameError
          }) }
          ref={register({
            required: "Please enter your name!",
            pattern: {
              message: errorMessages.firstName
            },
            minLength: MIN_LENGTH_NAME,
            maxLength: MAX_LENGTH_NAME,
          })}
          type="text"
        />
        <label
          htmlFor="firstName"
          className={formStyles.formLabel}
        >First name *</label>
      </div>
      <div className={formStyles.errorTextWrap} >
        {firstNameError && <span role="alert" className={formStyles.errorTextItem} >{firstNameErrorMessage}</span>}
        {(firstNameErrorType === "minLength") && <span role="alert" className={formStyles.errorTextItem} >{errorMessages.minNameLength}</span>}
        {(firstNameErrorType === "maxLength") && <span role="alert" className={formStyles.errorTextItem} >{errorMessages.maxNameLength}</span>}
      </div>

      <div className={formStyles.formGroup}>
        <input
          defaultValue={lastName}
          id="lastName"
          name="lastName"
          autoComplete="random"
          className={classnames(formStyles.formControl, {
            [formStyles.formControlError]: lastNameError
          }) }
          ref={register({
            required: "Please enter your last name!",
            pattern: {
              message: errorMessages.lastName
            },
            minLength: MIN_LENGTH_NAME,
            maxLength: MAX_LENGTH_NAME,
          })} type="text"
        />
        <label
          htmlFor="lastName"
          className={formStyles.formLabel}
        >Last name *</label>
      </div>
      <div className={formStyles.errorTextWrap} >
        {lastNameError && <span role="alert" className={formStyles.errorTextItem} >{lastNameErrorMessage}</span>}
        {(lastNameErrorType === "minLength") && <span role="alert" className={formStyles.errorTextItem} >{errorMessages.minLastNameLength}</span>}
        {(lastNameErrorType === "maxLength") && <span role="alert" className={formStyles.errorTextItem} >{errorMessages.maxLastNameLength}</span>}
      </div>

      <div className={formStyles.formGroup}>
        <input
          defaultValue={email}
          id="email"
          name="email"
          className={classnames(formStyles.formControl, {
            [formStyles.formControlError]: emailError
          }) }
          ref={register({
            required: "Please tell us your email!",
            pattern: {
              value: regExp.email,
              message: errorMessages.email
            }
          })}
          type="email"
          autoComplete="random"
        />
        <label
          htmlFor="email"
          className={formStyles.formLabel}
        >Email *</label>
      </div>
      <div className={formStyles.errorTextWrap} >
        {emailError && <span role="alert" className={formStyles.errorTextItem} >{emailErrorMessage}</span>}
      </div>

      { phone &&
      <>
        <div className={classnames(formStyles.formGroup, formStyles.formGroupPhone)}>
          <Controller
            defaultValue={phone}
            as={
              <PhoneInput
                id="phone"
                country={'ua'}
                containerClass={formStyles.formPhoneControlWrap}
                inputClass={classnames(formStyles.formControl, {
                  [formStyles.formControlError]: phoneError
                }) }
                placeholder="Enter phone number"
                inputRef={register}
              />
            }
            name="phone"
            control={control}
            rules={{
              required: errorMessages.phone,
              pattern: {
                value: regExp.phone
              },
              minLength: MIN_LENGTH_PHONE,
              maxLength: MAX_LENGTH_PHONE,
            }}
            type='text'
          />
          <label
            htmlFor="phone"
            className={formStyles.formLabel}
          >Phone *</label>
        </div>
        <div className={formStyles.errorTextWrap} >
          {phoneError && <span role="alert" className={formStyles.errorTextItem} >{phoneErrorMessage}</span>}
          {phoneErrorType === "minLength" && <span role="alert" className={formStyles.errorTextItem} >{errorMessages.minPhoneLength}</span>}
          {phoneErrorType === "maxLength" && <span role="alert" className={formStyles.errorTextItem} >{errorMessages.maxPhoneLength}</span>}
        </div>
      </>
      }

      { dateOfBirth &&
        <>
          <div className={classnames(formStyles.formGroup, formStyles.formGroupDate)}>
            <Controller
              defaultValue={formattedDateOfBirth || startDate}
              control={control}
              name="dateOfBirth"
              rules={{
                required: errorMessages.dateOfBirth,
              }}
              render={({onChange, onBlur, value}) => (
                <ReactDatepicker
                  id='dateOfBirth'
                  className={classnames(formStyles.formControl, {
                    [formStyles.formControlError]: dateOfBirthError
                  }) }
                  onChange={onChange}
                  onBlur={onBlur}
                  selected={value || startDate}
                  dateFormat="dd/MM/yyyy"
                  peekNextMonth
                  showMonthDropdown
                  showYearDropdown
                  dropdownMode="select"
                  minDate={new Date(MIN_DATE_OF_BIRTH)}
                />
              )}
            />
            <label
              htmlFor="dateOfBirth"
              className={formStyles.formLabel}
            >Date of birth *</label>
          </div>
          <div className={formStyles.errorTextWrap} >
            {dateOfBirthError && <span role="alert" className={formStyles.errorTextItem} >{dateOfBirthErrorMessage}</span>}
          </div>
        </>
      }


      <button type="submit">SUBMIT</button>
    </form>
  );
}
