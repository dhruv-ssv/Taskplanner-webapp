
import './App.css';
import Header from './MyComponents/Header';
import {Footer} from './MyComponents/Footer';
import {Todos} from './MyComponents/Todos';
import {Todoitem} from './MyComponents/Todoitem';
import React, { useState } from 'react';
import { Addtodo } from './MyComponents/Addtodo';

function App() {
  const addtodo=(title,desc)=>{
    console.log("I am adding value to log",title,desc)
    let sno=todos[todos.length-1].sno+1;
    const myTodo={
      sno:sno,
      title:title,
      desc:desc
    }
    setTodos([...todos,myTodo]);
    console.log(myTodo)
  }
  const [todos,setTodos]=useState([
    {
      sno:1,
      title:"Go to market",
      desc:'You need to go market'

    },
    {
      sno:2,
      title:"Go to mall",
      desc:'You need to go mall'

    },
    {
      sno:3,
      title:"Go to movie",
      desc:'You need to go movie'

    }
  ])
  const onDelete = (todo) =>{
    console.log('I am on delete',todo )
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
  }
  return (
    <>
          <Header title='Dhruv' searchbar={true}/>
          <Addtodo addtodo={addtodo}/>
          <Todos todos={todos} onDelete={onDelete}/>
          <Footer/>
          
          </>
        
  );
}

export default App;
