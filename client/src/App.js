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
    const response = await api.get("/api/list");
    return response.data.todo;
  };

  useEffect(() => {
    const getallTodos = async () => {
      const response = await getData();
      setTodo(response);
    };

    getallTodos();
  }, [2]);

  const addTodo = async (newTodo) => {
    const response = await api.post("/api/add", newTodo);
    setTodo([...todo, response.data]);
  };

  const editTodo = async (id, newTodo) => {
    await api.put(`/api/edit/${id}`, newTodo);
    setTodo(await getData());
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
      <Router>
        <Header title="My TODO List" searchBar={false} />
        <Switch>
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
