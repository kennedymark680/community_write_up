const Card = (props) => {
  return (
    <div className="card">
      <h1>{props.title}</h1>
      <h3>{props.date}</h3>
      <h3>{props.image}</h3>
      <button onClick={() => props.deleteDiscrep(props.id)}>Delete</button>
      <button onClick={() => props.updateDiscrep(props.id)}>{props.open}</button>
    </div>
  )
}

export default Card