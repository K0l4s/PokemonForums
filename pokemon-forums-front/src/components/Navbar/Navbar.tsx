import React from 'react'
import './Navbar.css'
import logo from '../../images/rotom.png'
import { FaSearch } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <div className='navbar'>
            <div onClick={()=>navigate("")} className="logo">
                <img src={logo} alt='logo'/>
                <p>POKÉDEX VINA</p>
            </div>
            <div className="navbuttons">
                <button onClick={()=>navigate("")}>Trang chủ</button>
                <button onClick={()=>navigate("pokedex")}>Pokédex</button>
                <button onClick={()=>navigate("blog")}>Blog</button>
                <button onClick={()=>navigate("about")}>Về chúng tôi</button>
                <button onClick={()=>navigate("login")}>Đăng nhập</button>
                <button onClick={()=>navigate("register")}>Đăng ký</button>
            </div>
            <div className="searchbox">
                <input type="text" placeholder='Pikachu' />
                <FaSearch className='icon' color='white'/>
            </div>
        </div>
    )
}

export default Navbar