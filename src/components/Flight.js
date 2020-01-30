import React from 'react'
import axios from 'axios'
import FlightResults from './FlightResults'

const URL = 'http://localhost:3000/flights.json'


class Flight extends React.Component {

  state = {
    flightDetails: []
  }

  componentDidMount(){
    const flightnumQuery = this.props.match.params.query
    console.log(flightnumQuery);
    axios.get( URL )
    .then( res => {
      let results = res.data
      let filtered = results.filter( flight => flight.flightnum.includes( flightnumQuery ))
      console.log(filtered);
      this.setState({flightDetails: filtered})
    })
    .catch( console.warn)
  }

  render(){
    return(
      <div className='App'>
        <h3>flights</h3>
        <p>flight results</p>
          {
            (this.state.flightDetails.length > 0) && <FlightResults flightDetails={this.state.flightDetails}/>
          }


      </div>
    )
  }

} // Class

export default Flight
