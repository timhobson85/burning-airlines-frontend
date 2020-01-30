import React from 'react';
import axios from 'axios'
const URL = 'http://localhost:3000/reservations.json'
let flight = [];

class SeatSelect extends React.Component {

  state = {
    reservations: []
  }

  componentDidMount(){
    // this.setState = ({reservation: []})
    let currentID = (this.props.dataFromFlightResults[0].id)
    console.log('currentID:', currentID);
    console.log('loaded seat select');
    flight = this.props.dataFromFlightResults[0]
    console.log('flight', flight);
    axios.get(URL)
    .then(res => {
      let results = res.data
      console.log('results:', results);
      console.log('results.flight_id', results[0].flight_id);
      let filtered = results.filter( res => res.flight_id === currentID )
      console.log('filtered:', filtered)
      this.setState({reservations: filtered})
      // console.log(this.state)
      })
    .catch(err => console.log(err))
  }

  render(){
    let flight = this.props.dataFromFlightResults[0]

    return(
      <div>
      <p>Show seat table</p>

      {
        this.props.dataFromFlightResults.length === 0
        ?
        <p>loading</p>
        :
        this.state.reservations.map( reservation =>
        <div key={reservation.id}>
          <p>{reservation.user.name} - ROW: {reservation.row} - COLUMN: {reservation.column}</p>
        </div>)
      }
      </div>
    );
  }
}

export default SeatSelect;
