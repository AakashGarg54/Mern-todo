// import Header from "./Components/Header";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Todo from "./components/Todo";
import Footer from "./components/Footer";
import Addtodos from "./components/Addtodo";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Edittodo from "./components/Edittodo";
import api from "./API/API";

function App() {
  const [todo, setTodo] = useState([]);

  const getData = async () => {
    const response = await api.get("/todo");
    return response.data;
  };

  useEffect(() => {
    const getallTodos = async () => {
      const response = await getData();
      setTodo(response);
    };

    getallTodos();
  }, [2]);

  const addTodo = async (newTodo) => {
    const newTODO = JSON.stringify(newTodo);
    const response = await api.post("/todo", newTODO);
    setTodo([...todo, response.data]);
  };

  const editTodo = async (id, newTodo) => {
    const response = await api.put(`/todo/${id}`, newTodo);
    setTodo(await getData());
  };

  const onDelete = async (id) => {
    if (id === undefined) {
      alert("Something went wrong");
    } else {
      const response = await api.delete(`/todo/${id}`);
      setTodo(
        todo.filter((e) => {
          return e.id !== id;
        })
      );
    }
  };

  const activetodos = async (id, active) => {
    const newTODO = todo.map((e) => {
      if (e.id === id) {
        return { ...e, active: active };
      } else {
        return e;
      }
    });

    const response = await api.put(`/todo/${id}`, newTODO[id - 1]);
    setTodo(await getData());
  };

  return (
    <div className="App">
      <Router>
        <Header title="My TODO List" searchBar={false} />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/edit/:id">
            <Edittodo edit={editTodo} onDelete={onDelete} todo={todo} />
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
