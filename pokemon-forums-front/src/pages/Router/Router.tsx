import React from 'react'
import './Router.css'
import { Route, Routes, useLocation } from 'react-router-dom'
import HomePage from '../HomePage/HomePage'
import AboutUs from '../AboutUs/AboutUs'
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'
import Login from '../Login/Login'
import NotFound from '../NotFound/NotFound'
import Register from '../Register/Register'
import Footer from '../../components/Footer/Footer'
import Blog from '../Blog/Blog'
import Pokedex from '../Pokedex/Pokedex'
import PokemonDetail from '../PokemonDetail/PokemonDetail'
import Youtube from '../Youtube/Youtube'
import Notification from '../../components/Notification/Notification'

type Props = {}

const Router = (props: Props) => {
  // Get currentUrl
  const { pathname } = useLocation();
  return (
    <div className='router'>
      <Notification/>
      {pathname === "/login" || pathname === "/register" ?
        <div>
          <Routes>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Routes>
        </div>
        :
        <div className='normalPage'>
          <Navbar />
          {/* <Sidebar /> */}
          <div className="page">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="about" element={<AboutUs />} />
              <Route path="blog" element={<Blog />} />
              <Route path="pokedex" element={<Pokedex />} />
              <Route path="pokemon/:id" element={<PokemonDetail />} />
              <Route path='youtube' element ={<Youtube/>}/>
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer/>
          </div>
        </div>
      }
    </div>
  )
}

export default Router