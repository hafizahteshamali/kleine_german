import React from 'react'
import Banner from './elements/Banner'
import { homeBannerData, homeMainHeading } from '../../assets/ConstantData'

const Home = () => {
  return (
    <div>
      <Banner homeBannerData={homeBannerData} homeMainHeading={homeMainHeading} />
    </div>
  )
}

export default Home