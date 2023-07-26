import AnecdoteForm from './components/AnecdoteForm'
import AnnecdoteList from './components/AnnecdoteList'
import Filter from './components/Filter'
import Notification from './components/Notification'

const App = () => {

  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
      <Filter />
      <AnnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default App