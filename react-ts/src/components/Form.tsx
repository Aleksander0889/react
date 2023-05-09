import React, { useRef, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import MyButton from './button/MyButton';
import MyInput from './input/MyInput';
import Switch from '@mui/material/Switch/Switch';
import classes from './MyForm.module.css';
import MyModal from '../components/Modal/MyModal';

type Inputs = {
  name: string;
  surname: string;
  age: string;
  check: boolean;
  switch: boolean;
  files: string;  
};

export const schema = yup.object().shape({
  namePerson: yup.string().required(),
  surname: yup.string().required(),
  age: yup.number().required(),
  check: yup.boolean().required(),
  files: yup.mixed().required(),
}).required();

const NameForm: React.FC = () => {
  const { register, handleSubmit, control } = useForm<Inputs>({
    resolver: yupResolver(schema), // yup, joi and even your own.
  });

  const [modal, setModal] = useState(false)

  return (
    <>
    <MyButton onClick={() => setModal(true)}> Создать пользователя</MyButton>
    <MyModal visible={modal} setVisible={setModal}> <form
      className={classes.myForm}
      onSubmit={handleSubmit(d => console.log(d))}>
      <label>Name
        <input {...register("name")} />
      </label>
      <label>Subname
        <input {...register("surname")} />
      </label>
      <label>Birthday
        <input type="number" {...register("age")} />
      </label>
      <label>I consent to my personal data
        <input type="checkbox" {...register("check")} />
      </label>
      <label>MUI Switch</label>
      <Controller
        name="switch"
        control={control}
        render={({ field }) => <Switch {...field} />} />
      <input type="file" multiple {...register("files")} />
      <MyButton>Зарегистрироваться</MyButton>
    </form></MyModal>
    </>
  );
};

export default NameForm;




