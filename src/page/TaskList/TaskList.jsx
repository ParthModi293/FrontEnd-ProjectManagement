
import TaskCard from '../Task/TaskCard/TaskCard'

import { getUserProfile } from '../../ReduxToolkit/AuthSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchTasks } from '../../ReduxToolkit/TaskSlice';


const TaskList = () => {

const dispatch = useDispatch();
const {task} = useSelector(store=>store)

useEffect(()=>{
  dispatch(fetchTasks({}))
}, [])

console.log("task",task);
  return (
    <div className='w-[67vw]'>
        <div className='space-y-3'>
            {
                task.tasks.map((item)=><TaskCard item={item}/>)
            }
        </div>
    </div>
  )
}

export default TaskList