import { Navigate, Routes, Route } from 'react-router-dom'

import { NavBar } from '../ui'
import { MarvelPage, DcPage, LoginPage } from '../heroes'


export const AppRouter = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/marvel" element={<MarvelPage />} />
        <Route path="dc" element={<DcPage />} />

        <Route path="login" element={<LoginPage />} />

        <Route path="/" element={<Navigate to="/marvel" />} />
      </Routes>
    </>
  )
}

