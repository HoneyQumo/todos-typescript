import React from 'react'

import './TodoItem.css'
import {ITodo} from '../../types/ITodo'
import {deleteTodo, toggleTodo} from '../../store/slice/todoSlice'
import {useAppDispatch} from '../../store/hook'


const TodoItem: React.FC<ITodo> = ({id, title, completed}) => {
  const dispatch = useAppDispatch()

  function handleButtonClick(id: number) {
    dispatch(deleteTodo(id))
  }

  function handleInputChange(id: number) {
    dispatch(toggleTodo(id))
  }

  return (
    <div className="TodoItem">
      <input type="checkbox" checked={completed} onChange={() => handleInputChange(id)} />
      <p className='TodoItem__text'>{id}.{title}</p>
      <button onClick={() => handleButtonClick(id)} >X</button>
    </div>
  )
}

export default TodoItem