import { useDispatch, useSelector } from 'react-redux'
import TaskCard from '../Task/TaskCard/TaskCard'
import { useEffect } from 'react';
import { fetchTasks } from '../../ReduxToolkit/TaskSlice';
import { getUserProfile } from '../../ReduxToolkit/AuthSlice';


const TaskList = () => {


const dispatch = useDispatch();
const {task} = useSelector(store=>store)

useEffect(()=>{
  dispatch(fetchTasks({}));
  
},[]);

console.log("task",task);
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