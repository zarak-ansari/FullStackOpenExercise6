import { createSlice } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdoteService'

const anecdoteSlice = createSlice({
  name:'anecdotes',
  initialState: [],
  reducers: {
    updateAnecdoteAndSort(state, action) {
      const newState = state.map(anecdote => anecdote.id === action.payload.id ? action.payload : anecdote)
      newState.sort((a, b) => a.votes < b.votes)
      return newState
    },
    setAnecdotes(state, action){
      return action.payload
    },
    addAnecdote(state, action){
      state.push(action.payload)
    },
  }
})


export const { updateAnecdoteAndSort, setAnecdotes, addAnecdote } = anecdoteSlice.actions
export default anecdoteSlice.reducer

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
} 

export const createNewAnecdote = content => {
  return async dispatch => {
    const anecdoteObject = await anecdoteService.createNew(content)
    dispatch(addAnecdote(anecdoteObject))
  }
}

export const incrementVotesOf = anecdote => {
  return async dispatch => {
    const updatedAnecdote = { ...anecdote, votes: anecdote.votes + 1 }
    await anecdoteService.update(updatedAnecdote)
    dispatch(updateAnecdoteAndSort(updatedAnecdote))
  }
}