import React, { useState } from 'react'

const Add_todos = ({addtodo}) => {
  const [title,settitle]=useState("");
  const [desc,setdesc]=useState("");
    const submit=(e)=>{
        e.preventDefault()
        if(!title||!desc)
        {
            alert("title or desc can not be blank");
        }
        else{
        addtodo(title,desc);
        }
        //remove input from input
        settitle("");
        setdesc("");
        
    }
  return (

     <div className='container'>
        <h1>Add todos</h1>
        <form onSubmit={submit}>
        <label htmlFor="title">Todo title</label>
        <input type="text" value={title} onChange={(e)=>{settitle(e.target.value)}} name="title" id="title" />
        <label htmlFor="desc">Todo desc</label>
        <input type="text" value={desc} onChange={(e)=>{setdesc(e.target.value)}} name="desc" id="desc" />
       <center><button id='submit' type="submit">add todo</button></center> 

        </form>
      
    </div>
  )
}

export default Add_todos
