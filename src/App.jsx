import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './home/home';
import Download from "./download/download"
import Error from './error/error';

function App() {
  

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/download/:id' element={<Download/>} />
      <Route path='*' element={<Error/>} />
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
