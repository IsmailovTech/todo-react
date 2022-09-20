import React from 'react'
import done from '../assets/icons/done.png'
import deleted from '../assets/icons/deleted.png'
import edit from '../assets/icons/edit.png'
import toast from 'react-hot-toast'

const TodoList = ({ todos, setTodos, setEditTodo, newDate }) => {
  const handleCompleted = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed }
        }
        return item
      }),
    )
  }

  const handleEditTodo = ({ id }) => {
    const findTodo = todos.find((todo) => todo.id === id)
    setEditTodo(findTodo)
  }

  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id))
    toast.error('deleted')
  }

  return (
    <div className="mt-3">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="my-3 list-none flex items-center justify-center"
        >
          <input
            type="text"
            value={todo.title}
            onChange={(e) => e.preventDefault()}
            readonly="readonly"
            className={
              todo.completed
                ? ' font-semibold w-[70%] line-through bg-transparent border-none outline-none '
                : 'font-semibold  w-[70%] bg-transparent border-none outline-none'
            }
          />
          <span
            className={todo.completed ? 'text-xs line-through ' : 'text-xs '}
          >
            {todo.newDate}
          </span>
          <button className="w-8 h-8 " onClick={() => handleEditTodo(todo)}>
            <img src={edit} alt="logo" />
          </button>
          <button className="w-8 h-8 mx-2" onClick={() => handleDelete(todo)}>
            <img src={deleted} alt="logo" />
          </button>
          <button className="w-8 h-8" onClick={() => handleCompleted(todo)}>
            <img src={done} alt="logo" />
          </button>
        </li>
      ))}
    </div>
  )
}

export default TodoList
