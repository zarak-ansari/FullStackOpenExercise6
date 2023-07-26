import { useDispatch } from 'react-redux'
import { createNewAnecdote } from '../reducers/anecdoteReducer'
import { displayNotification } from '../reducers/notificationReducer'

const AnecdoteForm = () => {

    const dispatch = useDispatch()

    const createAnecdote = (event) => {
        event.preventDefault()
        const anecdoteContent = event.target.newAnecdote.value
        event.target.newAnecdote.value = ''
        dispatch(createNewAnecdote(anecdoteContent))       
        dispatch(displayNotification(`created anecdote '${anecdoteContent}'`, 5))
    }
    
    return (
        <div>
            <h2>create new</h2>
            <form onSubmit={e => createAnecdote(e)}>
            <div>
                <input 
                type='text'
                name='newAnecdote'
                />
            </div>
            <button type='submit'>create</button>
            </form>
        </div>
    )
}

export default AnecdoteForm