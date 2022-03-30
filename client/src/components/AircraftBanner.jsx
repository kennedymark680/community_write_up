const AircraftBanner = (props) => {
  return (
    <div className="aircraftBanner">
      <h1>{props.title ? props.title : "Discrepancy List"}</h1>
    </div>
  )
}

export default AircraftBanner