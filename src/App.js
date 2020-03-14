import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Security, LoginCallback } from '@okta/okta-react'

import Home from './Home'

const config = {
  issuer: process.env.REACT_APP_ISSUER,
  redirectUri: window.location.origin + '/implicit/callback',
  clientId: process.env.REACT_APP_CLIENT_ID,
  pkce: true,
  scopes: ['openid', 'profile', 'email'],
  disableHttpsCheck: false
}

const LoginVerify = () => {
  return (
    <div>Login verify</div>
  )
}

const App = () => {
  return (
    <Router>
      <Security {...config}>
        <Route path='/' exact={true} component={Home}/>
        <Route path='/implicit/callback' component={LoginCallback}/>
        <Route path='/verify' component={LoginVerify}/>
      </Security>
    </Router>
  )
}

export default App