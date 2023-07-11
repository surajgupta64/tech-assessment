import React from "react"
import Header from "../common/header/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "../home/Home"
import History from "../history/History"
import Cart from "../Cart/Cart"


const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/History' component={History} />
          <Route exact path='/Cart' component={Cart} />
        </Switch>
      </Router>
    </>
  )
}

export default Pages
