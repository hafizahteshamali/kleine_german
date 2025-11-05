"use client"

import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"
import Button from "../../../components/Button"
import AOS from "aos"
import "aos/dist/aos.css"

const Banner = ({ homeBannerData, homeMainHeading }) => {
  const { imgUrl, heading1, heading2, heading3, heading4, question, description, btn1Text, btn2Text } = homeBannerData
  const { head1, head2, head3 } = homeMainHeading

  // State for scroll control
  const [scrollStep, setScrollStep] = useState(0)
  const [isScrollLocked, setIsScrollLocked] = useState(false)
  const [isInSection, setIsInSection] = useState(false)
  const [isScrollingUp, setIsScrollingUp] = useState(false)
  const [thirdSectionProgress, setThirdSectionProgress] = useState(0)
  const [showedHeadings, setShowedHeadings] = useState({ head1: false, head2: false, head3: false })
  const secondSectionRef = useRef(null)
  const thirdSectionRef = useRef(null)
  const observerRef = useRef(null)
  const thirdSectionObserverRef = useRef(null)
  const lastScrollY = useRef(0)

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

  // Intersection Observer - 100% viewport detection for second section
  useEffect(() => {
    const options = {
      threshold: [0, 0.1, 0.9, 1],
      rootMargin: "0px",
    }

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const isFullyVisible = entry.intersectionRatio >= 0.9

        if (isFullyVisible && !isInSection) {
          // Section fully in viewport
          setIsInSection(true)
          if (scrollStep === 0) {
            setScrollStep(1)
            setIsScrollLocked(true)
          }
        } else if (entry.intersectionRatio <= 0.1 && isInSection) {
          // Section leaving viewport - reset
          setIsInSection(false)
          if (scrollStep > 0) {
            setScrollStep(0)
            setIsScrollLocked(false)
          }
        }
      })
    }, options)

    if (secondSectionRef.current) {
      observerRef.current.observe(secondSectionRef.current)
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [scrollStep, isInSection])

  // Third section progress tracking
  useEffect(() => {
    const handleThirdSectionScroll = () => {
      if (!thirdSectionRef.current || isScrollLocked) return

      const section = thirdSectionRef.current
      const rect = section.getBoundingClientRect()
      const windowHeight = window.innerHeight

      // Calculate how much of third section is visible (0 to 100%)
      const visiblePercent = Math.max(
        0,
        Math.min(100, ((windowHeight - rect.top) / (windowHeight + rect.height)) * 100),
      )

      setThirdSectionProgress(visiblePercent)
    }

    window.addEventListener("scroll", handleThirdSectionScroll, { passive: true })
    // Initial check
    handleThirdSectionScroll()

    return () => {
      window.removeEventListener("scroll", handleThirdSectionScroll)
    }
  }, [isScrollLocked])

  // Third section animation triggers
  const showThirdHeading = thirdSectionProgress >= 50
  const showThirdParagraph = thirdSectionProgress >= 60
  const showThirdSpans = thirdSectionProgress >= 65

  // Instead, we use preventDefault on events to control scroll behavior

  // Handle wheel/touch events for step-by-step scrolling
  useEffect(() => {
    const handleUserScroll = (e) => {
      if (!isScrollLocked || !isInSection) return

      e.preventDefault()
      e.stopPropagation()

      // Detect scroll direction
      const currentScrollY = e.type === "wheel" ? e.deltaY : e.touches[0].clientY - lastScrollY.current
      const isScrollingDown = currentScrollY > 0
      const isScrollingUp = currentScrollY < 0

      // Update last scroll position for touch events
      if (e.type === "touchmove") {
        lastScrollY.current = e.touches[0].clientY
      }

      if (isScrollingDown) {
        // Scroll down - forward animation
        setIsScrollingUp(false)
        if (scrollStep === 1) {
          setScrollStep(2)
        } else if (scrollStep === 2) {
          setScrollStep(3)
        } else if (scrollStep === 3) {
          // Final step - unlock scrolling
          setIsScrollLocked(false)
        }
      } else if (isScrollingUp) {
        // Scroll up - reverse animation
        setIsScrollingUp(true)
        if (scrollStep === 3) {
          setScrollStep(2)
        } else if (scrollStep === 2) {
          setScrollStep(1)
        } else if (scrollStep === 1) {
          // First step - unlock and scroll up to previous section
          setIsScrollLocked(false)
          // Optional: Scroll to previous section
          window.scrollBy(0, -100)
        }
      }
    }

    // Add event listeners with passive: false to prevent default
    window.addEventListener("wheel", handleUserScroll, { passive: false })
    window.addEventListener("touchmove", handleUserScroll, { passive: false })

    return () => {
      window.removeEventListener("wheel", handleUserScroll)
      window.removeEventListener("touchmove", handleUserScroll)
    }
  }, [isScrollLocked, scrollStep, isInSection])

  // Reset when leaving section
  useEffect(() => {
    if (!isInSection && scrollStep > 0) {
      setScrollStep(0)
      setIsScrollLocked(false)
    }
  }, [isInSection, scrollStep])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      // No cleanup needed since we're not setting overflow hidden anymore
    }
  }, [])

  useEffect(() => {
    if (scrollStep >= 1 && !showedHeadings.head1) {
      setShowedHeadings((prev) => ({ ...prev, head1: true }))
    }
  }, [scrollStep, showedHeadings.head1])

  useEffect(() => {
    if (scrollStep >= 2 && !showedHeadings.head2) {
      setShowedHeadings((prev) => ({ ...prev, head2: true }))
    }
  }, [scrollStep, showedHeadings.head2])

  useEffect(() => {
    if (scrollStep >= 3 && !showedHeadings.head3) {
      setShowedHeadings((prev) => ({ ...prev, head3: true }))
    }
  }, [scrollStep, showedHeadings.head3])

  return (
    <>
      <div className="mt-[150px]">
        <div className="container mx-auto">
          {/* first section */}
          <div className="min-h-[600px] w-full flex flex-col lg:flex-row justify-center items-center">
            <div className="min-h-[500px] w-full lg:w-[75%] flex flex-col justify-start items-end">
              <div className="hidden lg:flex justify-center w-full lg:justify-around items-center gap-5 lg:w-[70%]">
                <h1
                  className="text-6xl lg:text-8xl font-heirloom text-center"
                  data-aos="fade-down"
                  data-aos-delay="100"
                  data-aos-once="false"
                >
                  {heading1}
                </h1>
                <img
                  src="/assets/images/home/heading_vector.png"
                  className="h-[100px] hidden lg:block w-[100px] object-contain"
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
                  className="min-h-[400px] w-[90%] md:h-[550px] md:w-[48%] lg:w-full object-cover"
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

                  <h1 className="text-6xl lg:text-8xl" data-aos="fade-up" data-aos-delay="150" data-aos-once="false">
                    {heading2}
                  </h1>

                  <h1 className="text-6xl lg:text-8xl" data-aos="fade-up" data-aos-delay="200" data-aos-once="false">
                    {heading3}
                  </h1>

                  <h1 className="text-6xl lg:text-8xl" data-aos="fade-up" data-aos-delay="250" data-aos-once="false">
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

          {/* section second - with complete scroll control */}
          <div
            className="w-full mt-[100px] flex flex-col justify-center items-center min-h-screen"
            ref={secondSectionRef}
            style={{ minHeight: "100vh" }}
          >
            <motion.div
              className="flex justify-center items-center lg:rotate-[-5deg] lg:origin-right"
              key="head1"
              initial={{ opacity: 0, y: 100 }}
              animate={showedHeadings.head1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <img src="/assets/images/home/hl.png" className="hidden lg:block h-20 w-20" alt="" />
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl mx-4">{head1}</h1>
              <img
                src="/assets/images/home/hr.png"
                className="h-[130px] w-[130px] object-contain hidden lg:block"
                alt=""
              />
            </motion.div>

            <motion.div
              className="flex justify-center items-center"
              key="head2"
              initial={{ opacity: 0, y: 50 }}
              animate={showedHeadings.head2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <img
                src="/assets/images/home/hl2.png"
                className="h-[130px] w-[130px] object-contain lg:-rotate-90 hidden lg:block"
                alt=""
              />
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl mx-4">{head2}</h1>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl lg:rotate-[-1deg]"
              key="head3"
              initial={{ opacity: 0, y: 50 }}
              animate={showedHeadings.head3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {head3}
            </motion.h1>
          </div>

          {/* section third - step by step animations based on viewport percentage */}
          <div
            className="w-full mt-[100px] flex flex-col lg:flex-row lg:justify-between justify-center items-center p-3"
            ref={thirdSectionRef}
          >
            {/* Left heading - shows at 50% */}
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

            {/* Right paragraph - shows at 60% */}
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
                  initial={{ opacity: 0, x: -40 }}
                  animate={showThirdSpans ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
                  transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
                >
                  Strategien
                </motion.span>
                , durchdachtem Design und nachhaltigen digitalen Erlebnissen voranzukommen. Von{" "}
                <motion.span
                  className="bg-[#f26454] text-[#FFEEEE] px-1 inline-block mb-1"
                  initial={{ opacity: 0, x: -40 }}
                  animate={showThirdSpans ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
                  transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
                >
                  Identität
                </motion.span>{" "}
                und{" "}
                <motion.span
                  className="bg-[#a599f2] text-[#FFEEEE] px-1 inline-block mb-1"
                  initial={{ opacity: 0, x: -40 }}
                  animate={showThirdSpans ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
                  transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
                >
                  Inhalten
                </motion.span>{" "}
                bis hin zu{" "}
                <motion.span
                  className="bg-[#efae1e] text-[#FFEEEE] px-1 inline-block mb-1"
                  initial={{ opacity: 0, x: -40 }}
                  animate={showThirdSpans ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
                  transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
                >
                  Web
                </motion.span>{" "}
                und{" "}
                <motion.span
                  className="bg-[#66f254] text-[#FFEEEE] px-1 inline-block mb-1"
                  initial={{ opacity: 0, x: -40 }}
                  animate={showThirdSpans ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
                  transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
                >
                  Wachstum
                </motion.span>{" "}
                – alles, was wir entwickeln, ist darauf ausgelegt, Sie zu{" "}
                <motion.span
                  className="bg-[#5e72f8] text-[#FFEEEE] px-1 inline-block mb-1"
                  initial={{ opacity: 0, x: -40 }}
                  animate={showThirdSpans ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
                  transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
                >
                  vernetzen
                </motion.span>
                , zu unterstützen und sich mit Ihnen weiterzuentwickeln.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Banner
