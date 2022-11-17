import React, {useEffect} from 'react'

import './App.css'
import {useAppDispatch, useAppSelector} from '../../store/hook'
import {fetchTodosData} from '../../store/slice/todoSlice'
import TodoList from '../TodoList/TodoList'
import {Route, Routes} from 'react-router-dom'
import TodoPage from '../TodoPage/TodoPage'


const App: React.FC = () => {
  const dispatch = useAppDispatch()
  const todosData = useAppSelector(state => state.todos.todos)

  useEffect(() => {
    dispatch(fetchTodosData())
  }, [dispatch])

  return (
    <div className="App">
      <Routes>
        <Route index element={<TodoList todosData={todosData}/>} />
        <Route path='/:todoId' element={<TodoPage />} />
      </Routes>
    </div>
  )
}

export default App