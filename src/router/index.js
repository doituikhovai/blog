import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Admin from '../views/admin/index'
import Home from '../views/home/index'

const Main = () => (
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route path="/admin" component={Admin}/>
  </Switch>
)

export default Main()