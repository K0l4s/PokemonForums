import React from 'react'
import '../Login/Login.css'
import { ImYoutube2 } from "react-icons/im";
import { FaFacebook } from "react-icons/fa";
import background from '../../images/wallpaper.jpg';
import { useNavigate } from 'react-router-dom';
type Props = {}

const Register = (props: Props) => {
    const navigate = useNavigate();
  return (
    <div className='login'>
            <div className="blur"></div>
            <div className="wallpaper">
            <img src={background} alt="background" />
            </div>
            <h1>Đăng Ký Tài Khoản Mới</h1>
            <div className="loginBox">
                <div className="textAndInput">
                    <p>Email</p>
                    <input type="email" placeholder='Email' />
                </div>
                <div className="textAndInput">
                    <p>Tên đăng nhập</p>
                    <input type="text" placeholder='Tên đăng nhập' />
                </div>
                <div className="textAndInput">
                    <p>Mật khẩu</p>
                    <input type="password" placeholder='Mật khẩu' />
                </div>
                <div className="loginButton">
                    <button onClick={()=>navigate("/")}>Đăng ký</button>
                </div>
                <div className="anotherAuth">
                    <button>Đăng nhập với Facebook</button>
                    <button>Đăng nhập với Google</button>
                </div>
                <div className="link">
                    <p>Bạn đã có tài khoản? <a href="/login">Đăng nhập</a></p>
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

export default Register