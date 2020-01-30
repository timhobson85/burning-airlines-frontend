import React from 'react'
import {Route, Link, HashRouter as Router} from 'react-router-dom'
import Home from './Home'
import Search from './Search'
import Flight from './Flight'
import SearchResults from './SearchResults'


class App extends React.Component {

  render(){
    return(
      <div className='App'>
        <Router>
          <nav>
            <Link to="/">Home</Link> | &nbsp;
            <Link to="/search">Search</Link> |&nbsp;
            <Link to="/flight">Flight</Link> |&nbsp;
          </nav>
<<<<<<< HEAD
        <h1><span>🔥</span>fly fuego<span>🔥</span></h1>
=======
        <h1>Burning Airlines</h1>
        <h2>App</h2>
>>>>>>> 3608967b1871e097d73b44c70692ac83fc71b2a4

        <Route exact path ='/' component={Home} />
        <Route path='/search' component={Search} />
        <Route exact path='/search/results/:from/:to' component={SearchResults} />
        <Route exact path='/flight/:query' component={Flight} />
        </Router>
      </div>
    )
  }

} // Class

export default App
