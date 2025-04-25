import React from 'react'
import { Link } from 'react-router-dom'

const Change = () => {
  return (
    <div className='border-2 bg-arrowLeft text-sm text-login flex justify-center items-center'>
        <Link to="/RegisterStepOne">
        تغییر شماره همراه
        </Link>
    </div>
  )
}

export default Change