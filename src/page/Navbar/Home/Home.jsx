import React from 'react'
import Sidebar from '../Sidebar/Sidebar'

const Home = () => {
  return (
    <div className='lg:flex px-5 lg:px-20 pt-[3vh]'>

    <div className='hidden lg:block w-[25vw] relative'>
        <Sidebar/>
    </div>

    <div className='right-side-bar'></div>



    </div>
  )
}

export default Home