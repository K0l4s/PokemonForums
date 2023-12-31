import React from 'react'
import './AboutUs.css'
import { SiGithub } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { TfiClipboard } from "react-icons/tfi";

interface Props { }

const AboutUs = (props: Props) => {
    return (
        <div className='aboutUs'>
            <h1>Đội ngũ phát triển</h1>
            <div className="makeBy">
                <div className='card'>
                    <img src="https://i.pinimg.com/474x/f9/b4/82/f9b482cc67505a9eceba16c912a665d2.jpg" />
                    <h4>Huỳnh Trung Kiên</h4>
                    <p>Học Công Nghệ Phần Mềm</p>
                    <p>Đại Học Sư Phạm Kỹ Thuật TPHCM</p>
                    <div className="socialLinks">
                        <a href='https://www.facebook.com/kolaszez/'><FaFacebook /></a>
                        <FaSquareInstagram />
                        <SiGithub />
                        <FaYoutube />
                        <TfiClipboard />
                    </div>
                </div>

                <div className='card'>
                    <img src="https://i.pinimg.com/474x/f9/b4/82/f9b482cc67505a9eceba16c912a665d2.jpg" />
                    <h4>Tào Việt Đức</h4>
                    <p>Học Hệ Thống Thông Tin</p>
                    <p>Đại Học Sư Phạm Kỹ Thuật TPHCM</p>
                    <div className="socialLinks">
                        <FaFacebook />
                        <FaSquareInstagram />
                        <SiGithub />
                        <FaYoutube />
                        <TfiClipboard />
                    </div>
                </div>
            </div>
            <h1>Phát triển</h1>
            
        </div>
    )
}

export default AboutUs