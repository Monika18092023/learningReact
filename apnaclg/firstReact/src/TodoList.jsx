import { useState } from "react"

export default function TodoList(){
    const [todos, setTodos]=  useState([])
    const [newTodo, setNewTodo]= useState("")
    let addNewTask=()=>{
       setTodos([...todos, newTodo])
       setNewTodo("")
    }
    let updateTask=(event)=>{
         setNewTodo(event.target.value)
    }
    return <div>
        <input type="text" placeholder="add a text" value={newTodo} onChange={updateTask}/> <br/>
        <button onClick={addNewTask}>Add Task</button>
        <hr />
        <h3>TodoList</h3>
        <ul>
            {
                todos.map((todo,index)=>(
                    <li key={index}>{todo}</li>
                ))
            }
        </ul>
    </div>
}