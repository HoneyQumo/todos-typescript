import React from 'react'

import './TodoList.css'
import TodoItem from '../TodoItem/TodoItem'
import {ITodo} from '../../types/ITodo'


interface ITodoListProps {
  todosData: ITodo[]
}

const TodoList: React.FC<ITodoListProps> = ({todosData}) => {
  return (
    <div className='TodoList'>
      {todosData.map((todo) => (
        <TodoItem key={todo.id} title={todo.title} id={todo.id} completed={todo.completed} />
      ))}
    </div>
  )
}

export default TodoList