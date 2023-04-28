import logo from './logo.svg';
import './App.css';
import './Style.css';
import Left from './components/left';
import Right from './components/right';
import Header from './components/header';
import Container from './components/Container';
import Footer from './components/Footer';
import { useState } from 'react';
import Add_todos from './components/add_todos';
import Aboutus from './components/aboutus';
import Contactus from './components/contactus';
import { useEffect } from 'react';


import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from 'react-router-dom';


function App() {

  let initodos;
  if (localStorage.getItem("todos") === null) {
    initodos = [];
  }
  else {
    initodos = JSON.parse(localStorage.getItem("todos"));
  }

  // useState[todos,changetodos]={}
  const Delete = (todo) => {
    console.log("delete", todo);
    changetodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  }

  const addtodo = (title, desc) => {
    // console.log(title,desc);
    let sno1;
    if (todos.length == 0) {
      sno1 = 0;
    }
    else {
      sno1 = todos[todos.length - 1].sno + 1;
    }

    const newtodo = {
      sno: sno1,
      title: title,
      desc: desc

    }
    changetodos([...todos, newtodo]);


  }

  // const [todos,changetodos]=(todos1);
  //   [
  //     {
  //       sno:1,
  //       title:"go to the market",
  //       desc:"you have to go to the market "
  //     },
  //     {
  //       sno:2,
  //       title:"go to the school",
  //       desc:"you have to go to the school"
  //     },
  //     {
  //       sno:3,
  //       title:"go to the park",
  //       desc:"you have to go to the park "
  //     }
  //   ]
  // )
  let todos1 = [
    {
      sno: 1,
      title: "go to the market",
      desc: "you have to go to the market "
    },
    {
      sno: 2,
      title: "go to the school",
      desc: "you have to go to the school"
    },
    {
      sno: 3,
      title: "go to the park",
      desc: "you have to go to the park "
    },
  ];

  // before local storage and useeffect use this is use for store intered previous todos and reflect after if page reload becouse it will store permanet in same path(todos react app) it will work if we reload,open new tab and open after switch off
  // const [todos,changetodos]=useState(todos1);
  const [todos, changetodos] = useState(initodos);

  // if todos change than use effect function occur
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, ([todos]));



  return (
    <>
      {/* withoud routing */}
      {/* <Header/> */}
      {/* <h1>{todos[0].title}</h1> */}
      {/* <Add_todos addtodo={addtodo}/>
    <hr />
    <Container todos={todos} Delete={Delete}/>
    <Footer/> */}


      {/* with routing */}
      <Router>
        <Header />
        <Routes>
         <Route exact path='/' element={
          
            <>
            <Add_todos addtodo={addtodo} />
        <hr />
        <Container todos={todos} Delete={Delete} />
            </>
          
         }>
         </Route>
         <Route exact path='/aboutus' element={<Aboutus/>} >
          {/* <Aboutus/> */}
         </Route>
         <Route exact path='/contactus' element={ <Contactus/>}>
          {/* <Contactus/> */}
         </Route>
       
        </Routes>
        <Footer />
      </Router>



    </>



  );
}

export default App;
