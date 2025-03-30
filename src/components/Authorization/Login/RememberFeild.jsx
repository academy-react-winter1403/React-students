import { Field } from 'formik'
import React from 'react'

const RememberFeild = ({title , name , type}) => {
  return (
    <div className="flex items-center ">
        <Field
        id={name}
        name={name}
        type={type}
        className="h-4 w-4 border rounded-md"
        />
        <label htmlFor={name} className="mr-2 block text-sm font-semibold">
        {title}
        </label>
    </div>
  )
}

export default RememberFeild