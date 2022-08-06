import './App.css'
import { createContext, useReducer } from 'react'
import A1 from './components/group1/A'
import B1 from './components/group1/B'
import GoodContext from './components/group2/GoodContext'
import A2 from './components/group2/A'
import B2 from './components/group2/B'

export const badContext = createContext()

const App = () => {
  const [count, onCountChange] = useReducer((count) => {
    return count + 1
  }, 0)

  return (
    <>
      <badContext.Provider
        value={{
          count
        }}
      >
        <A1 />
        <B1 />

        <button onClick={onCountChange}>count + 1</button>
      </badContext.Provider>

      <GoodContext>
        <A2 />
        <B2 />
      </GoodContext>
    </>
  )
}

export default App
