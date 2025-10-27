"use client"

import React from "react"
import Slider from "react-slick"

const BrandSection = ({ brands = [] }) => {
  const sliderRef = React.useRef(null)

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1280, // XL screens
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024, // Large screens
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // Tablets
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // Mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  // Default brands matching your image
  const defaultBrands = [
    "ITX-SOLUTIONS",
    "Mobiile-GURU", 
    "VELRAA",
    "SCLERA",
    "ITX-SOLUTIONS",
    "SCLERA",
    "SCLERA-KI-CYBERSOLUTION",
    "Il RIONE",
    "ZMA-SOLUTIOS"
  ]

  const brandList = brands.length > 0 ? brands : defaultBrands

  return (
    <div className="py-16 md:py-24 px-4 md:px-8">
      <div className="container mx-auto">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-20">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight">
            WIR GESTALTEN MARKEN,
            <br />
            DIE WIRKLICH AUFFALLEN
            <br />
            UND VERBINDEN.
          </h1>
        </div>

        {/* Brand Slider */}
        <div className="relative">
          <Slider ref={sliderRef} {...settings}>
            {brandList.map((brand, index) => (
              <div key={index} className="px-2 md:px-3">
                <div 
                  className="bg-[#FFF9F1] rounded-2xl p-4 md:p-6 lg:p-8 text-center shadow-sm hover:shadow-lg transition-all duration-300 h-[120px] md:h-[140px] lg:h-[160px] flex items-center justify-center overflow-hidden transform hover:scale-105"
                  style={{
                    transform: `rotate(${index % 2 === 0 ? '-2deg' : '2deg'})`,
                  }}
                >
                  <p className="text-xs md:text-sm lg:text-base font-bold text-gray-900 uppercase tracking-wider leading-tight">
                    {brand}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default BrandSection