"use client"

import { useState, useEffect } from "react"
import Button from "../../../components/Button"
import AnimatedText from "../../../components/AnimatedText"

const Creat_Effic_Effici = ({ processSteps }) => {
  const { subTitle, text1, text2, text3 } = processSteps

  const [activeTab, setActiveTab] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isAnimating, setIsAnimating] = useState(true)

  const tabs = [
    {
      id: 0,
      name: "Kunst & Kultur",
      icon: "/assets/images/home/brush.png",
      title: "Case: Kunst & Kultur",
      description:
        "Ein Atelier wollte sichtbar werden, ohne seine Seele zu verlieren. Wir gaben ein Signatur-Logo und eine Website, die Bilder atmen lässt.",
      image: "/assets/images/home/kunst-img.png",
    },
    {
      id: 1,
      name: "Handwerk",
      icon: "/assets/images/home/handwerk.png",
      title: "Case: Handwerk",
      description: "Handwerk Beschreibung hier einfügen...",
      image: "/assets/images/home/kunst-img.png",
    },
    {
      id: 2,
      name: "Gastronomie",
      icon: "/assets/images/home/Gastronomie.png",
      title: "Case: Gastronomie",
      description: "Gastronomie Beschreibung hier einfügen...",
      image: "/assets/images/home/kunst-img.png",
    },
  ]

  useEffect(() => {
    if (isAnimating) {
      const timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(timer)
            setIsAnimating(false)

            // Auto switch to next tab
            setTimeout(() => {
              const nextTab = (activeTab + 1) % tabs.length
              setActiveTab(nextTab)
              setProgress(0)
              setIsAnimating(true)
            }, 800)

            return 100
          }
          return prev + 1
        })
      }, 50)
      return () => clearInterval(timer)
    }
  }, [isAnimating, activeTab])

  const handleTabClick = (index) => {
    setActiveTab(index)
    setProgress(0)
    setIsAnimating(true)
  }

  const activeTabData = tabs[activeTab]

  return (
    <>
      <section className="w-full bg-[#FFECEE] py-12 md:py-16">
        <div className="mx-auto container">
          <div className="w-[90%] mx-auto">
            <p className="text-center text-xs md:text-[16px] opacity-60 font-[500] text-[var(--text-color)]">
              {"{ Kreativität. Effizienz. Skalierbarkeit }"}
            </p>

            <h1 className="mt-3 text-center text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight uppercase text-[#2C2420] leading-tight">
              AUSGEWÄHLTE PROJEKTE
              <br className="hidden md:block" />
              ECHTE KUNDEN, ECHTE
              <br className="hidden md:block" />
              ERGEBNISSE.
            </h1>

            {/* Tabs Row */}
            <div
              className="
                mt-8 flex flex-col md:flex-row justify-center md:justify-between 
                items-stretch gap-4 md:gap-5
              "
            >
              {tabs.map((tab, index) => (
                <div
                  key={tab.id}
                  onClick={() => handleTabClick(index)}
                  className={`relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-700 ease-in-out flex-shrink-0
                    ${
                      activeTab === index
                        ? "bg-[#F0E4D6] md:flex-grow-[2]"
                        : "bg-[#F0E4D6]/70 hover:bg-[#F0E4D6]/90 md:flex-grow"
                    }
                    h-[65px] sm:h-[70px] w-full md:w-auto
                  `}
                >
                  {/* Overlay Progress Bar */}
                  {activeTab === index && (
                    <div
                      className="absolute top-0 left-0 h-full bg-[#BCAE9F] transition-[width] duration-300 ease-linear"
                      style={{ width: `${progress}%` }}
                    ></div>
                  )}

                  {/* Text & Icon */}
                  <div className="absolute inset-0 z-10 flex items-center justify-start pl-6 gap-3 sm:gap-4 text-[14px] sm:text-[16px] font-[700] text-[var(--text-color)] uppercase">
                    <img src={tab.icon || "/placeholder.svg"} alt="" className="h-7 w-7 sm:h-9 sm:w-9 object-contain" />
                    {tab.name}
                  </div>
                </div>
              ))}
            </div>

            {/* Case Card */}
            <div className="mt-8 overflow-hidden rounded-3xl border border-[#D7CFCA] bg-[#BCAE9F]">
              <div className="flex flex-col md:flex-row justify-between h-auto md:h-[600px]">
                {/* Left */}
                <div className="w-full md:w-[40%] p-6 text-white flex flex-col justify-center items-start">
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold">{activeTabData.title}</h3>
                  <p className="mt-4 text-[15px] sm:text-[16px] font-[500] leading-6 text-white/90">
                    {activeTabData.description}
                  </p>
                  <Button
                    text="Nehmen Sie Kontakt auf"
                    className="mt-6 rounded-full bg-white px-5 py-3 text-xs sm:text-sm font-semibold text-[#2C2420] shadow-sm transition-shadow hover:shadow"
                  />
                </div>

                {/* Right */}
                <div className="w-full md:w-[60%] min-h-[300px] sm:h-[400px] md:h-[100%] flex justify-center overflow-hidden lg:justify-end items-end mt-4 md:mt-0">
                  <img
                    src={activeTabData.image || "/placeholder.svg"}
                    className="h-[90%] object-cover md:object-contain transition-opacity duration-500"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Text */}
      <div className="w-full mt-12 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    <div className="flex flex-col justify-center items-start gap-4 sm:gap-6 md:gap-8">
      
      {/* Subtitle */}
      <p className="text-[var(--text-color)] font-medium text-base sm:text-lg md:text-xl">
        {subTitle}
      </p>

      {/* Animated Heading */}
      <AnimatedText
        text={text1}
        className="text-xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[40px] sm:leading-snug"
      />

      {/* Supporting Paragraphs */}
      <div className="flex flex-col gap-2 sm:gap-3 md:gap-4">
        <p className="text-[var(--text-color)] text-2xl sm:text-3xl md:text-4xl font-normal">
          {text2}
        </p>
        <p className="text-[var(--text-color)] text-2xl sm:text-3xl md:text-4xl font-normal leading-relaxed">
          {text3}
        </p>
      </div>

    </div>
  </div>
</div>

    </>
  )
}

export default Creat_Effic_Effici
