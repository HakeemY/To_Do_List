import { useState } from 'react'

const TodoListForm = props => {
    const {stateUpdater} = props
    const [toDo, setToDo] = useState("")
    const [completedToDo, setCompletedToDo] = useState(false)

    const createToDoList = (e) => {
        e.preventDefault()
        
        let newValue={
            toDo,
            completedToDo
        }

        stateUpdater(newValue)
        setToDo("")
    }


    return (
        <div className='formBox'>
            <form onSubmit={createToDoList}>
                <div>
                    <input id="toDo" className="Input" value={toDo} type="text" onChange={ (e) => setToDo(e.target.value) } />
                </div>
                <button className='submit'>Add</button>
            </form>
        </div>
    )
}

export default TodoListForm