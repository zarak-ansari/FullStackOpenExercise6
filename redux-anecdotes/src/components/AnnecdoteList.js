import { useSelector, useDispatch } from 'react-redux'
import { incrementVotesOf, initializeAnecdotes } from '../reducers/anecdoteReducer'
import { displayNotification } from '../reducers/notificationReducer'
import { useEffect } from 'react'

const AnnecdoteList = () => {
    const anecdotes = useSelector(state => state.anecdotes)
    const filter = useSelector(state => state.filter)

    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(initializeAnecdotes())
        // anecdoteService.getAll().then(anecodotesFromBackend => dispatch(setAnecdotes(anecodotesFromBackend)))
    }, [dispatch])

    const vote = (anecdote) => {
        dispatch(incrementVotesOf(anecdote))
        dispatch(displayNotification(`you voted '${anecdote.content}'`, 5))
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
                    <button onClick={() => vote(anecdote)}>vote</button>
                </div>
            </div>
            )}
        </div>
    )
}

export default AnnecdoteList