import React, {useEffect} from 'react'

import './App.css'
import {useAppDispatch, useAppSelector} from '../../store/hook'
import {fetchTodosData} from '../../store/slice/todoSlice'
import TodoList from '../TodoList/TodoList'



const App: React.FC = () => {
  const dispatch = useAppDispatch()
  const todosData = useAppSelector(state => state.todos.todos)

  useEffect(()=> {
    dispatch(fetchTodosData())
  }, [dispatch])



  return (
    <div className='App'>
      <TodoList todosData={todosData} />
    </div>
  );
};

export default App;