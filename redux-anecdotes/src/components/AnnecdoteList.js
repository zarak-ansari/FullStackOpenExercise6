import { useSelector, useDispatch } from 'react-redux'
import { incrementVotesOf, setAnecdotes } from '../reducers/anecdoteReducer'
import { showNotification, hideNotification } from '../reducers/notificationReducer'
import anecdoteService from '../services/anecdoteService'
import { useEffect } from 'react'

const AnnecdoteList = () => {
    const anecdotes = useSelector(state => state.anecdotes)
    const filter = useSelector(state => state.filter)

    const dispatch = useDispatch()
    
    useEffect(() => {
        anecdoteService.getAll().then(anecodotesFromBackend => dispatch(setAnecdotes(anecodotesFromBackend)))
    }, [dispatch])

    const vote = (id) => {
        dispatch(incrementVotesOf(id))
        const anecdoteVotedOn = anecdotes.find(anecdote => anecdote.id === id)
        dispatch(showNotification(`you voted '${anecdoteVotedOn.content}'`))
        setTimeout(() => dispatch(hideNotification()), 5000)
    }

    const filteredAnecdotes = filter === '' ? anecdotes : anecdotes.filter(anecdote => anecdote.content.includes(filter))

    return (
        <div>
            {filteredAnecdotes.map(anecdote =>
            <div key={anecdote.id}>
                <div>
                    {anecdote.content}
                </div>
                <div>
                    has {anecdote.votes}
                    <button onClick={() => vote(anecdote.id)}>vote</button>
                </div>
            </div>
            )}
        </div>
    )
}

export default AnnecdoteList