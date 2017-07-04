import React from 'react';
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import About from '../about'
import Bio from '../bio'
import Lab from '../lab'

const App = () => (
  <div>
    <header>
      <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/bio">Bio</Link> | <Link to="/lab">Lab</Link>
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/bio" component={Bio} />
      <Route exact path="/lab" component={Lab} />
    </main>
  </div>
)

export default App
