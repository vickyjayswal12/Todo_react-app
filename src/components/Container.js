import React from 'react'
import Left from './left'
import Right from './right'
import Todo from './todo'
import Todo_item from './Todo_item'
const Container = ({todos,Delete}) => {
  return (
    <div className='container1'>
      {/* <Left/>
    <Right/> */}
    {/* {console.log(todos)} */}
    {/* <p>{todos[0].title}</p> */}
          <h1>Todo list</h1>
          {todos.length==0?"no todos available":
        
          todos.map((e)=>{
           return(
           <Todo_item key={e.sno} todos={e} Delete={Delete} />
          )
          }
          )
        
      }
       {/* <Todo_item todos={todos[0]} /> */}
    
    </div>
  )
}

export default Container
