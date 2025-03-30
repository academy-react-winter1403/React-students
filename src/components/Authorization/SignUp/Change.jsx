import React from 'react'
import { Link } from 'react-router-dom'

const Change = () => {
  return (
    <div className='border-2 bg-arrowLeft text-sm text-login items-center'>
        <Link to="/SingUp" className='border border-red-600'>
        تغییر شماره همراه
        </Link>
        /=
    </div>
  )
}

export default Change