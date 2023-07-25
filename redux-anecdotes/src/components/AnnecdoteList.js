import { useSelector, useDispatch } from 'react-redux'
import { incrementVotesOf } from '../reducers/anecdoteReducer'
import Filter from './Filter'

const AnnecdoteList = () => {
    const anecdotes = useSelector(state => state.anecdotes)
    const filter = useSelector(state => state.filter)

    const dispatch = useDispatch()
    
    const vote = (id) => {
      dispatch(incrementVotesOf(id))
    }

    const filteredAnecdotes = filter === '' ? anecdotes : anecdotes.filter(anecdote => anecdote.content.includes(filter))

    return (
        <div>
            <h2>Anecdotes</h2>
            <Filter />
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