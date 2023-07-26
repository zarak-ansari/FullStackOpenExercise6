import { createSlice } from '@reduxjs/toolkit'

// const anecdotesAtStart = [
//   'If it hurts, do it more often',
//   'Adding manpower to a late software project makes it later!',
//   'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
//   'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
//   'Premature optimization is the root of all evil.',
//   'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
// ]
// const initialState = anecdotesAtStart.map(asObject)

// const getId = () => (100000 * Math.random()).toFixed(0)

// const asObject = (anecdote) => {
//   return {
//     content: anecdote,
//     id: getId(),
//     votes: 0
//   }
// }


const anecdoteSlice = createSlice({
  name:'anecdotes',
  initialState: [],
  reducers: {
    createNewAnecdote(state, action) {
      state.push(action.payload)
    },
    incrementVotesOf(state, action) {
      const newState = state.map(anecdote => anecdote.id === action.payload ? {...anecdote, votes: anecdote.votes + 1} : anecdote)
      newState.sort((a, b) => a.votes < b.votes)
      return newState
    },
    setAnecdotes(state, action){
      return action.payload
    },
    addAnecdote(state, action){
      return state.push(action.payload)
    }
    
  }
})

export const { createNewAnecdote, incrementVotesOf, setAnecdotes, addAnecdote } = anecdoteSlice.actions
export default anecdoteSlice.reducer