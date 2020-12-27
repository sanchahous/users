import React, {useEffect, useState} from "react";
import { useForm } from "react-hook-form";

import moment from 'moment';

import {useDispatch, useSelector} from "react-redux";
import {userInfoActions, userUpdateActions} from "../../../_actions";
import {UpdateUserView} from "./UpdateUserView";

export const UpdateUser = (props) => {
  const { register, handleSubmit, errors, reset, control } = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onBlur',
    criteriaMode: "firstError"
  });
  const [startDate] = useState(new Date());
  const dispatch = useDispatch();
  const userId = props.match.params.id;
  const userInfoData = useSelector(state => state.userInfo?.data);
  useEffect(() => {
    dispatch(userInfoActions.getInfo(userId));
  }, [dispatch])

  console.log('userInfoData', userInfoData);

  const onSubmit = async data => {
    const formData = {
      ...data,
      dateOfBirth: moment(data.dateOfBirth).format('DD/MM/yyyy'),
      phone: `+${data.phone}`
    };
    await dispatch(userUpdateActions.update(formData))
    reset();
  };

  return (
    <UpdateUserView
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      errors={errors}
      control={control}
      register={register}
      startDate={startDate}
    />
  );
}
