import { memo } from 'react'

const B = (props) => {
  console.log('B is a component wrapped by memo')

  return (
    <div
      style={{
        margin: 20
      }}
    >
      <button onClick={props.onClick}>b count ++</button>
    </div>
  )
}

export default memo(B)
