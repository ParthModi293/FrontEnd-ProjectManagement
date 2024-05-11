import React, { useState } from 'react';
import './Auth.css';

const Auth = () => {


const [isRegister,setIsRegister]=useState(true);
const togglePanel=()=>{
  setIsRegister(!isRegister);
};



  return (
    <div className='flex justify-center h-screen items-center overflow-hidden'>
      <div className='box lg:max-w-4xl'>
      <div className={`cover ${isRegister?"rotate-active":""}`}>
        <div className='front'>
          <img src="https://t4.ftcdn.net/jpg/04/60/71/01/360_F_460710131_YkD6NsivdyYsHupNvO3Y8MPEwxTAhORh.jpg" alt=""  />
          <div className='text'>

          <span className='text-1'>Just Focus On Your Own-Self</span>
          <span className='text-2 text-xs'>Just Be Selfish</span>
          </div>
        </div>

        <div className='back'>
          <img src="https://media.istockphoto.com/id/1463013729/photo/online-registration-form-for-modish-form-filling.webp?b=1&s=170667a&w=0&k=20&c=iUOC7YLenExVDT9pfUtJyyIS-dlJvOPyJq1USG4lv5I=" alt="" />
        </div>
        </div>

          <div className='forms h-full'>
              <div className='form-content h-full'>
                <div className='login-form'>
                  SignIn Form
                </div>
                <div className='signup-form'>
                  SignUp Form
                </div>

              </div>

          </div>

      </div>
        
    </div>
  )
}

export default Auth