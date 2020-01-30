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
         <p>
           {this.props.flightDetails[0].date} - Flight: {this.props.flightDetails[0].flightnum} - {this.props.flightDetails[0].origin} > {this.props.flightDetails[0].destination}
         </p>
         <p>Rows: {this.props.flightDetails[0].airplane.rows} <br/>
         Columns: {this.props.flightDetails[0].airplane.columns} <br/>
       PlaneName: {this.props.flightDetails[0].airplane.name}</p>

     {
       <SeatSelect dataFromFlightResults={this.props.flightDetails}/>
     }
      </div>
    )
  }

} // Class

export default FlightResults
