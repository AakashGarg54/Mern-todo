// import Header from "./Components/Header";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Todo from "./components/Todo";
import Footer from "./components/Footer";
import Addtodos from "./components/Addtodo";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Edittodo from "./components/Edittodo";
import axios from "axios";

function App() {
  const Itodo = [];

  useEffect(() => {
    axios
      .get("http://localhost:3000/todo")
      .then((res) => {
        setTodo(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  const [todo, setTodo] = useState(Itodo);

  const addTodo = (title, desc, time, date) => {
    let id;

    if (todo.length === 0) {
      id = 0;
    } else {
      id = todo[todo.length - 1].id + 1;
    }

    const newTodo = {
      id: id,
      title: title,
      desc: desc,
      time: time,
      date: date,
      active: true,
    };

    setTodo([...todo, newTodo]);
  };

  const editTodo = (title, desc, time, date, todoId) => {
    console.log(title, todoId);

    /*
    
    setTodo(todo.map((todo) =>{
      if(todo.id === todoId){
        todo.active =!todo.active
      }
      return {...todo, active:false}
    }))

    */
  };

  const onDelete = (_todo) => {
    if (_todo === undefined) {
      alert("Something went wrong");
    } else {
      setTodo(
        todo.filter((e) => {
          return e !== _todo;
        })
      );
    }
  };

  const activetodos = (id) => {
    console.log(todo[id]);

    todo[id].active = !todo[id].active;

    console.log(todo[id]);

    axios
      .put(`http://localhost:3000/todo/${id}`, todo[id].active)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="App">
      <Router>
        <Header title="My TODO List" searchBar={false} />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/edit">
            <Edittodo addTodo={addTodo} onDelete={onDelete} todo={todo} />
          </Route>
          <Route path="/add">
            <Addtodos addTodo={addTodo} onDelete={onDelete} todo={todo} />
          </Route>
          <Route path="/">
            <Todo
              todo={todo}
              onDelete={onDelete}
              active={activetodos}
              onEdit={editTodo}
            />
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
