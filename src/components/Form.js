import React, { useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { toast, Toaster } from 'react-hot-toast'

const Form = ({
  input,
  setInput,
  todos,
  setTodos,
  editTodo,
  setEditTodo,
  newDate,
}) => {
  const updateTodo = (title, id, completed) => {
    const newTodo = todos.map((todo) =>
      todo.id === id ? { title, id, completed, newDate } : todo,
    )
    setTodos(newTodo)
    setEditTodo('')
    toast.success('successfully updated')
  }

  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.title)
    } else {
      setInput('')
    }
  }, [setInput, editTodo])

  const onInputChange = (e) => {
    setInput(e.target.value)
  }

  const onFormSubmit = (e) => {
    e.preventDefault()

    if (!editTodo) {
      setTodos([
        ...todos,
        {
          id: uuidv4(),
          title: input,
          completed: false,
          newDate: newDate,
        },
      ])
      setInput('')
      toast.success('successfully added')
    } else {
      updateTodo(input, editTodo.id, editTodo.completed)
    }
  }

  return (
    <div className="w-full mt-5 sm:m-0 ">
      <form
        onSubmit={onFormSubmit}
        className="h-full flex justify-between  sm:block"
      >
        <input
          type="text"
          placeholder="Add Todo"
          className="py-3 px-2 rounded-md shadow-xl w-2/3"
          required
          value={input}
          onChange={onInputChange}
        />

        <button
          type="submit"
          className="text-white font-semibold bg-purple-500 rounded-lg h-full w-28"
        >
          {editTodo ? 'Update' : 'Add'}
        </button>
        <Toaster position="bottom-right" />
      </form>
    </div>
  )
}

export default Form
