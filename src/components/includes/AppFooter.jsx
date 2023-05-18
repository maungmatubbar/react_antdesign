import React from 'react'
import paymentImg from '../../assets/images/payment.png'
import { BackTop } from 'antd'
const AppFooter = () => {
  return (
    <>
      <div className="footerCopyright">
        <div className="container">
            <div className="copyright">©2022 Created by Mong</div>
            <div className="toTop"><img src={paymentImg} alt="Payment" /></div>
        </div>
        <BackTop />
        </div>
    </>
  )
}

export default AppFooter