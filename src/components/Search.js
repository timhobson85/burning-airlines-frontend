import React from 'react'
import axios from 'axios'

const URL = 'http://localhost:3000/flights.json'

class Search extends React.Component {

  state = {
    from: '',
    to: ''
  }

  handleFromChange = (event) => {
    this.setState({ from: event.target.value })
  }
  handleToChange = (event) => {
    this.setState({ to: event.target.value })
  }

  handleSubmit = (event) => {
    console.log('submitted!', this.state);
    console.log('from:', this.state.from);
    console.log('to:', this.state.to);
    this.getFlights();
  }

  getFlights = () => {
    axios.get( URL )
    .then( res => console.log(res) )
    .catch( err => console.warn('it broke', err) );
  }





  render(){
    return(
      <div className='App'>
        <h2>search</h2>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleFromChange} placeholder="From" type="text"/>
          <input onChange={this.handleToChange} placeholder="To" type="text"/><br/>
          <input type="submit" value="cancel"/>
          <input type="submit" value="done"/>
        </form>
        <p>Search Results</p>
        <p>date flightnumber from to plane</p>
      </div>
    )
  }

} // Class

export default Search
