import React from 'react'
import Todo_Item from "./Todo_Item";

function Todo(props) {

    return (
        <div className = "container">
            <h2 className="my-3 text-center">Todo List</h2>
            {props.todo.length === 0 ?
                <div className="card">
                    <div className="card-body">
                        There is <strong> No </strong> Todos to display.
                    </div>
                </div>
                : props.todo.map((i) => {
                    return <Todo_Item length = {props.todo.length} todo = {props.todo} todoitem={i} key={i.id} onDelete={props.onDelete} active={props.active} onEdit={props.onEdit}/>
                })}
        </div>
    )
}

export default Todo