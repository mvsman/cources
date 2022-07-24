import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Header } from './ui/header'
import { About, Blog, Contacts, Cources, Events, Home } from './pages'

import './App.scss'

export const App = () => (
  <div className="app">
    <Header />
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cources" element={<Cources />} />
        <Route path="/events" element={<Events />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </div>
  </div>
)
