import React from 'react'
import { Todoitem } from './Todoitem'

export const Todos = (props) => {
  
  return (
    <div className='container' >
      <h3 className='text-center my-3'>Todos list</h3>
      {props.todos.length===0?<h3> The todos list is empty </h3>:
      props.todos.map((todo)=>{
        return (
        <>
        
        <Todoitem  onDelete={props.onDelete} key={props.todo.sno} todo={todo}/>
        </>)
      })}
      
    </div>
  )
}
