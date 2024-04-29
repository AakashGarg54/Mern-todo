import React from 'react'
import TodoItem from "./TodoItem";

function Todo(props) {

    return (
        <div className="container" style={{ minHeight: "77.8vh" }}>
            <h2 className="my-3 text-center">Todo List</h2>
            {props.todo.length === 0 ?
                <div className="card">
                    <div className="card-body">
                        There is <strong> No </strong> Todos to display.
                    </div>
                </div>
                : props.todo.map((i) => {
                    return <TodoItem length={props.todo.length} key={i._id} todo={props.todo} todoitem={i} id={i._id} onDelete={props.onDelete} active={props.active} onEdit={props.onEdit} />
                })
            }
        </div>
    )
}

export default Todo