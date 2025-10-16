import React from 'react'
import Banner from './elements/Banner'
import { flexibleModern, flexModernData, homeBannerData, homeMainHeading, processSteps } from '../../assets/ConstantData'
import FlexibleModern from './elements/FlexibleModern'
import Creat_Effic_Effici from './elements/Creat_Effic_Effici'
import BlogSec from './elements/BlogSec'

const Home = () => {
  return (
    <div>
      <Banner homeBannerData={homeBannerData} homeMainHeading={homeMainHeading} />
      <FlexibleModern flexibleModern={flexibleModern} flexModernData={flexModernData} />
      <Creat_Effic_Effici processSteps={processSteps} />
      <BlogSec />
    </div>
  )
}

export default Home