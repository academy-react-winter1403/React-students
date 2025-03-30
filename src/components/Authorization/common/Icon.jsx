import React from 'react'
import { Link } from 'react-router-dom'

const Icon = () => {
  return (
    <div className='w-60 absolute top-10 right-14'> 
        <div>
            <img src="/src/assets/9a811899-ceeb-49d4-802d-a96c8ba50aee 1.png" className='inline'/>
            <Link to="/" className="text-[14px] inline p-2 font-semibold cursor-pointer">React-students</Link>
        </div>  
    </div> 
  )
}

export default Icon