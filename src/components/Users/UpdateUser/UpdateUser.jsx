import React, {useEffect, useState} from "react";
import { useForm } from "react-hook-form";

import moment from 'moment';

import {useDispatch, useSelector} from "react-redux";
import {userInfoActions, userUpdateActions} from "../../../_actions";
import {UpdateUserView} from "./UpdateUserView";
import {NavLink} from "react-router-dom";

export const UpdateUser = (props) => {
  const { register, handleSubmit, errors, reset, control } = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onBlur',
    criteriaMode: "firstError"
  });
  const [startDate] = useState(new Date());
  const dispatch = useDispatch();
  const userId = props.match.params.id;
  const currentUserInfo = useSelector(state => state.userInfo?.data);

  useEffect(() => {
    dispatch(userInfoActions.getInfo(userId));
  }, [dispatch])

  const onSubmit = async data => {
    const formData = {
      ...data,
      dateOfBirth: moment(data.dateOfBirth).format('DD/MM/yyyy'),
      phone: `+${data.phone}`
    };
    await dispatch(userUpdateActions.update(formData, userId));
    await dispatch(userInfoActions.getInfo(userId));
  };

  return (
    <>
      <NavLink to='/users' >User list</NavLink>
      <UpdateUserView
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        errors={errors}
        control={control}
        register={register}
        startDate={startDate}
        currentUserInfo={currentUserInfo}
      />
    </>
  );
}
