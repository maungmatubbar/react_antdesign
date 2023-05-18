import React from 'react'
import { MobileOutlined, MailOutlined, FacebookOutlined, InstagramOutlined, LinkedinOutlined, UserOutlined  } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
const AppHeader = () => {
  return (
    <>
        <div className='container'>
            {/* topbar */}
            <div className='topBar'>
                <div className='contactInfo'>
                    <ul>
                        <li><a href="01726969417"><MobileOutlined /><span>01726969417</span></a></li>
                        <li><a href="maungmatubbar@gmail.com"><MailOutlined /><span>maungmatubbar@gmail.com</span></a></li>
                    </ul>
                </div>
                <div className='otherInfo'>
                    <ul className='socialMedia'>
                        <li><a href="https://facebook.com"><FacebookOutlined /></a></li>
                        <li><a href="https://instagram.com"><InstagramOutlined /></a></li>
                        <li><a href="https://linkdin.com"><LinkedinOutlined /></a></li>
                    </ul>
                    <button><UserOutlined /> My Account</button>
                </div>
            </div>
            {/* header  */}
            <div className='header separator'>
                <div className='logo'>Logo</div>
                <nav>
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/shop">Shop</NavLink></li>
                        <li><NavLink to="/faq">Faq</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                </nav>
            </div>
        </div>
    </>
  )
}

export default AppHeader