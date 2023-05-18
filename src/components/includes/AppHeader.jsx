import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
import {MenuOutlined, MobileOutlined, MailOutlined, FacebookOutlined, InstagramOutlined, LinkedinOutlined, UserOutlined  } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
const AppHeader = () => {
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
      setOpen(true);
    };
  
    const onClose = () => {
      setOpen(false);
    };
  
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
                <div className='mobileVisible'>
                    <Button type="primary" onClick={showDrawer}>
                        <MenuOutlined />
                    </Button>
                    <Drawer title="Menu" placement="right" onClose={onClose} open={open}>
                        <nav>
                            <ul>
                                <li><NavLink onClick={()=>onClose()} to="/">Home</NavLink></li>
                                <li><NavLink onClick={()=>onClose()} to="/about">About</NavLink></li>
                                <li><NavLink onClick={()=>onClose()} to="/shop">Shop</NavLink></li>
                                <li><NavLink onClick={()=>onClose()} to="/faq">FAQ</NavLink></li>
                                <li><NavLink onClick={()=>onClose()} to="/contact">Contact</NavLink></li>
                            </ul>
                    </nav>
                    </Drawer>
                </div>
                <nav className='mobileHidden'>
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/shop">Shop</NavLink></li>
                        <li><NavLink to="/faq">FAQ</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                </nav>
            </div>
        </div>
    </>
  )
}

export default AppHeader