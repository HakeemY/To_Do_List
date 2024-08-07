import { useState } from "react";

const TodoList = (props) => {
    const {todoListState} = props
    const {setTodoListState} = props


    const deleteToDo = (indexToDelete) => {
        const newToDos = todoListState.filter((obj, idx) => idx !== indexToDelete)
        setTodoListState(newToDos)
    }

    const handleCompleted = (checkIdx) => {
        const newToDos = todoListState.map((obj, idx) => idx === checkIdx? {...obj, completedToDo: !obj.completedToDo}: obj)
        setTodoListState(newToDos)
    }

    return (
        <div className="NameList">
        <h3>To Do Form List</h3>
        <div className="List">            
            {
                todoListState.map((obj, index) => (
                    <div key={index} className="row">
                        <p className={`${(obj.completedToDo === true )? 'Checked': ''}`}>{obj.toDo}</p>
                        <input id="completedToDo" type="checkbox" onChange={() => handleCompleted(index)}/>
                        <button className="Delete" onClick={() => deleteToDo(index)}>Delete</button>
                    </div>
                ))
            }
        </div>
        </div>
    )
}

export default TodoList