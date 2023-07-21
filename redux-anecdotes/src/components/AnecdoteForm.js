import { useDispatch } from 'react-redux'
import { createNewAnecdote } from '../reducers/anecdoteReducer'


const AnecdoteForm = () => {

    const dispatch = useDispatch()

    const createAnecdote = (event) => {
        event.preventDefault()
        dispatch(createNewAnecdote(event.target.newAnecdote.value))
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