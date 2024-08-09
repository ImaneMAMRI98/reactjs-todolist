import { useState } from "react"

export default function TodoInput (props) {
    const {addTodos, todoValue, setTodoValue} = props
    const [itemValue, setItemValue] = useState('')
    return (
        <header>
            <input value = {itemValue} 
            onChange={(e) => {
                setItemValue (e.target.value)
            }}
            placeholder="Enter To Do ..." />
            <button onClick={ () => {
                addTodos ( itemValue )
                setItemValue('')
            }}>
                Add</button>
        </header>
    )
}
