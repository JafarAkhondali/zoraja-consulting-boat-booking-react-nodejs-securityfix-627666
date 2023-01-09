
//
//  app.jsx
//
//  © 2022 Zoraja Consulting. All rights reserved but even though use it.
//

import React from 'react'
import { Route, Switch } from 'react-router-dom'

import About from './about.jsx'
import Contact from './contact.jsx'
import Find from './find.jsx'
import Footer from './footer.jsx'
import Header from './header.jsx'
import Home from './home.jsx'
import Media from './media.jsx'

export default function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path='/about' component={About} />
        <Route path='/find' component={Find} />
        <Route path='/media' component={Media} />
        <Route path='/contact' component={Contact} />
        <Route component={Home} />
      </Switch>
      <Footer />
    </>
  )
}
