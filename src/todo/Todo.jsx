 import { useEffect, useState } from 'react'
import { FaPlus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";

function Todo() {
  const [inputTask , setInputTask] = useState('');
  const [addTodo , setAddTodo] = useState([]);

 const handleAddtodo = () =>{
   if(inputTask.trim() !== ''){
    setAddTodo([...addTodo , inputTask]) ;
    setInputTask('');
   }
 }
 const handleDeleteTodo = (index) =>{
  const deleteTOdo = addTodo.filter( (_,i) => i !== index);
  setAddTodo(deleteTOdo);
 }

 useEffect(()=>{
    localStorage.setItem('addTodo', JSON.stringify(addTodo)); 
 },[addTodo] )
  
  return (
    <div>
      <div className='flex justify-between items-center gap-1 mt-10 '>
        <input placeholder='add your todo task' value={inputTask} onChange={(e)=>setInputTask(e.target.value)} className='w-96 p-5 rounded-lg ' />
        <button onClick={handleAddtodo} className='rounded-lg bg-slate-700  text-2xl p-5'><FaPlus className='text-blue-700'/></button>
      </div>
      <div className='demo mt-9' >
         {
          addTodo?.map((tasks,index) => (
           <div key={index}>
            <div  className='flex justify-between items-center bg-slate-700 p-5  rounded-lg'>
              <p className='text-white'>{tasks}</p> 
              <button onClick={()=>handleDeleteTodo(index)}><MdDelete className='text-blue-700 flex justify-end items-center' /></button>
            </div> 
           
            <br />
           </div>  
          ))
         }
        <br/>
      </div>
    </div>
  )
}

export default Todo