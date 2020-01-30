import React from 'react';
import SeatSelect from './SeatSelect';

class FlightResults extends React.Component {

  componentDidMount(){
    // console.log('loaded');
    // console.log(this.props.flightDetails[0].id);
    let flightDetails = this.props.flightDetails[0]
    // console.log(flightDetails);
  }

  render(){
    return(
      <div className='App'>
        <div className="flight">
        <h3>Flight: {this.props.flightDetails[0].flightnum} - Plane: {this.props.flightDetails[0].airplane.name}</h3>
         <p>DATE: {this.props.flightDetails[0].date}</p>
         <h1>FROM:<span id="locale">🛫{this.props.flightDetails[0].origin}</span> <br/>TO: <span id="locale">🛬{this.props.flightDetails[0].destination}</span></h1>
       </div>

         <p>Rows: {this.props.flightDetails[0].airplane.rows} <br/>
         Columns: {this.props.flightDetails[0].airplane.columns} <br/>
       </p>


     {
       <SeatSelect dataFromFlightResults={this.props.flightDetails}/>
     }
      </div>
    )
  }

} // Class

export default FlightResults
