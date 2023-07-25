import { useDispatch } from 'react-redux'
import { createNewAnecdote } from '../reducers/anecdoteReducer'
import { showNotification, hideNotification } from '../reducers/notificationReducer'

const AnecdoteForm = () => {

    const dispatch = useDispatch()

    const createAnecdote = (event) => {
        event.preventDefault()
        dispatch(createNewAnecdote(event.target.newAnecdote.value))       
        dispatch(showNotification(`created anecdote ${event.target.newAnecdote.value}`))
        event.target.newAnecdote.value = ''
        setTimeout(() => dispatch(hideNotification()), 5000)
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