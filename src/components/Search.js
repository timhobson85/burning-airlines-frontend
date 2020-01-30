import React from 'react'
import axios from 'axios'
import SearchResults from './SearchResults'

const URL = 'http://localhost:3000/flights.json'

class Search extends React.Component {

  // results = {
  //   flights: []
  // }

  state = {
    from: '',
    to: '',
    flights: []
  }

  handleFromChange = (event) => {
    this.setState({ from: event.target.value })
  }
  handleToChange = (event) => {
    this.setState({ to: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('submitted!', this.state);
    let from = this.state.from;
    console.log('from:', from);
    let to = this.state.to;
    console.log('to:', to);
    const route = `/search/results/${from}/${to}`
    console.log('route:', route);
    // console.log(this.props.history);
    this.props.history.push( route )

    // this.getFlights();
  }

  // function = filterResults(results) => {
  //   console.log(results)
  //   //(results.filter(flight => flight.destination.includes( this.state.to ))
  // }

  // getFlights = () => {
  //   axios.get( URL )
  //   .then( res => {
  //     // console.log(res.filter(flight => flight.destination.includes( this.state.to )))
  //     let results = res.data
  //     let filtered = results.filter(flight => flight.destination.includes( this.state.to ) && flight.origin.includes( this.state.from ))
  //     console.log('results are', filtered);
  //     this.setState({flights: filtered})
  //     console.log('flights:', this.state.flights);
  //   } )
  //   .catch( err => console.warn('it broke', err) );
  // }

  render(){
    return(
      <div className='App'>
        <h2>search</h2>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleFromChange} placeholder="From" type="text"/>
          <input onChange={this.handleToChange} placeholder="To" type="text"/><br/>
          <input type="submit" value="done"/>
        </form>
        {
        //   (this.state.flights.length > 0) && <SearchResults flights={this.state.flights}/>
        }
      </div>
    )
  }

} // Class

export default Search
