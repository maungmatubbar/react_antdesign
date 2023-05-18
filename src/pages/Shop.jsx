import React from 'react'
import { Dropdown } from 'antd';
import { Button, Col, Row } from 'antd';
  const products = [
    {
      key: '1',
      image: require('../assets/images/img1.jpg'),
      title: 'Fairy Clean & Fresh Washing Up Liquid Pomegranate &amp; Honeysuckle 520 ml',
      price: '2.00'
    },
    {
      key: '2',
      image: require('../assets/images/img2.jpg'),
      title: 'Colgate Triple Action Toothpaste 100ml',
      price: '1.50'
    },
    {
      key: '3',
      image: require('../assets/images/img3.jpg'),
      title: 'Breeze Toilet Tissue Soft White 24 Roll',
      price: '5.70'
    },
    {
      key: '4',
      image: require('../assets/images/img4.jpg'),
      title: 'Comfort intense Fresh Sky Fabric Conditioner Liquid 60 Wash 900 ML',
      price: '4.50'
    },
    {
      key: '1',
      image: require('../assets/images/img5.jpg'),
      title: 'Glens Vodka 70cl Extra smooth',
      saleprice: '£20.00',
      price: '15.50'
    },
    {
      key: '2',
      image: require('../assets/images/img6.jpg'),
      title: 'Pot Noodle Chicken & Mushroom Standard 90g',
      saleprice: '£1.50',
      price: '0.90'
    },
    {
      key: '3',
      image: require('../assets/images/img7.jpg'),
      title: 'Branston Baked Beans in a Rich and Tasty Tomato Sauce 4 x 410g',
      saleprice: '£2.00',
      price: '1.50'
    },
    {
      key: '4',
      image: require('../assets/images/img8.jpg'),
      title: 'Kelloggs Crunchy Nut Hazelnut & Chocolate Granola 380g',
      saleprice: '£3.00',
      price: '2.50'
    }
  ];
  const items = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
         Featured
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          Low To High Price
        </a>
      ),
    },
    {
      key: '3',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
           Hight To Low Price
        </a>
      ),
    },
  ];
const Shop = () => {
  return (
    <>
      <div className="block products shopPage">
        <div className="container">
          <div className="titleHolder">
            <h2>Shop</h2>
            <Dropdown menu={{items,}} placement="bottomLeft">
              <Button>Sort By</Button>
            </Dropdown>
          </div>
          <Row gutter={24}>
                {products && products.map((product,index)=>(
                    <Col xs={12} sm={8} lg={6} key={index}>
                        <div className="content">
                            <div className="image">
                                <img src={product.image} alt="" />
                            </div>
                        </div>
                        <h3>{product.title}</h3>
                        <div className='price'>${product.price}</div>
                        <Button type='primary'>Add To Cart</Button>
                    </Col>
                ))}
            </Row>
        </div>
      </div>
    </>
  )
}

export default Shop