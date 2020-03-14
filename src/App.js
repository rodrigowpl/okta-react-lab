import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Security, LoginCallback } from '@okta/okta-react'

import Home from './Home'

const config = {
  issuer: 'https://auth.txcmarkets.com/oauth2/aus25c7uk4hILJGhd357',
  redirectUri: window.location.origin + '/implicit/callback',
  clientId: '0oa25c6mih0DMK92R357',
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