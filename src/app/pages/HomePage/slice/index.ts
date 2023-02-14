import { createSlice, nanoid } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { RootState } from 'types/RootState'
import { TodoItem } from './types'

const todosSlice = createSlice({
  name: 'todos',
  initialState: [
    {
      id: nanoid(),
      text: 'Hello',
    },
  ] as TodoItem[],
  reducers: {
    addTodo: {
      reducer: (state, action: PayloadAction<TodoItem>) => {
        state.push(action.payload)
      },
      prepare: (text: string) => {
        const id = nanoid()
        return { payload: { id, text } }
      },
    },
  },
})

export const { addTodo } = todosSlice.actions

export const selectTodos = (state: RootState) => state.homeReducer

export default todosSlice.reducer
