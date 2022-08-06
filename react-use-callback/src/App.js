import { useCallback, useMemo, useState } from 'react'
import './App.css'
import A from './components/A'
import B from './components/B'
import C from './components/C'

const App = () => {
  const [count, setCount] = useState(0)

  const onCountChange = useCallback(() => {
    setCount((count) => count + 1)
  }, [])

  const memoC = useMemo(() => {
    return <C onClick={onCountChange} />
  }, [onCountChange])

  console.log('count=====', count)

  return (
    <>
      <A onClick={onCountChange} />
      <B onClick={onCountChange} />
      {memoC}
    </>
  )
}

export default App
