const Banner = ({ AboutBannerData }) => {
    const {heading1, heading2, heading3, imgUrl, description, btn1Text, btn2Text} = AboutBannerData;
  
    return (
      <div className="mt-[150px]">
        <div className="container mx-auto">
          <div className="h-[600px] w-full flex flex-col gap-5 justify-center items-center">
  
            {/* First Heading - Left Tilt */}
            <div className="w-full flex justify-center gap-3 items-center -rotate-4">
              <img
                src="/assets/images/about/banner_heading_left_img.png"
                className="h-18 w-18 object-contain"
                alt=""
              />
              <h1 className="text-8xl text-[var(--text-color)] uppercase">
                {heading1}
              </h1>
              <img
                src="/assets/images/about/banner_heading_right_img.png"
                className=""
                alt=""
              />
            </div>
  
            {/* Second Headings - Left & Right Tilt */}
            <div className="w-full flex justify-center gap-3 items-center">
              <h1 className="text-8xl text-[var(--text-color)] uppercase -rotate-4">
                {heading2}
              </h1>
              <h1 className="text-8xl text-[var(--text-color)] uppercase rotate-4">
                {heading3}
              </h1>
            </div>

            <div className="w-full bg-green-400 flex justify-center items-center">

            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Banner;
  