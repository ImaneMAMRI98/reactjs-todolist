import { useState, useEffect } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"
import Todo from "./components/TodoInput"
function App() {
  // since todos is an array we can either define it first then create the state, this way we can either pass nothing or an empty array as argument for usestate. or we can define the array inside the usestate argument
  const [todos, setTodos] = useState([])
  const [todoValue, setTodoValue] = useState ('')



  function persistData (newList) {
    localStorage.setItem ( 'todos', JSON.stringify({todos : newList}) )
  }
  //to add new items to the list
  function addTodos (newItem) {
      const newList = [...todos, newItem]
      persistData(newList)
      setTodos(newList)
  }

  function deleteTodo (index) {
    const newList = todos.filter( (todo, todoIndex) => {
      return todoIndex !== index
    } )
    persistData(newList)
    setTodos(newList)
  }

  function editTodo (index) {
    //when we click on the edit button, the todo goes to the input field and the we can edit it. so basically it gets deleted and reentered 
    const toEdit = todos[index]
    setTodoValue(toEdit)
    deleteTodo(index)

  }
// useEffect takes an arrow function and a dependency array as parameters, it mainly listens to the change of a variable. it is used to store values locally. we can leave the array empty if we want it to start at page load
    useEffect ( () => {
      if (!localStorage) {
        return
      }

      let localTodos = localStorage.getItem('todos')
      if (!localTodos) {
        return
      }

      localTodos = JSON.parse(localTodos).todos
      setTodos(localTodos)

    }, [] )

  return (
    <>
      <TodoInput todoValue = {todoValue} setTodoValue = {setTodoValue} addTodos = {addTodos}  />
      <TodoList editTodo = {editTodo} deleteTodo = {deleteTodo} todos = {todos}/>
    </>
  )
}

export default App

