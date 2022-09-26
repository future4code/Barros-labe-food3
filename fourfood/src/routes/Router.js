import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RestaurantDetailPage from '../pages/detailRestaurant/RestaurantDetailPage'
import FeedPage from '../pages/feedPage/FeedPage'
import LoginPage from '../pages/loginPage/LoginPage'
import SignupPage from '../pages/signupPage/SignupPage'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/feed' element={<FeedPage />} />
        <Route path='/Detail-Restaurant/:id' element={<RestaurantDetailPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router