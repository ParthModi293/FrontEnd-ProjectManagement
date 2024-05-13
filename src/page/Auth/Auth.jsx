import React, { useState } from 'react';
import './Auth.css';
import Signin from './Signin';
import Signup from './Signup';

const Auth = () => {


const [isRegister,setIsRegister]=useState(false);
const togglePanel=()=>{
  setIsRegister(!isRegister);
};



  return (
    <div className='flex justify-center h-screen items-center overflow-hidden'>
      <div className='box lg:max-w-4xl'>
      <div className={`cover ${isRegister?"rotate-active":""}`}>
        <div className='front'>
          <img src="https://cdn.pixabay.com/photo/2019/05/26/22/40/night-sea-4231466_640.jpg" alt=""  />
          <div className='text'>

          <span className='text-1'>"Make Your Miracle"</span>
          
          </div>
        </div>

        <div className='back'>
          <img src="https://media.istockphoto.com/id/1463013729/photo/online-registration-form-for-modish-form-filling.webp?b=1&s=170667a&w=0&k=20&c=iUOC7YLenExVDT9pfUtJyyIS-dlJvOPyJq1USG4lv5I=" alt="" />
        </div>
        </div>

          <div className='forms h-full'>
              <div className='form-content h-full'>
                <div className='login-form'>
                  <Signin togglePanel={togglePanel}/>
                </div>
                <div className='signup-form'>
                  <Signup togglePanel={togglePanel}/>
                </div>

              </div>

          </div>

      </div>
        
    </div>
  )
}

export default Auth