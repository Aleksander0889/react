import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup
  .object()
  .shape({
    name: yup.string().required(),
    age: yup.number().required(),
    countries: yup.string().required(),
    is_going: yup.boolean().required(),
    faile: yup.mixed().required(),
     });

function NameForm() {
  const { register, handleSubmit,  } = useForm({
   resolver: yupResolver(schema)
  });

   const submitForm = (data) => {
    console.log(data);
   };

 
    return (
      <form noValidate onSubmit={handleSubmit(submitForm)}
        className="form_submit">
        <label>
          Name:
          <input
           type="text"
            {...register('name')} />
            
        </label>
        <label>
          Data:
          <input
            type="number"
            {...register('age')} />
        </label>
        <label>
          Your countre:
          <select 
          {...register('countries')}
          name="countries"
          >
            <option>Belarus</option>
            <option>Rusha</option>
            <option>Europ</option>
            <option>America</option>
          </select>
        </label>
        <label>
          I consent to my personal data
          <input
            type="checkbox"
            {...register('is_going')}
            />
        </label>
        <label>
          Fale:
          <input type="file"
            {...register('faile')}
            />
        </label>

        <input type="submit" 
        id="submit"
        />
      </form>
    );
    }

export default NameForm




