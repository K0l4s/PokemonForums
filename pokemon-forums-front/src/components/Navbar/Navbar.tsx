import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../images/rotom.png'
import { FaSearch } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { ImYoutube2 } from 'react-icons/im'

const Navbar = () => {
    const navigate = useNavigate();
    // Khai báo biến subscriberCount kiểu dữ liệu int
    const [subscriberCount,setSubscriberCount] = useState(0);
    const getPokemonList = async () => {
        try {
            const response = await fetch('https://www.googleapis.com/youtube/v3/channels?id=UC0YtzXrJfoPtKrsX_AXWLcg&part=statistics&key=AIzaSyDV3nQV8FvWzsgrCZDB1KvP8Mj3U4sRNMo');
            const data = await response.json();
            setSubscriberCount(data.items[0].statistics.subscriberCount);
            // console.log(subscriberCount);
            
        }catch (error) {
        }
    }
    useEffect(() => {
        getPokemonList();
    }, [])
    return (
        <div className='navbar'>
            <div onClick={()=>navigate("")} className="logo">
                <img src={logo} alt='logo'/>
                <p>POKÉDEX VINA</p>
                <p>Subscribers: {subscriberCount}</p>
            </div>
            <div className="navbuttons">
    
                <button onClick={()=>navigate("")}>Trang chủ</button>
                <button onClick={()=>navigate("pokedex")}>Pokédex</button>
                <button onClick={()=>navigate("blog")}>Blog</button>
                <button onClick={()=>navigate("about")}>Về chúng tôi</button>
                <button onClick={()=>navigate("youtube")}>Youtube</button>
                <button onClick={()=>navigate("event")}>Sự kiện</button>
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