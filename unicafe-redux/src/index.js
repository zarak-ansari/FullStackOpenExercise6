import React from 'react'
import ReactDOM from 'react-dom/client'

import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

const App = () => {
  // const good = () => {
  //   store.dispatch({
  //     type: 'GOOD'
  //   })
  // }

  const incrementState = stateToIncrement => {
    store.dispatch({
      type: stateToIncrement
    })
  }

  return (
    <div>
      <button onClick={() => incrementState('GOOD')}>good</button> 
      <button onClick={() => incrementState('OK')}>ok</button> 
      <button onClick={() => incrementState('BAD')}>bad</button>
      <button onClick={() => incrementState('ZERO')}>reset stats</button>
      <div>good {store.getState().good}</div>
      <div>ok {store.getState().ok}</div>
      <div>bad {store.getState().bad}</div>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

const renderApp = () => {
  root.render(<App />)
}

renderApp()
store.subscribe(renderApp)
