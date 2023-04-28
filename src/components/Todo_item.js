import React from 'react'

const Todo_item = ({todos,Delete}) => {
  return (
    <div className='todos_item'>
      <h3>{todos.title}</h3>
      <p>{todos.desc}</p>
      <center><button onClick={()=>{Delete(todos)}}>delete</button></center>
      <hr />
    </div>
  )
}

export default Todo_item
