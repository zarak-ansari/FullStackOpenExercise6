import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import { getAllAnecdotes, updateAnecdote } from './services/anecdoteService'

import { useMutation, useQuery, useQueryClient } from 'react-query'

const App = () => {

  const queryClient = useQueryClient()
  const updateAnecdoteMutation = useMutation(updateAnecdote, {
    onSuccess: () => queryClient.invalidateQueries('anecdotes')
  })

  const handleVote = (anecdote) => {
    updateAnecdoteMutation.mutate({...anecdote, votes: anecdote.votes + 1})
  }
  const result = useQuery('anecdotes', getAllAnecdotes, {retry:false})

  if(result.isLoading){
    return(<div>still loading</div>)
  }
  if(result.isError){
    return(<div>anecdote service not available due to problems in server</div>)
  }

  const anecdotes = result.data

  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
      <AnecdoteForm />
    
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
