import React from 'react'
import { Route, Routes } from 'react-router'
import Navbar from '../components/Navbar/Navbar'
import { BrowserRouter } from 'react-router-dom'
import AddNewBlog from '../components/AddNewBlog/AddNewBlog'
import Card from '../components/Card/Card'
import UpdateBlog from '../components/UpdateBlog/UpdateBlog'

const AppRouter = () => {
  return (
    <div>
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Card/>}/>
            <Route path='/newblog' element={<AddNewBlog/>}/>
            <Route path='/updateblog' element={<UpdateBlog/>}/>
        </Routes>
    </BrowserRouter>
    </div>
  )
}

export default AppRouter