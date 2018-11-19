import React, { Component } from 'react'
import { 
  BrowserRouter,
  Route,
  Link,
  Redirect,
  Switch
} from 'react-router-dom'
import Home from './home/index'
import Admin from './admin/index'

class App extends Component {
	render() {
	  return (
      <BrowserRouter>
        <div>
          <ul>
            <li><Link exact="true" to="/">HOME</Link></li>
            <li><Link exact="true" to="/admin">ADMIN</Link></li>
          </ul>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/admin" component={Admin}></Route>
            <Redirect to="/"/>
          </Switch>
        </div>
      </BrowserRouter>
	  )
	}
}

export default App