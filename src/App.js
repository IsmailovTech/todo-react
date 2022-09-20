import { useState, useEffect } from 'react'
import './App.css'
import Form from './components/Form'
import Header from './components/Header'
import TodoList from './components/TodoList'

function App() {
  const initialState = JSON.parse(localStorage.getItem('todos')) || []
  const [input, setInput] = useState('')
  const [todos, setTodos] = useState(initialState)
  const [editTodo, setEditTodo] = useState(null)

  let newDate = new Date().toLocaleString()

  const handleClear = () => {
    setTodos([])
  }

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  return (
    <div className="w-full h-screen bgGradient flex items-center justify-center ">
      <div className="relative w-full h-full sm:w-2/6 sm:h-2/3 shadow-black sm:bg-blue-200bg-gradient-to-r  from-sky-900 to-blue-900 overflow-y-scroll shadow-2xl rounded-md p-4  flex flex-col items-center ">
        <Header />
        <Form
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
          editTodo={editTodo}
          setEditTodo={setEditTodo}
          newDate={newDate}
        />
        <TodoList
          todos={todos}
          setTodos={setTodos}
          setEditTodo={setEditTodo}
          newDate={newDate}
        />
        {todos.length > 1 ? (
          <button
            onClick={handleClear}
            className="absolute bottom-4 right-4 bg-red-500 py-1 px-2 text-white rounded-sm text-sm"
          >
            Clear all
          </button>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}

export default App
