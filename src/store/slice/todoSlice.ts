import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import {ITodo, ITodosInitialState} from '../../types/ITodo'


export const fetchTodosData = createAsyncThunk<ITodo[], undefined, { rejectValue: string }>(
  'todos/fetchTodosData',
  async function (_, {rejectWithValue}) {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')

    if (!response.ok) {
      rejectWithValue('Server error')
    }

    return await response.json()
  },
)


const initialState: ITodosInitialState = {
  todos: [],
  status: '',
  error: null,
}


const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    deleteTodo(state, action: PayloadAction<number>) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload)
    },
    toggleTodo(state, action: PayloadAction<number>) {
      const findedTodo = state.todos.find(todo => todo.id === action.payload)
      if (findedTodo) {
        findedTodo.completed = !findedTodo.completed
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodosData.pending, (state) => {
        state.status = 'pending'
        state.error = null
      })
      .addCase(fetchTodosData.fulfilled, (state, action) => {
        state.status = 'fulfilled'
        state.error = null
        state.todos = action.payload
      })
      .addCase(fetchTodosData.rejected, (state) => {
        state.error = 'rejected'
      })
  },
})

export const {deleteTodo, toggleTodo} = todosSlice.actions

export default todosSlice.reducer