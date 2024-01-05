import React from 'react'
import './Footer.css'
import { FaFacebook, FaTiktok } from 'react-icons/fa'
import { ImYoutube2 } from 'react-icons/im'
type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='footer'>
      <p>PokedexVina</p>
      <p>Since 2024</p>
      <h1>Social Link</h1>
      <div className="socialLink">
        <a href='https://www.facebook.com/pokedexvina'><FaFacebook color='blue' size={50} /></a>
        <a href='https://youtube.com/@pokedexvina'><ImYoutube2 color='red' size={50} /></a>
        {/* Tiktok */}
        <a href='https://www.tiktok.com/@pokedexvina'><FaTiktok color='white' size={50} /></a>
      </div>
    </div>
  )
}

export default Footer