"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import Button from "../../../components/Button"
import AOS from "aos"
import "aos/dist/aos.css"
import { useScrollProgress } from "../../../components/useScrollProgress"

const Banner = ({ homeBannerData, homeMainHeading }) => {
  const { imgUrl, heading1, heading2, heading3, heading4, question, description, btn1Text, btn2Text } = homeBannerData

  const { head1, head2, head3 } = homeMainHeading
  const { scrollProgress, elementRef } = useScrollProgress()
  const showHead1 = scrollProgress >= 20
  const showHead2 = scrollProgress >= 40
  const showHead3 = scrollProgress >= 50

  const showThirdHeading = scrollProgress >= 70
  const showThirdParagraph = scrollProgress >= 80
  const showThirdSpans = scrollProgress >= 90

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: false,
      offset: 50,
      mirror: true,
    })
  }, [])

  useEffect(() => {
    AOS.refresh()
  })

  const spanVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  }

  return (
    <>
      <div className="mt-[150px]">
        <div className="container mx-auto">
          {/* first section */}
          <div className="w-full flex flex-col lg:flex-row justify-center items-center">
            <div className=" w-full flex flex-col justify-start items-end">
              <div className="hidden lg:flex justify-center w-full lg:justify-end items-center lg:w-[70%] mr-15">
                <h1
                  className="text-6xl lg:text-9xl font-heirloom text-center mb-0"
                  data-aos="fade-down"
                  data-aos-delay="100"
                  data-aos-once="false"
                >
                  {heading1}
                </h1>
                <img
                  src="/assets/images/home/heading_vector.png"
                  className="hidden lg:block w-[100px] object-cover"
                  alt=""
                  data-aos="zoom-in"
                  data-aos-delay="300"
                  data-aos-once="false"
                />
              </div>

              <div className="h-full w-full flex flex-col md:flex-row lg:flex-row justify-center gap-3 md:justify-between lg:items-start md:items-start items-center">
                <img
                  src={imgUrl || "/placeholder.svg"}
                  alt=""
                  className="w-[90%] md:h-[600px] md:w-[48%] lg:w-[80%] lg:object-cover object-contain"
                  data-aos="fade-right"
                  data-aos-delay="200"
                  data-aos-once="false"
                />
                <div className="flex flex-col justify-center items-center md:items-center lg:items-start mt-[50px] lg:mt-0 w-[95%] mx-auto md:w-[48%] lg:w-auto">
                  <h1
                    className="text-6xl lg:text-8xl lg:hidden block"
                    data-aos="fade-down"
                    data-aos-delay="100"
                    data-aos-once="false"
                  >
                    {heading1}
                  </h1>

                  <h1 className="text-6xl lg:text-9xl" data-aos="fade-up" data-aos-delay="150" data-aos-once="false">
                    {heading2}
                  </h1>

                  <h1 className="text-6xl lg:text-9xl" data-aos="fade-up" data-aos-delay="200" data-aos-once="false">
                    {heading3}
                  </h1>

                  <h1 className="text-6xl lg:text-9xl" data-aos="fade-up" data-aos-delay="250" data-aos-once="false">
                    {heading4}
                  </h1>

                  <h4
                    className="mt-5 font-[600] text-[#9D8C7C]"
                    data-aos="fade-up"
                    data-aos-delay="300"
                    data-aos-once="false"
                  >
                    {question}
                  </h4>

                  <p
                    className="text-[var(--text-color)] mt-5 font-[600] text-center lg:text-left"
                    data-aos="fade-up"
                    data-aos-delay="350"
                    data-aos-once="false"
                  >
                    {description}
                  </p>

                  <div className="w-full mt-5 flex flex-col lg:flex-row gap-4 lg:gap-0 justify-between items-center">
                    <div data-aos="fade-right" data-aos-delay="400" className="w-full lg:w-[48%]" data-aos-once="false">
                      <Button
                        text={btn1Text}
                        className="h-[50px] font-[600] rounded-full text-sm lg:text-[16px] w-full bg-[#EFAE1E] text-[var(--black-color)]"
                      />
                    </div>

                    <div data-aos="fade-left" data-aos-delay="400" className="w-full lg:w-[48%]" data-aos-once="false">
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
          {/* first section */}

          {/* section second */}
          <div className="w-full mt-[100px] flex flex-col justify-center items-center" ref={elementRef}>
            <motion.div
              className="flex justify-center items-center lg:rotate-[-2deg] lg:origin-right"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={showHead1 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <img src="/assets/images/home/hl.png" className="hidden lg:block" alt="" />
              <motion.h1
                className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={showHead1 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                {head1}
              </motion.h1>
              <img
                src="/assets/images/home/hr.png"
                className="h-[130px] w-[130px] object-contain hidden lg:block"
                alt=""
              />
            </motion.div>

            <motion.div
              className="flex justify-center items-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={showHead2 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <img
                src="/assets/images/home/hl2.png"
                className="h-[130px] w-[130px] object-contain lg:-rotate-90 hidden lg:block"
                alt=""
              />
              <motion.h1
                className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={showHead2 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                {head2}
              </motion.h1>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl lg:rotate-[1deg]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={showHead3 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {head3}
            </motion.h1>
          </div>
          {/* section second */}

          {/* section third */}
          <div className="w-full mt-[100px] flex flex-col lg:flex-row lg:justify-between justify-center items-center p-3">
            <motion.div
              className="w-full lg:w-[48%]"
              initial={{ opacity: 0, x: -50 }}
              animate={showThirdHeading ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl uppercase text-[var(--text-color)]">
                Entwickelt, um die Zukunft zu gestalten
              </h1>
            </motion.div>

            <motion.div
              className="w-full lg:w-[48%]"
              initial={{ opacity: 0, x: 50 }}
              animate={showThirdParagraph ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <p className="font-[500] text-[var(--text-color)] leading-relaxed">
                Wir unterstützen Marken dabei, mit klaren{" "}
                <motion.span
                  className="bg-[#efae1e] text-[#FFEEEE] px-1 inline-block mb-1"
                  custom={0}
                  initial={{ opacity: 0, x: -40 }}
                  animate={showThirdSpans ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
                  transition={{ delay: 0 * 0.08, duration: 0.5, ease: "easeOut" }}
                >
                  Strategien
                </motion.span>
                , durchdachtem Design und nachhaltigen digitalen Erlebnissen voranzukommen. Von{" "}
                <motion.span
                  className="bg-[#f26454] text-[#FFEEEE] px-1 inline-block mb-1"
                  custom={1}
                  initial={{ opacity: 0, x: -40 }}
                  animate={showThirdSpans ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
                  transition={{ delay: 1 * 0.08, duration: 0.5, ease: "easeOut" }}
                >
                  Identität
                </motion.span>{" "}
                und{" "}
                <motion.span
                  className="bg-[#a599f2] text-[#FFEEEE] px-1 inline-block mb-1"
                  custom={2}
                  initial={{ opacity: 0, x: -40 }}
                  animate={showThirdSpans ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
                  transition={{ delay: 2 * 0.08, duration: 0.5, ease: "easeOut" }}
                >
                  Inhalten
                </motion.span>{" "}
                bis hin zu{" "}
                <motion.span
                  className="bg-[#efae1e] text-[#FFEEEE] px-1 inline-block mb-1"
                  custom={3}
                  initial={{ opacity: 0, x: -40 }}
                  animate={showThirdSpans ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
                  transition={{ delay: 3 * 0.08, duration: 0.5, ease: "easeOut" }}
                >
                  Web
                </motion.span>{" "}
                und{" "}
                <motion.span
                  className="bg-[#66f254] text-[#FFEEEE] px-1 inline-block mb-1"
                  custom={4}
                  initial={{ opacity: 0, x: -40 }}
                  animate={showThirdSpans ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
                  transition={{ delay: 4 * 0.08, duration: 0.5, ease: "easeOut" }}
                >
                  Wachstum
                </motion.span>{" "}
                – alles, was wir entwickeln, ist darauf ausgelegt, Sie zu{" "}
                <motion.span
                  className="bg-[#5e72f8] text-[#FFEEEE] px-1 inline-block mb-1"
                  custom={5}
                  initial={{ opacity: 0, x: -40 }}
                  animate={showThirdSpans ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
                  transition={{ delay: 5 * 0.08, duration: 0.5, ease: "easeOut" }}
                >
                  vernetzen
                </motion.span>
                , zu unterstützen und sich mit Ihnen weiterzuentwickeln.
              </p>
            </motion.div>
          </div>
          {/* section third */}
        </div>
      </div>
    </>
  )
}

export default Banner
