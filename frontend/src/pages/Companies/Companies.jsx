import Banner from "./elements/Banner"
import { CompaniesBannerData, CompaniesMainHeading } from "../../assets/ConstantData"
import Projects from "./elements/Projects"

const Companies = () => {
  return (
    <div>
      <Banner CompaniesBannerData={CompaniesBannerData} CompaniesMainHeading={CompaniesMainHeading} />
      <Projects />
    </div>
  )
}

export default Companies