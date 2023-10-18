import React from 'react'
import logo from '../../Assets/Images/Header/Netflix-Logo.svg'

const RegistrationHeader = () => {
  return (
    <div className='flex items-center justify-between px-5 !bg-white !text-black border-b-[1px] border-gray-500'>
      <div>
        <img src={logo} className='w-44'/>
      </div>
      <div className='px-10'>
        <button type='submit' className='hover:underline font-bold'>Sign In</button>
      </div>
    </div>
  )
}

export default RegistrationHeader
