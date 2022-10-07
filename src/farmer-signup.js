import React from 'react'
import { CookiesProvider } from 'react-cookie'
//import Signup from 'signup/'
import CustomizedDialogs from './signup/dialog';
import Signup from './signup/Signup';
const Farmersignup = () => {
  return (
    <div className='form-modal'>
      <CookiesProvider>
        <CustomizedDialogs>
          <Signup />
        </CustomizedDialogs>
      </CookiesProvider>
    </div>
  )
}

export default Farmersignup