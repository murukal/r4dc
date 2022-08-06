import { memo, useContext } from 'react'
import { goodContext } from './GoodContext'

const C = () => {
  console.log('------------group2 C is rendering-----------')

  const context = useContext(goodContext)

  return <div>i am group2 c with count, count: {context.count}</div>
}

export default memo(C)
