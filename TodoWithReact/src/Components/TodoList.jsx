import Form from './Form'
import Display from "./Diplay"
import { useEffect, useState } from 'react'

const TodoList = () => {
    // console.log("Todo list comp mounted")
    // console.log(todos)
    const[todos, setTodos] = useState([])
    const[itemToBeEdited, setItemToBeEdited] = useState({})

  console.log(itemToBeEdited)
  return (
    <div className='flex'>
        <Form setItemToBeEdited={setItemToBeEdited} itemToBeEdited={itemToBeEdited} todos={todos} setTodos={setTodos} />
        <Display setItemToBeEdited={setItemToBeEdited} todos={todos} setTodos={setTodos}/>
    </div>
  )
}

export default TodoList