import React from 'react'

const FlightInfo = (props) => {

  return props.flights.map( flight =>(
    <p key={flight.id}>{flight.date} - {flight.origin} - {flight.destination}</p>
  ));

}

export default FlightInfo
