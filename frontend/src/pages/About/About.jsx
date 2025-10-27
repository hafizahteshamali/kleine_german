import { AboutBannerData, processSteps, SecondBannerData } from "../../assets/ConstantData"
import BlogSec from "../Home/elements/BlogSec"
import Creat_Effic_Effici from "../Home/elements/Creat_Effic_Effici"
import Banner from "./elements/Banner"
import SecondBanner from "./elements/SecondBanner"

const About = () => {
  return (
    <div>
        <Banner AboutBannerData={AboutBannerData} />
        <SecondBanner SecondBannerData={SecondBannerData} />
        <Creat_Effic_Effici processSteps={processSteps} />
      <BlogSec />
    </div>
  )
}

export default About