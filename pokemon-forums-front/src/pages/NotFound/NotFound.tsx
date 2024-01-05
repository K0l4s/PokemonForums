import React from 'react'
import './NotFound.css'
import walpaper from '../../images/wallpaper.jpg'
import rotom from '../../images/rotom.png'
import { useNavigate } from 'react-router-dom'
type Props = {}

const NotFound = (props: Props) => {
    const navigate = useNavigate();
  return (
    <div className='notfound'>
        <div className="background">
            <div className="blur"></div>
            <img src={walpaper} alt="" />
        </div>
        <h1>404</h1>
        <p>Không tìm thấy trang</p>
        <button onClick={()=>navigate("")}>Quay lại trang chủ</button>
        <div className="rotom">
            <img src={rotom} alt="" />
        </div>
    </div>
  )
}

export default NotFound