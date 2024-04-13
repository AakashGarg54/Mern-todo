// import Header from "./Components/Header";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Todo from "./components/Todo";
import Footer from "./components/Footer";
import Addtodos from "./components/Addtodo";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const onDelete = () => {
    console.log("Working!!");
  };

  const addTodo = (title, desc, time, date) => {
    let sno;

    if (todo.length === 0) {
      sno = 0;
    } else {
      sno = todo[todo.length - 1].sno + 1;
    }
    console.log(sno + " " + title + " " + desc + " " + time + " " + date);
    const newTodo = {
      sno: sno,
      title: title,
      desc: desc,
      time: time,
      date: date,
      active: true,
    };

    setTodo([...todo, newTodo]);
  };

  const activetodos = (index) => {
    todo[index].active = !todo[index].active;
  };

  const Itodo = [
    {
      active: true,
      date: "2021-06-07",
      desc: "Have completed the three-course of Simplilearn",
      sno: 1,
      time: "08:00",
      title: "Simplilearn",
    },
    {
      active: false,
      date: "2021-06-07",
      desc: "Have completed the three-course of Simplilearn",
      sno: 2,
      time: "08:00",
      title: "Simplilearn",
    },
  ];

  const [todo, setTodo] = useState(Itodo);

  return (
    <div className="App">
      <Router>
        <Header title="My TODO List" searchBar={false} />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/add">
            <Addtodos addTodo={addTodo} onDelete={onDelete} todo={todo} />
          </Route>
          <Route path="/">
            <Todo todo={todo} onDelete={onDelete} active={activetodos} />
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
