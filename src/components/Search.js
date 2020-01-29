import React from 'react'

class Search extends React.Component {

  render(){
    return(
      <div className='App'>
        <h2>search</h2>
        <form>
          <input placeholder="From" type="text"/>
          <input placeholder="To" type="text"/><br/>
          <input type="submit" value="cancel"/>
          <input type="submit" value="done"/>
        </form>
        <p>Search Results</p>
      </div>
    )
  }

} // Class

export default Search
