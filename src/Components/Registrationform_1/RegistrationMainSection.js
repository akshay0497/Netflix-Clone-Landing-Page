import React from 'react'
import { Link } from 'react-router-dom'

const RegistrationMainSection_B = () => {
  return (
    <div>
      <form>
        <h1><span>STEP </span><span>1</span><span>of</span><span> 3</span></h1>
        <h1>Welcome back!</h1>
        <h1>Joining Netflix is easy.</h1>
        <h1>Enter your password and you'll be watching in no time.</h1>

        <div>
          <label>Email</label>
          <input  id='email' type='email' />

          <input type='password' id='password' placeholder='Enter your password'/>

          <Link to={'#'}>
          <a>Forgot your password?</a>
          </Link>

          <button className='bg-[#E50914]'>Next</button>
        </div>
      </form>
    </div>
  )
}

export default RegistrationMainSection_B

