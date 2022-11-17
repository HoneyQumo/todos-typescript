import React from 'react'
import {useParams} from 'react-router-dom'
import {useAppSelector} from '../../store/hook'


const TodoPage = () => {
  const todosData = useAppSelector(state => state.todos.todos)
  const {todoId} = useParams()

  const findedTodo = todosData.find(todo => todo.id === Number(todoId))

  if (findedTodo)
    return (
      <div>
        <h2> Задача №{findedTodo.id}</h2>
        <p>Что сделать: {findedTodo.title}</p>
      </div>
    )
  else
    return (
      <div>Нет такой задачи...</div>
    )
}

export default TodoPage