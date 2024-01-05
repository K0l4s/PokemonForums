import React from 'react'
import './Notification.css'
type Props = {}

const Notification = (props: Props) => {
  return (
    <div className='notification'>
        <div className="closeButton"><p>X</p></div>
        <h3>Nội dung thông báo</h3>
        <p>Thông báo ở đây nè! Bạn ơi</p>
    </div>
  )
}

export default Notification