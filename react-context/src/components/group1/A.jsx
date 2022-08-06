import { useContext } from 'react'
import { badContext } from '../../App'

const A = () => {
  console.log('------------A is rendering-----------')

  const context = useContext(badContext)

  return <div>i am a with count, count: {context.count}</div>
}

export default A
