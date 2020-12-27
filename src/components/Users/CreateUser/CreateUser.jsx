import React, {useState} from "react";
import { useForm } from "react-hook-form";

import moment from 'moment';

import {useDispatch} from "react-redux";
import {userCreateActions} from "../../../_actions";
import {CreateUserView} from "./CreateUserView";

export const CreateUser = () => {
  const { register, handleSubmit, errors, reset, control } = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onBlur',
    criteriaMode: "firstError"
  });
  const [startDate] = useState(new Date());
  const dispatch = useDispatch();

  const onSubmit = async data => {
    const formData = {
      ...data,
      dateOfBirth: moment(data.dateOfBirth).format('DD/MM/yyyy'),
      phone: `+${data.phone}`
    };
    await dispatch(userCreateActions.create(formData))
    reset();
  };

  return (
    <CreateUserView
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      errors={errors}
      control={control}
      register={register}
      startDate={startDate}
    />
  );
}
