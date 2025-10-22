"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"

function ProcessRow({ title, description, videoUrl, onHover }) {
  return (
    <div
      className="group relative flex flex-col md:flex-row justify-between items-center border-y border-[#BCAE9F] h-[50px] hover:h-[130px] transition-all duration-500 ease-in-out overflow-hidden"
      onMouseEnter={() => onHover(videoUrl)}
    >
      <div className="w-full md:w-4/12 transition-all duration-500 ease-in-out">
        <h1 className="text-lg md:text-xl font-semibold opacity-50 text-[var(--text-color)] group-hover:text-2xl group-hover:opacity-100 transition-all duration-500 ease-in-out">
          {title}
        </h1>
      </div>

      <div className="w-full md:w-6/12 md:text-right opacity-50 text-[var(--text-color)] font-[500] text-sm md:text-base transition-all duration-500 ease-in-out group-hover:opacity-100">
        {description}
      </div>
    </div>
  )
}

function BlogCard({ imgSrc, title, className }) {
  return (
    <div
      className={`bg-[#FFEEEE] rounded-2xl ${className} overflow-hidden flex flex-col border border-neutral-200 shadow-md h-full`}
    >
      <img src={imgSrc || "/placeholder.svg"} alt={title} className="h-48 w-full object-cover" />
      <div className="p-5 flex flex-col justify-center items-center h-full">
        <h3 className="mt-2 text-lg font-semibold text-[var(--text-color)] text-center text-pretty">{title}</h3>
      </div>
    </div>
  )
}

const BlogSec = () => {
  const [activeVideo, setActiveVideo] = useState("/assets/videos/first_video.mp4")
  const [videoOpacity, setVideoOpacity] = useState(0)

  const processSectionRef = useRef(null)
  const blogSectionRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!processSectionRef.current || !blogSectionRef.current) return

      const processRect = processSectionRef.current.getBoundingClientRect()
      const blogRect = blogSectionRef.current.getBoundingClientRect()

      const processVisible = processRect.top < window.innerHeight && processRect.bottom > 0
      const blogComing = blogRect.top < window.innerHeight * 0.8

      if (processVisible && !blogComing) {
        setVideoOpacity(1)
      } else if (blogComing) {
        const distance = blogRect.top - window.innerHeight * 0.8
        const opacity = Math.max(0, Math.min(1, distance / 200))
        setVideoOpacity(opacity)
      } else {
        setVideoOpacity(0)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.3, duration: 0.8 },
    },
  }

  const childVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section className="w-full mt-[100px]" ref={processSectionRef}>
      {/* Fixed Center Video */}
      <div
        className="fixed z-20 inset-0 flex justify-center items-center pointer-events-none"
        style={{
          opacity: videoOpacity,
          transition: "opacity 0.8s ease-in-out",
        }}
      >
        {activeVideo && (
          <motion.div
            className="h-[250px] w-[250px] bg-white flex justify-center items-center rounded-2xl shadow-2xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <video
              key={activeVideo}
              src={activeVideo}
              className="h-[90%] w-[90%] object-contain rounded-2xl"
              autoPlay
              muted
              loop
            />
          </motion.div>
        )}
      </div>

      {/* Process Rows */}
      <div className="mx-auto container py-10 relative z-10">
        <div className="rounded-lg w-[95%] mx-auto">
          <div className="border-y border-[#BCAE9F]">
            <ProcessRow
              title="Zuhören — Verstehen."
              videoUrl="/assets/images/home/first_video.mp4"
              description="Wir treffen uns, fragen nach Zielen und entdecken den Auftrag."
              onHover={setActiveVideo}
            />
            <ProcessRow
              title="Konzept — Bauen."
              videoUrl="/assets/images/home/second_video.mp4"
              description="Konzept, Prototypen, gesteuerte Iterationen."
              onHover={setActiveVideo}
            />
            <ProcessRow
              title="Launch — Messen."
              videoUrl="/assets/images/home/third_video.mp4"
              description="Soft Launches, Analytics, schnelle Iteration."
              onHover={setActiveVideo}
            />
            <ProcessRow
              title="Wachsen — Optimieren."
              videoUrl="/assets/images/home/fourth_video.mp4"
              description="Kontinuierliche Verbesserung auf Basis von Daten."
              onHover={setActiveVideo}
            />
          </div>
        </div>
      </div>

      {/* Blog Section */}
      <motion.div
        ref={blogSectionRef}
        className="bg-[var(--text-color)] pb-16 pt-6 rounded-4xl mt-[100px]"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="mx-auto container px-4 md:px-6">
          <motion.p
            className="text-center text-xs uppercase tracking-wide mt-5 text-[#FFEEEE] font-[600]"
            variants={childVariants}
          >
            Mehr lesen
          </motion.p>
          <motion.h1
            className="text-center text-4xl md:text-5xl lg:text-7xl mt-5 font-extrabold tracking-tight text-[#FFEEEE]"
            variants={childVariants}
          >
            BLOG
          </motion.h1>

          <motion.div
            className="mt-8 rounded-3xl bg-neutral-900 text-white px-5 py-8 md:px-10 md:py-12 shadow-lg"
            variants={childVariants}
          >
            <motion.div className="flex flex-col md:flex-row gap-4 min-h-[400px]" variants={childVariants}>
              <BlogCard
                imgSrc="/assets/images/home/card1.jpg"
                title="Warum langsames Design mehr überzeugt"
                className="lg:-rotate-[3deg]"
              />
              <BlogCard imgSrc="/assets/images/home/card2.jpg" title="Micro-Video: Bauplan für echtes Engagement" />
              <BlogCard
                imgSrc="/assets/images/home/card3.jpg"
                title="SEO für kleine Macher: einfache Schritte."
                className="lg:rotate-[3deg]"
              />
            </motion.div>

            <motion.div className="mt-8 flex justify-center" variants={childVariants}>
              <button
                className="rounded-full bg-[#F26454] w-full lg:w-[20%] py-2 text-[16px] font-medium text-white hover:bg-rose-600 focus:outline-none"
                type="button"
              >
                Mehr lesen
              </button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default BlogSec
