import React from 'react'
import { Col, Row, Carousel } from 'antd';
const Hero = () => {
  return (
    <>
        <div className='heroBlock'>
            <Row gutter={[24, 24]}>
                <Col xs={24} lg={18}>
                    <Carousel autoplay autoplaySpeed={2000}>
                        <div>
                        <img src="./assets/images/banner-img1.jpg" alt="Carousel" />
                        </div>
                        <div>
                            <img src="./assets/images/banner-img2.jpg" alt="Carousel" />
                        </div>
                        <div>
                            <img src="./assets/images/banner-img3.jpg" alt="Carousel" />
                        </div>
                    </Carousel>
                </Col>
                <Col xs={24} lg={6}>
                    <div className="heroBlocks">
                        <div className="holder">
                            <div className="icon"><i className='fa-solid fa-truck'></i></div>
                            <div className="content">
                                <h3>Free Shipping &amp; Return</h3>
                                <p>Free shipping on orders over £20</p>
                            </div>
                        </div>
                        <div className="holder">
                            <div className="icon"><i className='fa-solid fa-sack-dollar'></i></div>
                            <div className="content">
                                <h3>Money Back Guarantee</h3>
                                <p>100% money back guarantee</p>
                            </div>
                        </div>
                        <div className="holder">
                            <div className="icon"><i className='fa-solid fa-headset'></i></div>
                            <div className="content">
                                <h3>Online Support 24/7</h3>
                                <p>Excepteur sint occaecat cupidatat</p>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    </>
  )
}

export default Hero