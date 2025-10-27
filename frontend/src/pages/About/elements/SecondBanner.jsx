import BrandSection from "../../../components/BrandSection"

const SecondBanner = ({ SecondBannerData }) => {
  const {
    profile,
    ownerName,
    firstText,
    secondText,
    heading1,
    heading2,
    heading3,
    heading4,
    heading5,
    heading6,
    brands = [],
  } = SecondBannerData

  return (
    <>
      {/* second Banner */}
      <div className="bg-[url('/assets/images/about/bg-banner.png')] overflow-hidden bg-cover bg-no-repeat rounded-3xl min-h-[600px] mt-[100px] flex justify-center items-center p-3 md:p-12 lg:p-16 w-full mx-auto">
        <div className="container mx-auto">
          <div className="flex flex-col justify-start items-start md:items-center">
            <div className="w-full md:w-[70%] mx-auto flex flex-col md:flex-row gap-5 md:gap-0 justify-between items-start">
              <div className="flex justify-center items-center gap-4 w-full md:w-[40%]">
                <img
                  src={profile || "/placeholder.svg"}
                  className="h-[100px] w-[100px] object-contain rounded-lg"
                  alt=""
                />
                <div className="">
                  <h3 className="text-[var(--white-color)] text-xl font-[700]">{ownerName}</h3>
                  <p className="text-[#7D7A76] font-[400] text-sm">{firstText}</p>
                  <p className="text-[#7D7A76] font-[400] text-sm">{secondText}</p>
                </div>
              </div>
              <div className="w-full md:w-auto">
                <div className="flex md:justify-start justify-center md:items-end items-center relative md:w-[80%] w-full mb-2">
                  <h1 className="uppercase text-3xl md:text-5xl text-[var(--white-color)] font-[700]">{heading1}</h1>
                  <img
                    src="/assets/images/about/right-heading1.png"
                    className="h-[100px] absolute right-0 w-[130px] object-contain hidden md:block"
                    alt=""
                  />
                </div>
                <h1 className="uppercase text-3xl text-center md:text-left md:text-5xl text-[var(--white-color)] font-[700] mb-2">
                  {heading2}
                </h1>
                <h1 className="uppercase text-3xl text-center md:text-left md:text-5xl text-[var(--white-color)] font-[700] mb-2">
                  {heading3}
                </h1>
              </div>
            </div>
            <div className="w-full flex flex-col justify-center items-center md:justify-start md:items-center gap-5 md:gap-2 mt-[20px] md:mt-0">
              <h1 className="uppercase text-3xl md:text-5xl text-[var(--white-color)] font-[700] text-center leading-snug md:leading-11">
                {heading4}
              </h1>
              <h1 className="uppercase text-3xl md:text-5xl text-[var(--white-color)] font-[700] text-center leading-snug md:leading-11">
                {heading5}
              </h1>
              <div className="w-full flex justify-end items-center">
                <img
                  src="/assets/images/about/ellips.png"
                  className="h-[40px] w-[40px] object-contain hidden md:block"
                  alt=""
                />
                <h1 className="uppercase text-3xl md:text-5xl text-[var(--white-color)] font-[700] text-center leading-snug md:leading-11">
                  {heading6}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* second Banner */}

      <BrandSection brands={brands} />
      {/* Brand Section */}
    </>
  )
}

export default SecondBanner
