import { useDispatch } from 'react-redux'
import { createNewAnecdote } from '../reducers/anecdoteReducer'
import { showNotification, hideNotification } from '../reducers/notificationReducer'
import anecdoteService from '../services/anecdoteService'

const AnecdoteForm = () => {

    const dispatch = useDispatch()

    const createAnecdote = async (event) => {
        event.preventDefault()
        const anecdoteContent = event.target.newAnecdote.value
        const anecdoteObject = await anecdoteService.createNew(anecdoteContent)
        event.target.newAnecdote.value = ''
        dispatch(createNewAnecdote(anecdoteObject))       
        dispatch(showNotification(`created anecdote ${anecdoteContent}`))
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