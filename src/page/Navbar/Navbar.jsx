import { Avatar } from '@mui/material'
import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (

    <div className="container z-10 sticky left-0 right-0 top-0 py-3 px-5 lg:px-10, flex justify-between items-center">
      <p className="font-bold text-lg text-pink-950"> Project Management Tool</p>
      <div className="flex items-center gap-5 font-bold text-lg" >
        <p className='text-pink-950'>Parth Modi</p>
        <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdsF36g2A8lRhKWR2DfygvXPRlh3x6TAj9SQ&usqp=CAU'>P</Avatar>
      </div>
    </div>
  )
}

export default Navbar


