import React, { useState } from 'react'
import { useHistory, useParams } from "react-router-dom";


function Edittodo(props) {


  let history = useHistory();
  const idPara = useParams()._id;

  const todo = props.todo.find((e) => e._id === idPara)

  const [Title, setTitle] = useState(todo.title)
  const [Desc, setDesc] = useState(todo.desc)
  const [Time, setTime] = useState(todo.time)
  const [Date, setDate] = useState(todo.date)

  const submit = (e) => {
    e.preventDefault()
    if (!Title || !Desc) {
      alert("Title & Description cannot be empty")
    }
    else {
      const newTodo = {
        title: Title,
        desc: Desc,
        time: Time,
        date: Date,
        active: true,
      };
      props.edit(idPara, newTodo);
    }

    setTitle("")
    setDesc("")
    setTime("")
    setDate("")
    history.push("/");
  }


  return (
    <div className="container my-4">
      <h3>Edit Todos</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input type="text" className="form-control" id="title" value={Title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter your todos title" />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">Description</label>
          <textarea type="text" className="form-control" placeholder="Enter your todos description" onChange={(e) => setDesc(e.target.value)} value={Desc} id="desc"></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="Time" className="form-label">Time</label>
          <input type="time" className="form-control" id="time" value={Time} onChange={(e) => setTime(e.target.value)} placeholder="Enter your todos time" />
        </div>

        <div className="mb-3">
          <label htmlFor="Date" className="form-label">Date To start</label>
          <input type="date" className="form-control" id="date" value={Date} onChange={(e) => setDate(e.target.value)} placeholder="Enter your todos date " />
        </div>
        <button type="submit" className="btn btn-primary">
          Edit
        </button>
      </form>
    </div>
  )
}

export default Edittodo