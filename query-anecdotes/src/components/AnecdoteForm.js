import { useQueryClient, useMutation } from "react-query"
import { createAnecdote } from "../services/anecdoteService"
import { useNotificationDispatch } from "../notificationContext"

const AnecdoteForm = () => {

  const queryClient = useQueryClient()
  const dispatch = useNotificationDispatch()

  const newAnecdoteMutation = useMutation(createAnecdote, {
    onSuccess: () => queryClient.invalidateQueries('anecdotes'),
    onError: () => {
      dispatch({type:'showNotification', payload:`Error: anecdote must be 5 characters or more`})
      setTimeout(()=>dispatch({type:'hideNotification'}), 5000)
    }
  })

  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    newAnecdoteMutation.mutate({content, votes:0})
    dispatch({type:'showNotification', payload:`anecdote '${content}' created`})
    setTimeout(()=>dispatch({type:'hideNotification'}), 5000)
  }

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name='anecdote' />
        <button type='submit'>create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
