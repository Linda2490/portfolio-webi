import React from 'react'
import './App.css'

import AllWorks from './AllWorks'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import AppClone from './AppClone'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<AppClone />} />
        <Route path="/allworks" element={<AllWorks />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
