import React, { useEffect } from 'react'
import TaskCard from '../Task/TaskCard/TaskCard'

const TaskList = () => {


const dispatch = useEffect();



  return (
    <div className='w-[67vw]'>
        <div className='space-y-3'>
            {
                [1,1,1,1].map((item)=><TaskCard/>)
            }
        </div>
    </div>
  )
}

export default TaskList