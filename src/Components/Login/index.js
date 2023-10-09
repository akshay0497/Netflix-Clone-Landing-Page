import React from 'react'
import logo from '../../Assets/Images/Header/Netflix-Logo.svg'
import '../../Pages/LandingPage/HomePage.css'


const LogIn = () => {
  return (
    <>
      <div style={{backgroundImage:'url("../../Assets/Images/Body/backgroundimage.jpg")', zIndex:-1}} >
        <div className='w-24 '>
            <img src={logo}/>
        </div>
        <div></div>
      </div>
    </>
  )
}

export default LogIn
