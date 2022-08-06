const C = (props) => {
  console.log('C is the most simple component')

  return (
    <div
      style={{
        margin: 20
      }}
    >
      <button onClick={props.onClick}>c count ++</button>
    </div>
  )
}

export default C
