import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './container/Home'
import About from './container/About'
import Contact from './container/Contact'
import Listings from './container/Listings'
import ListingDetails from './container/ListingDetails'
import Login from './container/Login'
import SignUp from './container/SignUp'
import NotFound from './components/NotFound'
import Layout from './hocs/Layout'

import { Provider } from 'react-redux'
import store from './store'

import './sass/main.scss'

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path='/listings' component={Listings} />
            <Route path='/listings/:id' component={ListingDetails} />
            <Route path='/login' component={Login} />
            <Route path='/signup' component={SignUp} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </Router>
    </Provider>
  )
}

export default App
