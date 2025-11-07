"use client"

import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"

const FlexibleModern = ({ flexibleModern, flexModernData }) => {
  const { head1, head2, head3 } = flexibleModern
  const { h_1, h_2, h_3, description, bullets, imgUrl } = flexModernData

  const sectionRef = useRef(null)
  const nightGrosRef = useRef(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [nightGrosProgress, setNightGrosProgress] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if mobile on mount and resize
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768) // md breakpoint
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const sectionTop = sectionRef.current.getBoundingClientRect().top
      const sectionHeight = sectionRef.current.getBoundingClientRect().height
      const windowHeight = window.innerHeight

      // Calculate scroll progress (0-100%)
      const progress = Math.max(0, Math.min(100, ((windowHeight - sectionTop) / (windowHeight + sectionHeight)) * 100))

      setScrollProgress(progress)
    }

    // Night Gros section scroll progress
    const handleNightGrosScroll = () => {
      if (!nightGrosRef.current) return

      const sectionTop = nightGrosRef.current.getBoundingClientRect().top
      const sectionHeight = nightGrosRef.current.getBoundingClientRect().height
      const windowHeight = window.innerHeight

      // Calculate scroll progress for Night Gros section (0-100%)
      const progress = Math.max(0, Math.min(100, ((windowHeight - sectionTop) / (windowHeight + sectionHeight)) * 100))

      setNightGrosProgress(progress)
    }

    const combinedScrollHandler = () => {
      handleScroll()
      handleNightGrosScroll()
    }

    window.addEventListener("scroll", combinedScrollHandler)
    // Initial check
    combinedScrollHandler()

    return () => window.removeEventListener("scroll", combinedScrollHandler)
  }, [])

  // Different thresholds for mobile and desktop
  const shouldAnimate = (desktopThreshold, mobileThreshold = null) => {
    const threshold = isMobile && mobileThreshold !== null ? mobileThreshold : desktopThreshold
    return scrollProgress >= threshold
  }

  // Night Gros section animation triggers - Different for mobile and desktop
  const shouldShowText = isMobile ? nightGrosProgress >= 20 : nightGrosProgress >= 40
  const shouldShowImage = isMobile ? nightGrosProgress >= 30 : nightGrosProgress >= 50

  const getProgress = (startThreshold, endThreshold) => {
    if (scrollProgress < startThreshold) return 0
    if (scrollProgress > endThreshold) return 1
    return (scrollProgress - startThreshold) / (endThreshold - startThreshold)
  }

  return (
    <>
      {/* card banner section - Smooth bottom to top animation */}
      <motion.div 
        ref={sectionRef}
        className="bg-[var(--text-color)] rounded-4xl mt-[100px] p-5 overflow-hidden"
        initial={{ opacity: 0, y: 100, height: 0 }}
        animate={{
          opacity: shouldAnimate(10, 5) ? 1 : 0,
          y: shouldAnimate(10, 5) ? 0 : 100,
          height: shouldAnimate(10, 5) ? "auto" : 0
        }}
        transition={{ 
          duration: 0.8, 
          ease: "easeOut",
          opacity: { duration: 0.6 },
          y: { duration: 0.8 }
        }}
      >
        <div className="container mx-auto h-auto">
          {/* Background gradient animation */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-[#ff6b6b] to-[var(--text-color)] rounded-4xl pointer-events-none"
            initial={{ scaleY: 0, originY: 1 }}
            animate={{
              scaleY: shouldAnimate(30, 20) ? 1 : 0,
              originY: 1,
            }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: -1,
            }}
          />

          {/* heading section */}
          <div className="w-full mt-[100px] flex flex-col justify-center gap-3 items-center relative z-10">
            <motion.p 
              className="text-center text-[#FFEEEE] font-[600] text-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{
                opacity: shouldAnimate(15, 10) ? 1 : 0,
                y: shouldAnimate(15, 10) ? 0 : 30,
              }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            >
              Dienstleistungen
            </motion.p>

            <motion.div
              className="flex justify-center items-end lg:rotate-[1deg] lg:origin-right"
              initial={{ opacity: 0, x: -50 }}
              animate={{
                opacity: shouldAnimate(20, 15) ? 1 : 0,
                x: shouldAnimate(20, 15) ? 0 : -50,
              }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            >
              <motion.img
                src="/assets/images/home/flexible-head1-l-img.png"
                className="h-[100px] w-[100px] object-contain hidden lg:block"
                alt=""
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: shouldAnimate(20, 15) ? 1 : 0,
                  scale: shouldAnimate(20, 15) ? 1 : 0.8,
                }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
              />
              <motion.h1 
                className="text-3xl text-center sm:text-5xl md:text-7xl lg:text-8xl text-[#FFEEEE] uppercase"
                initial={{ opacity: 0, y: 50 }}
                animate={{
                  opacity: shouldAnimate(20, 15) ? 1 : 0,
                  y: shouldAnimate(20, 15) ? 0 : 50,
                }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              >
                {head1}
              </motion.h1>
            </motion.div>

            <motion.div
              className="flex justify-center items-center lg:rotate-[.5deg] lg:origin-right w-full"
              initial={{ opacity: 0, x: -50 }}
              animate={{
                opacity: shouldAnimate(30, 20) ? 1 : 0,
                x: shouldAnimate(30, 20) ? 0 : -50,
              }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
            >
              <motion.h1 
                className="text-3xl text-center lg:text-left sm:text-5xl md:text-7xl lg:text-[90px] text-[#FFEEEE] uppercase"
                initial={{ opacity: 0, y: 50 }}
                animate={{
                  opacity: shouldAnimate(30, 20) ? 1 : 0,
                  y: shouldAnimate(30, 20) ? 0 : 50,
                }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
              >
                {head2}
              </motion.h1>
            </motion.div>

            <motion.div
              className="flex justify-center items-center lg:rotate-[0deg] lg:origin-right"
              initial={{ opacity: 0, x: -50 }}
              animate={{
                opacity: shouldAnimate(40, 25) ? 1 : 0,
                x: shouldAnimate(40, 25) ? 0 : -50,
              }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
            >
              <motion.img
                src="/assets/images/home/ellips.png"
                className="h-[60px] w-[60px] object-contain hidden lg:block"
                alt=""
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: shouldAnimate(40, 25) ? 1 : 0,
                  scale: shouldAnimate(40, 25) ? 1 : 0.8,
                }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
              />
              <motion.h1 
                className="text-[28px] text-center sm:text-5xl md:text-7xl lg:text-8xl text-[#FFEEEE] uppercase"
                initial={{ opacity: 0, y: 50 }}
                animate={{
                  opacity: shouldAnimate(40, 25) ? 1 : 0,
                  y: shouldAnimate(40, 25) ? 0 : 50,
                }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
              >
                {head3}
              </motion.h1>
              <motion.img
                src="/assets/images/home/red-start.png"
                className="h-[100px] w-[100px] object-contain hidden lg:block"
                alt=""
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: shouldAnimate(40, 25) ? 1 : 0,
                  scale: shouldAnimate(40, 25) ? 1 : 0.8,
                }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
              />
            </motion.div>
          </div>
          {/* heading section */}

          {/* cards section */}
          <section className="mt-10 md:my-14">
            <div className="mx-auto flex flex-wrap md:flex-row items-stretch justify-center gap-6 md:gap-8 lg:gap-4">
              {/* Card 1 - Appears earlier on mobile */}
              <motion.article
                className="w-full md:w-[260px] lg:w-[290px] min-h-[350px] shrink-0"
                initial={{ opacity: 0, y: 50 }}
                animate={{
                  opacity: shouldAnimate(50, 30) ? 1 : 0,
                  y: shouldAnimate(50, 30) ? 0 : 50,
                }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              >
                <div
                  className="rounded-[28px] h-full shadow-lg p-6 md:p-7 lg:rotate-[-3deg] transition-all duration-700 animate-float"
                  style={{ backgroundColor: "#FFECEE" }}
                >
                  <div className="text-center flex flex-col justify-around h-full items-center">
                    <p className="text-[16px] tracking-widest font-semibold uppercase mb-2">01</p>
                    <h3 className="text-xl md:text-2xl font-extrabold uppercase leading-tight">Markenidentität</h3>
                    <img src="/assets/images/home/bulb.png" alt="Icon" className="mx-auto my-3 h-15 w-15" />
                    <p className="font-[500] leading-relaxed">
                      Wir helfen Marken dabei, ihre Stimme und visuelle Elemente zu finden, die wirklich Bestand haben.
                    </p>
                  </div>
                </div>
              </motion.article>

              {/* Card 2 */}
              <motion.article
                className="w-full md:w-[260px] lg:w-[290px] min-h-[350px] shrink-0"
                initial={{ opacity: 0, y: 50 }}
                animate={{
                  opacity: shouldAnimate(55, 40) ? 1 : 0,
                  y: shouldAnimate(55, 40) ? 0 : 50,
                }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              >
                <div
                  className="rounded-[28px] h-full shadow-lg p-6 md:p-7 lg:rotate-[2deg] transition-all duration-700 animate-float"
                  style={{ backgroundColor: "#EDE4D6" }}
                >
                  <div className="text-center flex flex-col justify-around h-full">
                    <p className="text-[16px] tracking-widest font-semibold uppercase mb-2">02</p>
                    <h3 className="text-xl md:text-2xl font-extrabold uppercase leading-tight">Web-Erlebnis</h3>
                    <img src="/assets/images/home/Web-Erlebnis.png" alt="Icon" className="mx-auto my-3 h-15 w-15" />
                    <p className="font-[500] leading-relaxed">
                      Schnelle und ansprechende Websites erstellen, die Menschen zum Handeln bewegen.
                    </p>
                  </div>
                </div>
              </motion.article>

              {/* Card 3 */}
              <motion.article
                className="w-full md:w-[260px] lg:w-[290px] min-h-[350px] shrink-0"
                initial={{ opacity: 0, y: 50 }}
                animate={{
                  opacity: shouldAnimate(60, 50) ? 1 : 0,
                  y: shouldAnimate(60, 50) ? 0 : 50,
                }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
              >
                <div
                  className="rounded-[28px] h-full shadow-lg p-6 md:p-7 lg:rotate-[-1.5deg] transition-all duration-700 animate-float"
                  style={{ backgroundColor: "#FFE8F0" }}
                >
                  <div className="text-center flex flex-col justify-around h-full">
                    <p className="text-[16px] tracking-widest font-semibold uppercase mb-2">03</p>
                    <h3 className="text-xl md:text-2xl font-extrabold uppercase leading-tight">
                      Inhalt &amp; Bewegung
                    </h3>
                    <img src="/assets/images/home/diamond.png" alt="Icon" className="mx-auto my-3 h-15 w-15" />
                    <p className="font-[500] leading-relaxed">
                      Geschichten schaffen, die verbinden, inspirieren und in Erinnerung bleiben.
                    </p>
                  </div>
                </div>
              </motion.article>

              {/* Card 4 */}
              <motion.article
                className="w-full md:w-[260px] lg:w-[290px] min-h-[350px] shrink-0"
                initial={{ opacity: 0, y: 50 }}
                animate={{
                  opacity: shouldAnimate(65, 65) ? 1 : 0,
                  y: shouldAnimate(65, 65) ? 0 : 50,
                }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
              >
                <div
                  className="rounded-[28px] h-full shadow-lg p-6 md:p-7 lg:rotate-[3deg] transition-all duration-700 animate-float"
                  style={{ backgroundColor: "#E9E0CF" }}
                >
                  <div className="text-center flex flex-col justify-around h-full">
                    <p className="text-[16px] tracking-widest font-semibold uppercase mb-2">04</p>
                    <h3 className="text-xl md:text-2xl font-extrabold uppercase leading-tight">
                      Wachstum &amp; Anzeigen
                    </h3>
                    <img src="/assets/images/home/flower.png" alt="Icon" className="mx-auto my-3 h-15 w-15" />
                    <p className="font-[500] leading-relaxed">
                      Steigern Sie Sichtbarkeit und Rendite durch intelligente, datengesteuerte Kampagnen.
                    </p>
                  </div>
                </div>
              </motion.article>
            </div>
          </section>
          {/* cards section */}
        </div>
      </motion.div>
      {/* card banner section */}

      {/* Night Gros - Improved Responsive Animation */}
      <section ref={nightGrosRef} className="bg-[#F9E9EA] rounded-3xl mt-16 md:mt-24">
        <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16">
          <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-12">
            {/* Left: Headline + Copy */}
            <div className="w-full md:w-1/2">
              <motion.h1 
                className="text-2xl sm:text-4xl md:text-6xl font-extrabold uppercase leading-tight text-[var(--text-color)]"
                initial={{ opacity: 0, y: isMobile ? 20 : 30 }}
                animate={{
                  opacity: shouldShowText ? 1 : 0,
                  y: shouldShowText ? 0 : (isMobile ? 20 : 30),
                }}
                transition={{ duration: isMobile ? 0.4 : 0.6, ease: "easeOut", delay: isMobile ? 0 : 0.1 }}
              >
                {h_1}
              </motion.h1>
              
              <motion.h1 
                className="text-2xl sm:text-4xl md:text-6xl font-extrabold uppercase leading-tight text-[var(--text-color)] mt-2"
                initial={{ opacity: 0, y: isMobile ? 20 : 30 }}
                animate={{
                  opacity: shouldShowText ? 1 : 0,
                  y: shouldShowText ? 0 : (isMobile ? 20 : 30),
                }}
                transition={{ duration: isMobile ? 0.4 : 0.6, ease: "easeOut", delay: isMobile ? 0.1 : 0.2 }}
              >
                {h_2}
              </motion.h1>
              
              <motion.h1 
                className="text-2xl sm:text-4xl md:text-6xl font-extrabold uppercase leading-tight text-[var(--text-color)] mt-2"
                initial={{ opacity: 0, y: isMobile ? 20 : 30 }}
                animate={{
                  opacity: shouldShowText ? 1 : 0,
                  y: shouldShowText ? 0 : (isMobile ? 20 : 30),
                }}
                transition={{ duration: isMobile ? 0.4 : 0.6, ease: "easeOut", delay: isMobile ? 0.2 : 0.3 }}
              >
                {h_3}
              </motion.h1>

              <motion.p 
                className="mt-4 sm:mt-6 text-sm sm:text-[15px] md:text-base font-[500] leading-relaxed text-[var(--text-color)]"
                initial={{ opacity: 0, y: isMobile ? 15 : 20 }}
                animate={{
                  opacity: shouldShowText ? 1 : 0,
                  y: shouldShowText ? 0 : (isMobile ? 15 : 20),
                }}
                transition={{ duration: isMobile ? 0.4 : 0.6, ease: "easeOut", delay: isMobile ? 0.3 : 0.4 }}
              >
                {description}
              </motion.p>

              <motion.ul 
                className="mt-4 sm:mt-6 space-y-2 sm:space-y-3 text-sm sm:text-[15px] font-[600] md:text-base text-[var(--text-color)]"
                initial={{ opacity: 0, x: isMobile ? -10 : -20 }}
                animate={{
                  opacity: shouldShowText ? 1 : 0,
                  x: shouldShowText ? 0 : (isMobile ? -10 : -20),
                }}
                transition={{ duration: isMobile ? 0.4 : 0.6, ease: "easeOut", delay: isMobile ? 0.4 : 0.5 }}
              >
                {bullets.map((item, index) => {
                  return (
                    <motion.li 
                      key={index} 
                      className="flex gap-3 items-start"
                      initial={{ opacity: 0, x: isMobile ? -5 : -10 }}
                      animate={{
                        opacity: shouldShowText ? 1 : 0,
                        x: shouldShowText ? 0 : (isMobile ? -5 : -10),
                      }}
                      transition={{ 
                        duration: isMobile ? 0.3 : 0.4, 
                        ease: "easeOut", 
                        delay: isMobile ? (0.5 + (index * 0.05)) : (0.6 + (index * 0.1)) 
                      }}
                    >
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--text-color)] flex-shrink-0"></span>
                      <span className="leading-tight">{item}</span>
                    </motion.li>
                  )
                })}
              </motion.ul>
            </div>

            {/* Right: Image + doodle */}
            <motion.div 
              className="w-full h-[300px] sm:h-[400px] md:h-[550px] md:w-[40%] relative rounded-3xl overflow-hidden mt-6 md:mt-0"
              initial={{ 
                opacity: 0, 
                scale: isMobile ? 0.95 : 0.9, 
                x: isMobile ? 30 : 50 
              }}
              animate={{
                opacity: shouldShowImage ? 1 : 0,
                scale: shouldShowImage ? 1 : (isMobile ? 0.95 : 0.9),
                x: shouldShowImage ? 0 : (isMobile ? 30 : 50),
              }}
              transition={{ 
                duration: isMobile ? 0.5 : 0.8, 
                ease: "easeOut", 
                delay: isMobile ? 0.2 : 0.3 
              }}
            >
              <img 
                src={imgUrl || "/placeholder.svg"} 
                className="h-[100%] w-[100%] object-cover" 
                alt="Night Gros" 
              />
            </motion.div>
          </div>
        </div>
      </section>
      {/* Night Gros */}

      <div className="lg:h-[500px] lg:mt-[100px]">
        <img src="/assets/images/home/banner.jpg" className="h-[100%] w-[100%] lg:object-contain" alt="" />
      </div>

      {/* Custom CSS for floating animation */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(var(--rotation, 0deg));
          }
          50% {
            transform: translateY(-10px) rotate(var(--rotation, 0deg));
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </>
  )
}

export default FlexibleModern