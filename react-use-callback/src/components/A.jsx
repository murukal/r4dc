const A = (props) => {
  console.log('A is the most simple component')

  return (
    <div
      style={{
        margin: 20
      }}
    >
      <button onClick={props.onClick}>a count ++</button>
    </div>
  )
}

export default A
