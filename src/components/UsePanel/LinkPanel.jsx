import React from 'react'
import { Link } from 'react-router-dom'

const LinkPanel = ({title,address}) => {
  return (
    <Link to={address}>
      {title}
    </Link>
  )
}

export default LinkPanel