import { AboutBannerData } from "../../assets/ConstantData"
import Banner from "./elements/Banner"
import SecondBanner from "./elements/SecondBanner"

const About = () => {
  return (
    <div>
        <Banner AboutBannerData={AboutBannerData} />
        <SecondBanner />
    </div>
  )
}

export default About