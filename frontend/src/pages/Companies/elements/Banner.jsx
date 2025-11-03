import React, { useEffect } from "react";
import Button from "../../../components/Button";
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = ({ CompaniesBannerData, CompaniesMainHeading }) => {
  const {
    imgUrl,
    heading1,
    heading2,
    heading3,
    description,
    btn1Text,
    btn2Text,
  } = CompaniesBannerData;

    const { head1, head2, head3, head4, head5 } = CompaniesMainHeading;

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: false,
      offset: 50,
      mirror: true,
    });
  }, []);

  // Refresh AOS on component update
  useEffect(() => {
    AOS.refresh();
  });

  return (
    <>
      <div className="mt-[150px]">
        <div className="container mx-auto">
          <div className="w-full flex flex-col lg:flex-row justify-center items-center">
            <div className="min-h-[500px] w-full lg:w-[85%] flex flex-col justify-start items-end">
              <div className="w-full flex flex-col justify-center items-center">
                <div className="flex justify-center w-full items-center gap-10 lg:w-[100%]">
                  <img
                    src="/assets/images/companies/left-banner-heading.png"
                    className="h-[100px] w-[100px] object-contain hidden lg:block"
                    alt=""
                    data-aos="zoom-in"
                    data-aos-delay="300"
                    data-aos-once="false"
                  />
                  <h1
                    className="text-3xl sm:text-5xl md:text-6xl xl:text-[90px] font-heirloom text-center uppercase"
                    data-aos="fade-down"
                    data-aos-delay="100"
                    data-aos-once="false"
                  >
                    {heading1}
                  </h1>
                  <img
                    src="/assets/images/companies/right-banner-heading.png"
                    className="h-[100px] w-[100px] object-contain hidden lg:block"
                    alt=""
                    data-aos="zoom-in"
                    data-aos-delay="300"
                    data-aos-once="false"
                  />
                </div>
                <h1
                  className="text-3xl sm:text-5xl md:text-6xl xl:text-[90px] uppercase"
                  data-aos="fade-down"
                  data-aos-delay="100"
                  data-aos-once="false"
                >
                  {heading2}
                </h1>
              </div>

              <div className="h-full w-[95%] mx-auto lg:w-full lg:mx-0 flex flex-col md:flex-row lg:flex-row justify-center gap-3 md:justify-between lg:items-start md:items-start items-center">
                <img
                  src={imgUrl}
                  alt=""
                  className="min-h-[400px] w-[90%] md:h-[550px] md:w-[48%] lg:w-[45%] md:object-contain lg:object-cover order-1 md:-order-1"
                  data-aos="fade-right"
                  data-aos-delay="200"
                  data-aos-once="false"
                />
                <div className="flex flex-col justify-between lg:min-h-[500px] items-center md:items-center lg:items-start w-[100%] mx-auto md:w-[48%] lg:w-[50%]">
                  <h1
                    className="text-3xl sm:text-5xl md:text-6xl xl:text-[90px] uppercase"
                    data-aos="fade-up"
                    data-aos-delay="200"
                    data-aos-once="false"
                  >
                    {heading3}
                  </h1>

                  <div className="w-full flex flex-col justify-center items-center">
                    <p
                      className="text-[var(--text-color)] mt-5 font-[600] text-center lg:text-left"
                      data-aos="fade-up"
                      data-aos-delay="350"
                      data-aos-once="false"
                    >
                      {description}
                    </p>

                    <div className="w-full mt-5 flex flex-col lg:flex-row gap-4 lg:gap-0 justify-between items-center">
                      <div
                        data-aos="fade-right"
                        data-aos-delay="400"
                        className="w-full lg:w-[48%]"
                        data-aos-once="false"
                      >
                        <Button
                          text={btn1Text}
                          className="h-[50px] font-[600] rounded-full text-sm lg:text-[16px] w-full bg-[#F26454] text-[var(--primary-color)]"
                        />
                      </div>

                      <div
                        data-aos="fade-left"
                        data-aos-delay="400"
                        className="w-full lg:w-[48%]"
                        data-aos-once="false"
                      >
                        <Button
                          text={btn2Text}
                          className="h-[50px] font-[600] rounded-full text-sm lg:text-[16px] w-[100%] border border-[#CBBDAB] text-[#CBBDAB]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full mt-[100px] flex flex-col justify-center items-center">
            <div 
              className="flex justify-center items-center lg:rotate-[1deg] lg:origin-right w-full"
            >
              <h1 
                className="text-7xl xl:text-[90px] uppercase text-center"
                data-aos="zoom-in"
                data-aos-delay="350"
                data-aos-once="false"
              >
                {head1}
              </h1>
            </div>

            <div 
              className="flex justify-center items-center gap-5 w-full relative"
            >
              <div className="flex justify-center items-center gap-5">
              <h1 
                className="text-7xl xl:text-[90px] uppercase lg:-rotate-[3.5deg] text-center"
                data-aos="zoom-in"
                data-aos-delay="650"
                data-aos-once="false"
              >
                {head2}
              </h1>
              <h1 
              className="text-4xl sm:text-6xl md:text-7xl lg:text-5xl lg:rotate-[3.5deg] uppercase text-center"
              data-aos="zoom-in"
              data-aos-delay="700"
              data-aos-once="false"
            >
              {head3}
            </h1>
              </div>

                <img
                src="/assets/images/companies/right-banner-heading.png"
                className="h-[130px] w-[130px] object-contain hidden lg:block absolute right-[17%]"
                alt=""
                data-aos="zoom-in"
                data-aos-delay="450"
                data-aos-once="false"
              />
            </div>
            
            <h1 
              className="text-7xl xl:text-[90px] lg:rotate-[-1deg] uppercase mt-2 text-center"
              data-aos="zoom-in"
              data-aos-delay="700"
              data-aos-once="false"
            >
              {head4}
            </h1>
            <div className="w-full flex justify-center items-center gap-5 lg:rotate-[-2deg] lg:-mt-[20px]">
            <img
                src="/assets/images/companies/left-banner-heading.png"
                className="h-[130px] w-[130px] object-contain hidden lg:block"
                alt=""
                data-aos="zoom-in"
                data-aos-delay="450"
                data-aos-once="false"
              />
              <h1 
              className="text-7xl xl:text-[90px] uppercase text-center"
              data-aos="zoom-in"
              data-aos-delay="700"
              data-aos-once="false"
            >
              {head5}
            </h1>
            <img
                src="/assets/images/companies/right-banner-heading.png"
                className="h-[130px] w-[130px] object-contain hidden lg:block"
                alt=""
                data-aos="zoom-in"
                data-aos-delay="450"
                data-aos-once="false"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
