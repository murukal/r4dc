import { createContext, useReducer } from 'react'

export const goodContext = createContext()

const GoodContext = (props) => {
  const [count, onCountChange] = useReducer((count) => {
    return count + 1
  }, 0)

  return (
    <>
      <goodContext.Provider
        value={{
          count
        }}
      >
        {props.children}
        <button onClick={onCountChange}>count + 1</button>
      </goodContext.Provider>
    </>
  )
}

export default GoodContext
