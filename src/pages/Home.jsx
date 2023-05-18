import React from 'react'
import Hero from '../components/home/Hero'
import RecentProducts from '../components/home/RecentProducts'
import Information from '../components/home/Information'
import ProductCategories from '../components/home/ProductCategories'
import SaleProducts from '../components/home/SaleProducts'
import TopBrands from '../components/home/TopBrands'

const Home = () => {
  return (
    <>
        <div className='container'>
            <Hero />
            <RecentProducts />
            <Information />
            <ProductCategories />
            <SaleProducts />
            <TopBrands />
        </div>
    </>
  )
}

export default Home