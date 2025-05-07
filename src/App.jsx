import React, { useEffect, useState } from 'react'
import Card from './components/Card'
import Counter from './components/Counter'
import { toast, ToastContainer } from 'react-toastify'

const App = () => {
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState([])
  const [date, setDate] = useState(['Monday'])
  const [time, setTime] = useState(0)

  const handleChange = (e) => {
     setTodo(e.target.value)

  }
  const handleClick = (e) =>{

     const newTodo = {
      id: Date.now(),
      completed: false,
      text: todo
     }
     if (todo.trim() == ''){
      setTodo('')
      toast.warn("input field is required", {
        position: "top-left",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
         style: {
          width : "200px",
          height :" 40px"
         }
        });
       return}
    setTodos([...todos, newTodo]);
    setTodo('')

    toast.success('Task Added Successfully', {
      position: "top-left",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
       style: {
        width : "200px",
        height :" 40px"
       }
      });
     
  }
  useEffect(()=>{
    setInterval(() => {
      let currentTime = new Date().toLocaleTimeString()
      setTime(currentTime)
    }, 1000);
    let todayDate = new Date().toLocaleDateString()
    setDate(todayDate)
},[date])
  return (
    <div className='w-full min-h-screen bg-[#212121] flex  justify-center'>

      <div className='sm:w-full sm:max-w-xl min-w-[320px] overflow-hidden h-full  flex flex-col items-center sm:px-10 py-4 px-4 rounded'>
                <Counter todos={todos} />
                <div className='text-white font-semibold text-[9px] tracking-widest'>{`Today Date: ${date} ${' '} Time: ${time}`}</div>
       <div className='w-full h-96 overflow-auto content flex flex-col items-center py-5 px-5 rounded shadow shadow-slate-800'>
 
          <div className='flex gap-2 w-full'>

          <input onChange={handleChange} value={todo} className='border-1 text-white border-emerald-500 outline-none rounded w-full placeholder:px-2 p-2 placeholder:text-slate-500 placeholder:font-light' type="text" placeholder='Add Todos...' required/>
          <button  onClick={handleClick} className='rounded px-4 py-2 text-white bg-emerald-500'>Add</button>      
          </div>

          {todos.map((todo,idx) => <Card todos={todos} key={todo.id} index={idx} id={todo.id} completed={todo.completed} text={todo.text} setTodos={setTodos}/>)}
           
       </div>
       </div>
       
       <ToastContainer>


       </ToastContainer>
       <h1 className='absolute bottom-10 text-white text-sm font-extralight'>Dev with '&#10084;' by kishan</h1>
    </div>
  )
}

export default App
