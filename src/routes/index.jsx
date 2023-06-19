import { path } from '../constants/path'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePages'
import BMI from '../pages/HealthTools/BMI'
import Profile from '../pages/Profile'
import LoginorRegister from '../pages/Auth/Login'
import HealthTools from '../pages/HealthTools'
import Communitygroup from '../pages/Community'
import Hearttool from '../pages/HealthTools/Screening/Heartool'
import Groupdetail from '../pages/Community/Groupdetail'

function RoutesComponent() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={path.login} element={<LoginorRegister />} />
        <Route path={path.profile} element={<Profile />} />
        <Route path={path.home} element={<HomePage />} />
        <Route path={path.healthtools} element={<HealthTools />} />
        <Route path={path.bmi} element={<BMI />} />
        <Route path={path.community} element={<Communitygroup />} />
        <Route path={path.groupdetail} element={<Groupdetail />} />
        <Route path={path.hearttool} element={<Hearttool />} />
      </Routes>

    </BrowserRouter>
  )
}

export default RoutesComponent;
