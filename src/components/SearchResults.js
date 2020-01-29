import React from 'react'

// const generateImageUrl = (photo, size='q') => {
//   return `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_${size}.jpg`;
// }

const handleClick = () => {
  console.log('clicked');
}

const SearchResults = (props) => {


  return props.flights.map( flight =>(
    <div className="searchResults" key={flight.id}>
      <p>{flight.date} - {flight.origin} - {flight.destination} - {flight.flightnum}</p><button onClick={handleClick(flight.flightnum)}>book flight</button>
    </div>
  ));

}

export default SearchResults
