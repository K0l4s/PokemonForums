import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import home from '../home/home'

const Router = () => {
  return (
    <div>
        <BrowserRouter>
            <Route path="/" component={<home/>}/>
        </BrowserRouter>
    </div>
  )
}

export default Router