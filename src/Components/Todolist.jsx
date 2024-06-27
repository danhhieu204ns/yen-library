import { useState } from "react";


const TotoList = () => {
    const [todo, setTodo] = useState();
    const [todoList, setTodoList] = useState([])

    
    const handleOnChange = (newTodo) => {
        setTodo(newTodo)
    }
    const handeOnClick = () => {
        setTodoList([...todoList, todo])
        setTodo('')
    }

    return (
        <>
            <h1>Todo List Hehe</h1>
            <input type="text" onChange={(e) => handleOnChange(e.target.value)} value={todo}></input>
            
            <button onClick={handeOnClick}>Submit</button>

            <ul>
                {todoList.map((item) => {
                    return (
                        <li key = {Math.random()}>{item}</li>
                    )
                })}
            </ul>
        </>
    )
}

export default TotoList;