import { memo } from 'react'

const D = () => {

  console.log('------------group2 D is rendering-----------')

  return <div>i am group2 d</div>
}

export default memo(D)
