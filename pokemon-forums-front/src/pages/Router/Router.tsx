import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../homepage/HomePage'

type Props = {}

const Router = (props: Props) => {
  return (
    <Routes>
			<Route path="/" element={<HomePage />} />
    </Routes>
  )
}

export default Router