import React from "react";
import Button from "../../../components/Button";

const Banner = ({ homeBannerData, homeMainHeading }) => {
  const {
    imgUrl,
    heading1,
    heading2,
    heading3,
    heading4,
    question,
    description,
    btn1Text,
    btn2Text,
  } = homeBannerData;

  const { head1, head2, head3 } = homeMainHeading;
  return (
    <>
      <div className="mt-[150px]">
        <div className="container mx-auto">
          <div className="min-h-[600px] w-full flex flex-col lg:flex-row justify-center items-center">
            <div className="min-h-[500px] w-full lg:w-[75%] flex flex-col justify-start items-end">
              <div className="hidden lg:flex justify-center w-full lg:justify-around items-center gap-5 lg:w-[70%]">
                <h1 className="text-6xl lg:text-8xl font-heirloom text-center">
                  {heading1}
                </h1>
                <img
                  src="/assets/images/home/heading_vector.png"
                  className="h-[100px] hidden lg:block w-[100px] object-contain"
                  alt=""
                />
              </div>

              <div className="h-full w-full flex flex-col md:flex-row lg:flex-row justify-center md:justify-between lg:items-start md:items-start items-center">
                <img
                  src={imgUrl}
                  alt=""
                  className="h-[400px] w-[90%] md:h-full md:w-[48%] lg:w-auto object-cover"
                />
                <div className="flex flex-col justify-center items-center md:items-center lg:items-start mt-[50px] lg:mt-0 w-full md:w-[48%] lg:w-auto">
                  <h1 className="text-6xl lg:text-8xl lg:hidden block">
                    {heading1}
                  </h1>
                  <h1 className="text-6xl lg:text-8xl">{heading2}</h1>
                  <h1 className="text-6xl lg:text-8xl">{heading3}</h1>
                  <h1 className="text-6xl lg:text-8xl">{heading4}</h1>

                  <h4 className="mt-5 font-[600] text-[#9D8C7C]">{question}</h4>
                  <p className="text-[var(--text-color)] mt-5 font-[600] text-center lg:text-left">
                    {description}
                  </p>

                  <div className="w-full mt-5 flex justify-between items-center">
                    <Button
                      text={btn1Text}
                      className="h-[50px] font-[600] rounded-full text-sm lg:text-[16px] w-[48%] bg-[#EFAE1E] text-[var(--black-color)]"
                    />

                    <Button
                      text={btn2Text}
                      className="h-[50px] font-[600] rounded-full text-sm lg:text-[16px] w-[48%] border border-[#CBBDAB] text-[#CBBDAB]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full mt-[100px] flex flex-col justify-center items-center">
            <div className="flex justify-center items-center rotate-[-5deg] origin-right">
              <img src="/assets/images/home/hl.png" alt="" />
              <h1 className="text-8xl">{head1}</h1>
              <img
                src="/assets/images/home/hr.png"
                className="h-[130px] w-[130px] object-contain"
                alt=""
              />
            </div>

            <div className="flex justify-center items-center">
              <img
                src="/assets/images/home/hl2.png"
                className="h-[130px] w-[130px] object-contain -rotate-90"
                alt=""
              />
              <h1 className="text-8xl">{head2}</h1>
            </div>

            <h1 className="text-8xl rotate-[-2deg]">{head3}</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
