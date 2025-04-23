import React from 'react'

const Header = ({title , Paragraph}) => {
  return (
    <div>
        <h2 className="text-right text-3xl font-bold text-gray-900">
        سلام،<br/>
        {title}
        </h2>
        <p className="mt-5 text-right font-semibold text-loginText">
        {Paragraph}
        </p>
    </div>
  )
}

export default Header