import React from 'react'

const Todo = ({todos}) => {
  return (
    <div>
        {/* {
            console.log(todos)
        } */}
    <h3>{todos[0].title}</h3>
    <p>{todos[0].desc}</p>
    
    </div>
  )
}

export default Todo
