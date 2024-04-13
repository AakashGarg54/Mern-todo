import React,  { useState } from 'react'
import AddTodos from './Addtodo'
import { useHistory } from "react-router-dom";

window.$index = -1
window.$index2 = -1

function Todos_item(props) {

    let history = useHistory();

    const [active, setactive] = useState(!props.todoitem.active)

    const index = () => {
        
        for (var i = 0; i < props.length; i++) {
            if (props.todo[i].sno === props.todoitem.sno) {
                window.$index = i + 1
                window.$index2 = i
                return <h3 className="my-3">{i + 1}. {props.todoitem.title}</h3>;
            }
        }
        return <h3>{-1}. {props.todoitem.title}</h3>

    }

    return (
        <>
            <div className="continer">

                {props.todoitem.active === true ?
                    <>
                        < >{index()}</>
                        <p>{props.todoitem.desc}</p>
                        <p>On {props.todoitem.date} time taken {props.todoitem.time}</p>
                    </>
                    :
                    <>
                        < ><del>{index()}</del></>
                        <p><del>{props.todoitem.desc}</del></p>
                        <p><del>On {props.todoitem.date} time taken {props.todoitem.time}</del></p>
                    </>

                }
                {/* {props.todoitem.active === true ?
                    <>
                        <p>{props.todoitem.desc}</p>
                        <p>On {props.todoitem.date} time taken {props.todoitem.time}</p>
                    </>
                    :
                    <>  
                        <p><del>{props.todoitem.desc}</del></p>
                        <p><del>On {props.todoitem.date} time taken {props.todoitem.time}</del></p>
                    </>

                } */}
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id={props.todoitem.sno} checked={active} onChange={(e) => {  setactive(e.target.checked); index(); props.active(window.$index2); }}/>
                    <label className="form-check-label" htmlFor="exampleCheck1">Done</label>
                </div>
                <button className="btn btn-sm btn-primary " data-bs-dismiss="modal">Edit</button>
                <button className="btn btn-sm btn-danger mx-3" data-bs-dismiss="modal">Delete</button>
            </div>
            <hr />
        </>
    )
}

export default Todos_item