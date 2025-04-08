import React from 'react'
import { Link } from 'react-router-dom'

const NoAccount = ({address , accountTitle , SingUpTitle}) => {
  return (
    <div className="text-center">
    <p className="text-sm">
      {accountTitle}
      <Link to={address} className="font-semibold underline">
        {SingUpTitle}
      </Link>
    </p>
  </div>
  )
}

export default NoAccount