
//
//  app.tsx
//
//  © Zoraja Consulting. All rights reserved but even though use it.
//  vJan23
//

import React from 'react'
import { Routes, Route } from 'react-router-dom'

import About from './about'
import Contact from './contact'
import Find from './find'
import Footer from './footer'
import Header from './header'
import Home from './home'
import Media from './media'

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='about' element={<About />} />
        <Route path='find' element={<Find />} />
        <Route path='media' element={<Media />} />
        <Route path='contact' element={<Contact />} />
        <Route path='*' element={<Home />} />
      </Routes>
      <Footer />
    </>
  )
}
