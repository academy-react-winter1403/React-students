import React from 'react'
import {Field, ErrorMessage } from 'formik';

const AutFeild = ({ autoComplete , placeholder , type , name , title}) => {
  return (
    <div>
        <label htmlFor={name} className="font-semibold">{title}</label>
        <Field
        type={type}
        name={name}
        autoComplete={autoComplete}
        placeholder={placeholder}
        className="mt-2 mb-2 appearance-none rounded-none block w-full px-4 py-3 border-2 border-login placeholder-placeHolderLogin text-gray-900 rounded-xl focus:outline-none sm:text-sm"
        />
      <ErrorMessage name={name} component="div" className="mt-2 text-sm text-red-600" />
    </div>
  )
}

export default AutFeild;