import React from 'react'
import {Route, Link, HashRouter as Router} from 'react-router-dom'
import Home from './Home'
import Search from './Search'
import Flights from './Flights'


class App extends React.Component {

  render(){
    return(
      <div className='App'>
        <Router>
          <nav>
            <Link to="/">Home</Link> | &nbsp;
            <Link to="/search">Search</Link> |&nbsp;
            <Link to="/flights">Flights</Link> |&nbsp;
          </nav>
        <h1>burning airlines</h1>
        <h2>app</h2>

        <Route path ='/' component={Home} />
        <Route path ='/search' component={Search} />
        <Route path ='/flights' component={Flights} />

        </Router>
      </div>
    )
  }

} // Class

export default App
