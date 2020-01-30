import React from 'react'

const SearchResults = (prop) => {


  const handleClick = ( id ) => {
    console.log('clicked', id);
    // we want this to send us to flight/:flightnum with flightnum so we can see the seating arrangement
    const route = `/flight/${ id }`
    console.log('new route:', route);
    // this.props.history.push( route )
    // console.log(props);
  }

  return prop.flights.map( flight =>(
    <div className="searchResults" key={flight.id}>
      <p>{flight.date} - {flight.origin} - {flight.destination} - {flight.flightnum} - {flight.airplane.name}</p><button onClick={() => handleClick(flight.flightnum)}>book flight</button>
    </div>
  ));

}

export default SearchResults
