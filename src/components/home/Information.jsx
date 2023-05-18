import { Col, Row } from 'antd';
import React from 'react';
import bgImg1 from '../../assets/images/ad-img1.png';
import bgImg2 from '../../assets/images/ad-img2.png';
const Information = () => {
  return (
    <>
        <div className='block informationBlock'>
            <Row gutter={24}>
                <Col lg={12}>
                    <div className='holder' style={{
                        backgroundImage: `url(${bgImg1})`,
                        backgroundRepeat: 'no-repeat'
                    }}>
                        <h3>Everyday essentials from</h3>
                        <div className='price'>$60</div>
                    </div>
                </Col>
                <Col lg={12}>
                    <div className='holder' style={{
                        backgroundImage: `url(${bgImg2})`,
                        backgroundRepeat: 'no-repeat'
                    }}>
                        <h3>Same day delivery</h3>
                        <p>Free when you spend over 50</p>
                    </div>
                </Col>
            </Row>
        </div>
    </>
  )
}

export default Information