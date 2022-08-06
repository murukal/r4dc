import { useContext } from 'react'
import { goodContext } from './GoodContext'

const A = () => {
  console.log('------------group2 A is rendering-----------')

  const context = useContext(goodContext)

  return <div>i am group2 a with count, count: {context.count}</div>
}

export default A
