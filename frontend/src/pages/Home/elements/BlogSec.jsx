function ProcessRow({ title, description, imgUrl }) {
    return (
      <div className="flex flex-col md:flex-row justify-between items-center py-5 border-y-1 border-[#BCAE9F] h-[100px] relative">
        <div className="w-full md:w-4/12">
          <h1 className="text-lg md:text-xl font-semibold opacity-50 text-[var(--text-color)]">{title}</h1>
        </div>
        <div className="bg-yellow-700">
        {imgUrl && (
            <div className="w-full h-[150px] hidden overflow-hidden rounded-xl md:w-2/12 my-4 md:my-0 md:flex md:justify-center absolute z-10 -top-[25px]">
            <img src={imgUrl} alt="" className="h-[100%] w-[100%] rounded-md object-contain" />
          </div>
        )}
        </div>
        <div className="w-full md:w-6/12 md:text-right opacity-50 text-[var(--text-color)] font-[500] text-sm md:text-base">{description}</div>
      </div>
    )
  }
  
  function BlogCard({ imgSrc, title, className }) {
    return (
      <div className={`bg-[#FFEEEE] rounded-2xl ${className} overflow-hidden flex flex-col border border-neutral-200 shadow-md h-full`}>
        <img src={imgSrc || "/placeholder.svg"} alt={title} className="h-48 w-full object-cover" />
        <div className="p-5 flex flex-col justify-center items-center h-full">
          <h3 className="mt-2 text-lg font-semibold text-[var(--text-color)] text-center text-pretty">{title}</h3>
        </div>
      </div>
    )
  }
  
  const BlogSec = () => {
    return (
      <section className="w-full mt-[100px]">
        {/* Top Process Section */}
        <div className="">
          <div className="mx-auto container py-10">
            <div className="rounded-lg w-[95%] mx-auto">
              <div className="border-y border-[#BCAE9F]">
                <ProcessRow
                  title="Zuhören — Verstehen."
                  imgUrl="/assets/images/home/row-img.jpg"
                  description="Wir treffen uns, fragen nach Zielen und entdecken den Auftrag."
                />
                <ProcessRow
                  title="Konzept — Bauen."
                  description="Konzept, Prototypen, gesteuerte Iterationen."
                />
                <ProcessRow
                  title="Launch — Messen."
                  description="Soft Launches, Analytics, schnelle Iteration."
                />
                <ProcessRow
                  title="Wachsen — Optimieren."
                  description="Kontinuierliche Verbesserung auf Basis von Daten."
                />
              </div>
            </div>
          </div>
        </div>
  
        {/* Blog Section */}
        <div className="bg-[var(--text-color)] pb-16 pt-6 rounded-4xl mt-[100px]">
          <div className="mx-auto container px-4 md:px-6">
            <p className="text-center text-xs uppercase tracking-wide mt-5 text-[#FFEEEE] font-[600]">Mehr lesen</p>
            <h1 className="text-center text-4xl md:text-5xl lg:text-7xl mt-5 font-extrabold tracking-tight text-[#FFEEEE]">BLOG</h1>
  
            <div className="mt-8 rounded-3xl bg-neutral-900 text-white px-5 py-8 md:px-10 md:py-12 shadow-lg">
              <div className="flex flex-col md:flex-row gap-4 min-h-[400px]">
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
              </div>
  
              <div className="mt-8 flex justify-center">
                <button
                  className="rounded-full bg-[#F26454] min-w-[20%] py-2 text-[16px] font-medium text-white hover:bg-rose-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-rose-500"
                  type="button"
                  aria-label="Mehr lesen"
                >
                  Mehr lesen
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default BlogSec