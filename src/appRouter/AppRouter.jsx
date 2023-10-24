import React from 'react'
import { Route, Routes } from 'react-router'
import Navbar from '../components/Navbar/Navbar'
import { BrowserRouter } from 'react-router-dom'

const AppRouter = () => {
  return (
    <div>
        <BrowserRouter>
    <GlobalStyles/>
        <Navbar/>
        <Routes>
            <Route path="login" element={<Navbar/>}/>
            <Route path="register" element={<Navbar/>}/>
        </Routes>
    </BrowserRouter>
    </div>
  )
}

export default AppRouter