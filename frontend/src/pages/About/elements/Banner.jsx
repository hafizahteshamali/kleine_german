import Button from "../../../components/Button";

const Banner = ({ AboutBannerData }) => {
    const {heading1, heading2, heading3, imgUrl, description, btn1Text, btn2Text} = AboutBannerData;
  
    return (
      <div className="mt-[150px] md:mt-[100px] lg:mt-[150px]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full flex flex-col justify-center items-center">
  
            {/* First Heading - Left Tilt */}
            <div className="w-full flex justify-center gap-2 sm:gap-3 mb-3 sm:mb-5 items-center -rotate-2 sm:-rotate-3 lg:-rotate-4">
              <img
                src="/assets/images/about/banner_heading_left_img.png"
                className="h-12 w-12 sm:h-14 sm:w-14 lg:h-18 lg:w-18 object-contain"
                alt=""
              />
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-[var(--text-color)] uppercase">
                {heading1}
              </h1>
              <img
                src="/assets/images/about/banner_heading_right_img.png"
                className="h-12 w-12 sm:h-14 sm:w-14 lg:h-18 lg:w-18 object-contain"
                alt=""
              />
            </div>
  
            {/* Second Headings - Left & Right Tilt */}
            <div className="w-full flex justify-center gap-2 sm:gap-3 items-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-[var(--text-color)] uppercase -rotate-2 sm:-rotate-3 lg:-rotate-4">
                {heading2}
              </h1>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-[var(--text-color)] uppercase rotate-2 sm:rotate-3 lg:rotate-4">
                {heading3}
              </h1>
            </div>

            {/* Content Section */}
            <div className="w-full lg:w-[90%] xl:w-[75%] mx-auto flex flex-col lg:flex-row justify-center items-center lg:items-end mt-6 sm:mt-8 lg:mt-10">
              {/* Image */}
              <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
                <img 
                  src={imgUrl} 
                  alt="" 
                  className="h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] lg:h-[450px] lg:w-[450px] xl:h-[500px] xl:w-[500px] object-cover rounded-lg" 
                />
              </div>
              
              {/* Text Content */}
              <div className="flex flex-col justify-center items-center lg:items-start gap-3 sm:gap-4 w-full lg:w-[70%] p-4 sm:p-6 lg:p-4 xl:p-6 mt-6 lg:mx-0">
                <p className="font-[600] text-base sm:text-lg lg:text-base xl:text-lg text-center lg:text-left leading-relaxed">
                  {description}
                </p>
                <div className="w-full flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-3 sm:gap-4 lg:gap-5 mt-2">
                  <Button 
                    className="py-3 w-full sm:w-[45%] lg:w-[40%] bg-[#A89CFA] text-[var(--black-color)] rounded-full font-[600] text-sm sm:text-base" 
                    text={btn1Text} 
                  />
                  <Button 
                    className="py-3 w-full sm:w-[45%] lg:w-[50%] border border-[#CBBDAB] text-[#CBBDAB] rounded-full font-[600] text-sm sm:text-base" 
                    text={btn2Text || btn1Text} 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Banner;