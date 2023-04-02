import React from 'react';
import { useForm } from 'react-hook-form'

type FormData = {
  UseName: string;
  ref: any;
  register: HTMLElement;
};

const NameForm = ()  => {
  const { handleSubmit} = useForm<FormData>(
  {mode: "onBlur"})

   const onSubmit = (data) => {
    console.log(data)
   }

 
    return (
      <form  noValidate onSubmit={handleSubmit(onSubmit)}
      className="form_submit">
        <label>
          Name:
          <input 
          readOnly
          defaultValue={""}
          id='name'
          name='useName' 
          type="text"
          />
        </label>
        <input type="submit" 
        />
        <label>
          Data:
          <input name='UseAge' type="number"  />
        </label>
        <label>
           Your countre:
          <select  name="cantre" >
            <option >Belarus</option>
            <option >Rusha</option>
            <option >Europ</option>
            <option >America</option>
          </select>
        </label>
        <label>
        I consent to my personal data
          <input
            name="isGoing"
            type="checkbox"
            />
        </label>    
        <label>
          Fale:
        <input type="file" />
        </label>
      </form>
    );
    }

export default NameForm




