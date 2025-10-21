import { useState } from "react";
import { motion } from "framer-motion";

function ProcessRow({ title, description, imgUrl, onHover }) {
  return (
    <div
      className="
        group relative flex flex-col md:flex-row justify-between items-center 
        border-y border-[#BCAE9F] h-[50px] 
        hover:h-[130px] transition-all duration-500 ease-in-out overflow-hidden
      "
      onMouseEnter={() => onHover(imgUrl)}
      onMouseLeave={() => onHover(null)}
    >
      {/* Title */}
      <div className="w-full md:w-4/12 transition-all duration-500 ease-in-out">
        <h1
          className="
            text-lg md:text-xl font-semibold opacity-50 
            text-[var(--text-color)] group-hover:text-2xl 
            group-hover:opacity-100 transition-all duration-500 ease-in-out
          "
        >
          {title}
        </h1>
      </div>

      {/* Description */}
      <div
        className="
          w-full md:w-6/12 md:text-right opacity-50 
          text-[var(--text-color)] font-[500] text-sm md:text-base
          transition-all duration-500 ease-in-out
          group-hover:opacity-100
        "
      >
        {description}
      </div>
    </div>
  );
}

function BlogCard({ imgSrc, title, className }) {
  return (
    <div
      className={`bg-[#FFEEEE] rounded-2xl ${className} overflow-hidden flex flex-col border border-neutral-200 shadow-md h-full`}
    >
      <img
        src={imgSrc || "/placeholder.svg"}
        alt={title}
        className="h-48 w-full object-cover"
      />
      <div className="p-5 flex flex-col justify-center items-center h-full">
        <h3 className="mt-2 text-lg font-semibold text-[var(--text-color)] text-center text-pretty">
          {title}
        </h3>
      </div>
    </div>
  );
}

const BlogSec = () => {
  const [activeImage, setActiveImage] = useState(null);

  // Framer Motion Variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.3, duration: 0.8 },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="w-full mt-[100px]">
      {/* Top Process Section */}
      <div className="relative overflow-hidden">
        {/* Fixed Center Image */}
        <div className="absolute z-20 inset-0 flex justify-center items-center pointer-events-none">
          {activeImage && (
            <motion.div
              className="h-[110px] w-[110px] bg-white flex justify-center items-center rounded-xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={activeImage}
                alt="Active"
                className="h-[80px] w-[80px] object-contain rounded-xl"
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
                imgUrl="/assets/images/home/row-img.jpg"
                description="Wir treffen uns, fragen nach Zielen und entdecken den Auftrag."
                onHover={setActiveImage}
              />
              <ProcessRow
                title="Konzept — Bauen."
                imgUrl="/assets/images/home/row-img2.jpg"
                description="Konzept, Prototypen, gesteuerte Iterationen."
                onHover={setActiveImage}
              />
              <ProcessRow
                title="Launch — Messen."
                imgUrl="/assets/images/home/row-img3.jpg"
                description="Soft Launches, Analytics, schnelle Iteration."
                onHover={setActiveImage}
              />
              <ProcessRow
                title="Wachsen — Optimieren."
                imgUrl="/assets/images/home/row-img4.jpg"
                description="Kontinuierliche Verbesserung auf Basis von Daten."
                onHover={setActiveImage}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Blog Section with Scroll Animation */}
      <motion.div
        className="bg-[var(--text-color)] pb-16 pt-6 rounded-4xl mt-[100px]"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }} // animation repeat on scroll
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
            <motion.div
              className="flex flex-col md:flex-row gap-4 min-h-[400px]"
              variants={childVariants}
            >
              <BlogCard
                imgSrc="/assets/images/home/card1.jpg"
                title="Warum langsames Design mehr überzeugt"
                className="lg:-rotate-[3deg]"
              />
              <BlogCard
                imgSrc="/assets/images/home/card2.jpg"
                title="Micro-Video: Bauplan für echtes Engagement"
              />
              <BlogCard
                imgSrc="/assets/images/home/card3.jpg"
                title="SEO für kleine Macher: einfache Schritte."
                className="lg:rotate-[3deg]"
              />
            </motion.div>

            <motion.div
              className="mt-8 flex justify-center"
              variants={childVariants}
            >
              <button
                className="rounded-full bg-[#F26454] w-full lg:w-[20%] py-2 text-[16px] font-medium text-white hover:bg-rose-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-rose-500"
                type="button"
                aria-label="Mehr lesen"
              >
                Mehr lesen
              </button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default BlogSec;
