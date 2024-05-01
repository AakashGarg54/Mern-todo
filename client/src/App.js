// import Header from "./Components/Header";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/todos/Header";
import About from "./components/todos/About";
import Todo from "./components/todos/Todo";
import Footer from "./components/todos/Footer";
import Addtodos from "./components/todos/Addtodo";
import Edittodo from "./components/todos/Edittodo";

import Login from "./components/login/Login";

import api from "./API/API";
import ForgetPassword from "./components/login/ForgetPassword";
import Signup from "./components/login/Signup";

function App() {
  const [todo, setTodo] = useState([]);

  const getData = async () => {
    try {
      const response = await api.get("/api/list");
      return response.data.todo;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getallTodos = async () => {
      try {
        const response = await getData();
        setTodo(response);
      } catch (error) {
        console.log(error);
      }
    };

    getallTodos();
  });

  const addTodo = async (newTodo) => {
    try {
      const response = await api.post("/api/add", newTodo);
      setTodo([...todo, response.data]);
    } catch (error) {
      alert(error);
    }
  };

  const editTodo = async (id, newTodo) => {
    try {
      await api.put(`/api/edit/${id}`, newTodo);
      setTodo(await getData());
    } catch (error) {
      alert(error);
    }
  };

  const onDelete = async (_id) => {
    if (_id === undefined) {
      alert("Something went wrong");
    } else {
      await api.delete(`/api/delete/${_id}`);
      setTodo(
        todo.filter((e) => {
          return e._id !== _id;
        })
      );
    }
  };

  const activetodos = async (id, active) => {
    await api.put(`/api/active/${id}`, { active: active });
    setTodo(await getData());
  };

  return (
    <div className="App">
      <Router path="/hehe">
        <Header title="My TODO List" searchBar={true} />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/forgetPass">
            <ForgetPassword />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/edit/:_id">
            <Edittodo edit={editTodo} todo={todo} />
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
