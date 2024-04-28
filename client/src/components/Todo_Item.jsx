import React, { useState } from 'react'
import Edittodo from './Edittodo'
import { useHistory } from "react-router-dom";

window.$index = -1
window.$index2 = -1

function Todos_item(props) {

    const [active, setactive] = useState(!props.todoitem.active)

    let history = useHistory();

    return (
        <>
            <div className="continer">

                {props.todoitem.active === true ?
                    <>
                        < ><h3 className="my-3">{props.todoitem.title}</h3></>
                        <p>{props.todoitem.desc}</p>
                        <p>On {props.todoitem.date} time taken {props.todoitem.time}</p>
                    </>
                    :
                    <>
                        < ><del><h3 className="my-3">{props.todoitem.title}</h3></del></>
                        <p><del>{props.todoitem.desc}</del></p>
                        <p><del>On {props.todoitem.date} time taken {props.todoitem.time}</del></p>
                    </>

                }
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id={props.todoitem.id} checked={active} onChange={(e) => { setactive(e.target.checked); props.active(props.todoitem._id, active); }} />
                    <label className="form-check-label" htmlFor="exampleCheck1">Done</label>
                </div>
                <span className="d-inline-block" tabIndex="0" data-toggle="tooltip" title="Please make the todo active to active the button">
                    <button className="btn btn-sm btn-primary " data-bs-dismiss="modal" disabled={active} onClick={() => { history.push(`/edit/${props.todoitem._id}`); }} >Edit</button>
                </span>
                <button className="btn btn-sm btn-danger mx-3" data-bs-dismiss="modal" onClick={() => { props.onDelete(props.todoitem._id) }}>Delete</button>
            </div>
            <hr />
        </>
    )
}

export default Todos_item