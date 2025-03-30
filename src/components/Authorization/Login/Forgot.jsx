import React from 'react'
import { Link } from 'react-router-dom'

const Forgot = ({title}) => {
  return (
    <div className="text-sm">
    <Link to="#" className="font-medium bg-forgetBg p-2 rounded-3xl font-semibold text-forgetText hover:text-purple-900">
    {title}
    </Link>
  </div>
  )
}

export default Forgot