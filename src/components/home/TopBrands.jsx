import { Col, Row } from 'antd'
import React from 'react'

const TopBrands = () => {
    const products = [
        {
          key: '1',
          image: require('../../assets/images/img9.jpg'),
        },
        {
          key: '2',
          image: require('../../assets/images/img10.jpg'),
        },
        {
          key: '3',
          image: require('../../assets/images/img11.jpg'),
        },
        {
          key: '4',
          image: require('../../assets/images/img9.jpg'),
        }
      ];
  return (
    <>
        <div>
            <h3>
                TopBrands
            </h3>
            <Row>
                {products && products.map((product)=>{
                    return (
                        <Col lg={6} key={product.key}>
                            <div className="content">
                                <div className="image">
                                    <img src={product.image} alt="" />
                                </div>
                            </div>
                        </Col>
                    )
                })}
            </Row>
        </div>
    </>
  )
}

export default TopBrands