import React from 'react'
import axios from 'axios'
import SearchResultData from './SearchResultData'
const URL = 'http://localhost:3000/flights.json'

class SearchResults extends React.Component {
  state = {
    flights: []
  }

  handleClick = ( id ) => {
    console.log('clicked', id);
    // we want this to send us to flight/:flightnum with flightnum so we can see the seating arrangement
    const route = `/flight/${ id }`
    console.log('new route:', route);
    this.props.history.push( route )
    // console.log(props);
  }

  componentDidMount(){
    let flightFrom = this.props.match.params.from
    let flightTo = this.props.match.params.to
    console.log('to:', flightTo);
    console.log('from:', flightFrom);
    // getFlights = () => {
    axios.get( URL )
    .then( res => {
      // console.log(res.filter(flight => flight.destination.includes( this.state.flightTo )))
      let results = res.data
      let filtered = results.filter(flight => flight.destination.includes( flightTo ) && flight.origin.includes( flightFrom ))
      this.setState({flights: filtered})
      console.log('state.flights:', this.state.flights);
    } )
    .catch( err => console.warn('it broke', err) );
  }

  componentDidUpdate(prevProps){
    console.log(`update!`);
    const oldQuery = prevProps.match.params
    console.log('oldQuery:', oldQuery);
    const newQuery = this.props.match.params
    console.log('newQuery:', newQuery);
    if (newQuery === oldQuery) {
      return
    }
    let flightFrom = this.props.match.params.from
    let flightTo = this.props.match.params.to

    axios.get( URL )
    .then( res => {
      // console.log(res.filter(flight => flight.destination.includes( this.state.flightTo )))
      let results = res.data
      let filtered = results.filter(flight => flight.destination.includes( flightTo ) && flight.origin.includes( flightFrom ))
      this.setState({flights: filtered})
      console.log('state.flights:', this.state.flights);
    } )
    .catch( err => console.warn('it broke', err) );
  }

  // componentDidUpdate(prevProps, prevState, snapshot) {
// const {match: {params: {query: searchTermOld}}} = prevProps;
// const {match: {params: {query: searchTermNew}}} = this.props;
// if (searchTermOld.toLowerCase() === searchTermNew.toLowerCase()) {
//   return;
// }
// this.performSearch(searchTermNew.toLowerCase());
// }

  render(){
    return(
      <div>
        <h2>search results</h2>

        {

          this.state.flights.length === 0
          ?
          <h3>no results</h3>
          :
          this.state.flights.map( flights =>
            <div className="searchResults" key={flights.id}>
              <p>{flights.date} - {flights.origin} - {flights.destination} - {flights.flightnum} - {flights.airplane.name}</p><button onClick={() => this.handleClick(flights.flightnum)}>book flight</button>
            </div>)

        }

      </div>
    )



    // return this.state.flights.map( flights =>
    //   <div className="searchResults" key={flights.id}>
    //     <p>{flights.date} - {flights.origin} - {flights.destination} - {flights.flightnum} - {flights.airplane.name}</p><button onClick={() => this.handleClick(flights.flightnum)}>book flight</button>
    //   </div>
    // ) // return
  } // render

} // Class

export default SearchResults

// (this.state.flights.length > 0) && <SearchResultData flights={this.state.flights}/>
