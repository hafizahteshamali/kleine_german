import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../layouts/Layout'
import Home from '../pages/Home/Home'
import About from '../pages/About/About'
import Companies from '../pages/Companies/Companies'

const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/about-us' element={<About />} />
            <Route path='/companies' element={<Companies />} />
        </Route>
    </Routes>
  )
}

export default AppRoutes