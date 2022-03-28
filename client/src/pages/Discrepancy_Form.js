const DiscrepancyForm = () => {
  return (
    <div>
      <section className="input-section">
        <input
          className="form"
          type="text"
          name="title"
          placeholder="title"
          // value={props.name}
          // onChange={props.handleChange}
        />
        <input
          className="form"
          type="text"
          name="date"
          placeholder="Date"
          // value={props.name}
          // onChange={props.handleChange}
        />
        <input
          className="form"
          type="text"
          name="aircraft"
          placeholder="Title"
          // value={props.name}
          // onChange={props.handleChange}
        />
        <input
          className="form"
          type="text"
          name="aircraft"
          placeholder="Tail Number"
          // value={props.name}
          // onChange={props.handleChange}
        />
        <input
          className="form"
          type="text"
          name="description"
          placeholder="Description"
          // value={props.name}
          // onChange={props.handleChange}
        />
        <input
          className="form"
          type="text"
          name="open"
          placeholder="Open?"
          // value={props.name}
          // onChange={props.handleChange}
        />
        <input
          className="form"
          type="text"
          name="section"
          placeholder="Section"
          // value={props.name}
          // onChange={props.handleChange}
        />
        <input
          className="form"
          type="text"
          name="image"
          placeholder="Image"
          // value={props.name}
          // onChange={props.handleChange}
        />
        <button>Submit</button>
      </section>
    </div>
  )
}

export default DiscrepancyForm
