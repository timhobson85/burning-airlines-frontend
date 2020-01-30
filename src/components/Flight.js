import React from 'react'
import axios from 'axios'
import FlightResults from './FlightResults'

const URL = 'http://localhost:3000/flights.json'
let flight;

class Flight extends React.Component {

  state = {
    flightDetails: []
  }

  componentDidMount(){
    const flightnumQuery = this.props.match.params.query
    // console.log(flightnumQuery);
    axios.get( URL )
    .then( res => {
      let results = res.data
      let filtered = results.filter( flight => flight.flightnum.includes( flightnumQuery ))
      // console.log(filtered);
      this.setState({flightDetails: filtered})
      // console.log(this.state);
      // console.log(this.state.flightDetails[0].origin);
      // console.log('flight:', flight);
    })
    .catch( console.warn)
  }

  render(){

    flight = this.state.flightDetails[0]

    return(

      <div className='App'>
        <h3>flights</h3>



          {

            (this.state.flightDetails.length > 0) && <FlightResults oldProps={this.props} flightDetails={this.state.flightDetails}/>
          }


      </div>

    )
  }

} // Class

export default Flight
