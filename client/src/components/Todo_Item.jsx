import React,  { useState } from 'react'
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
                        < ><h3 className="my-3">{props.todoitem.id}. {props.todoitem.title}</h3></>
                        <p>{props.todoitem.desc}</p>
                        <p>On {props.todoitem.date} time taken {props.todoitem.time}</p>
                    </>
                    :
                    <>
                        < ><del><h3 className="my-3">{props.todoitem.id}. {props.todoitem.title}</h3></del></>
                        <p><del>{props.todoitem.desc}</del></p>
                        <p><del>On {props.todoitem.date} time taken {props.todoitem.time}</del></p>
                    </>

                }
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id={props.todoitem.id} checked={active} onChange={(e) => {setactive(e.target.checked); props.active(props.todoitem.id-1); }}/>
                    <label className="form-check-label" htmlFor="exampleCheck1">Done</label>
                </div>
                <button className="btn btn-sm btn-primary " data-bs-dismiss="modal" onClick={()=>{history.push("/edit");}}>Edit</button>
                <button className="btn btn-sm btn-danger mx-3" data-bs-dismiss="modal" onClick={() => { props.onDelete(props.todoitem) }}>Delete</button>
            </div>
            <hr />
        </>
    )
}

export default Todos_item