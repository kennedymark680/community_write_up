const DiscrepancyForm = (props) => {
  return (
    <div>
      <section className="input-section">
        <input
          className="form"
          type="text"
          name="title"
          placeholder="title"
          value={props.title}
          onChange={props.handleDiscrepancyChange}
        />
        <input
          className="form"
          type="text"
          name="date"
          placeholder="Date"
          value={props.date}
          onChange={props.handleDiscrepancyChange}
        />
        <input
          className="form"
          type="text"
          name="aircraft"
          placeholder="Tail Number"
          value={props.aircraft}
          onChange={props.handleDiscrepancyChange}
        />
        <input
          className="form"
          type="text"
          name="description"
          placeholder="Description"
          value={props.description}
          onChange={props.handleDiscrepancyChange}
        />
        <input
          className="form"
          type="text"
          name="open"
          placeholder="Open?"
          value={props.open}
          onChange={props.handleDiscrepancyChange}
        />
        <input
          className="form"
          type="text"
          name="section"
          placeholder="Section"
          value={props.section}
          onChange={props.handleDiscrepancyChange}
        />
        <input
          className="form"
          type="text"
          name="image"
          placeholder="Image"
          value={props.image}
          onChange={props.handleDiscrepancyChange}
        />
        <input
          className="form"
          type="text"
          name="aircraft"
          placeholder="Aircraft"
          value={props.image}
          onChange={props.handleDiscrepancyChange}
        />
        <button
          onClick={() => props.submitNewDiscrep('62431656a7fb4be52a53a850')}
        >
          Submit
        </button>
        <button onClick={() => props.getDiscrep()}>Get</button>
        <button onClick={() => props.deleteDiscrep()}>Delete</button>
        <button onClick={() => props.updateDiscrep()}>Update</button>
      </section>
    </div>
  )
}

export default DiscrepancyForm
