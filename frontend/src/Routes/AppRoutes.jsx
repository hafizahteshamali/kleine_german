import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../layouts/Layout'
import Home from '../pages/Home/Home'
import About from '../pages/About/About'

const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/about-us' element={<About />} />
        </Route>
    </Routes>
  )
}

export default AppRoutes