import React from 'react'
import './Login.css'
import { ImYoutube2 } from "react-icons/im";
import { FaFacebook } from "react-icons/fa";
import background from '../../images/wallpaper.jpg';
import { useNavigate } from 'react-router-dom';
type Props = {}

const Login = (props: Props) => {
    const navigate = useNavigate();

    return (
        <div className='login'>
            <div className="blur"></div>
            <div className="wallpaper">
            <img src={background} alt="background" />
            </div>
            <h1>Đăng nhập</h1>
            <div className="loginBox">
                <div className="textAndInput">
                    <p>Tên đăng nhập</p>
                    <input type="text" placeholder='Tên đăng nhập hoặc email' />
                </div>
                <div className="textAndInput">
                    <p>Mật khẩu</p>
                    <input type="password" placeholder='Mật khẩu' />
                </div>
                <div className="loginButton">
                    <button onClick={()=>navigate("/")}>Đăng nhập</button>
                </div>
                <div className="anotherAuth">
                    <button>Đăng nhập với Facebook</button>
                    <button>Đăng nhập với Google</button>
                </div>
                <div className="link">
                    <p>Bạn chưa có tài khoản? <a href="/register">Đăng ký</a></p>
                    <p>Quên mật khẩu? <a href="/register">Lấy lại mật khẩu</a></p>
                </div>
                <div className="socialLink">
                    <a href='https://www.facebook.com/pokedexvina'><FaFacebook color='blue' size={50} /></a>
                    <a href='https://youtube.com/@pokedexvina'><ImYoutube2 color='red' size={50} /></a>
                </div>
            </div>
        </div>
    )
}

export default Login