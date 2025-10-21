const SecondBanner = () => {
    return (
      <div className="bg-pink-100 p-8 md:p-12 lg:p-16">
        <div className="bg-gray-900 rounded-3xl h-[600px] flex justify-center items-center p-8 md:p-12 lg:p-16 max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12">
            {/* Left Section - Profile */}
            <div className="flex flex-col items-center md:items-start flex-shrink-0">
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-gray-700 mb-3">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Ef8Db6R1hltH4TjoGpgpg1DMd4jE7v.png"
                  alt="Haider Khan"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-white font-semibold text-sm">Haider Khan</h3>
              <p className="text-gray-400 text-xs text-center md:text-left">Geschäftsführer und Gründer</p>
            </div>
  
            {/* Right Section - Quote */}
            <div className="flex-1">
              <div className="flex items-start gap-3 mb-4">
                <div className="text-purple-400 text-4xl font-bold flex-shrink-0">❝</div>
              </div>
  
              <p className="text-white text-lg md:text-2xl font-bold leading-tight mb-4">
                WIR SIND EINE ENGAGIERTE KLEINE AGENTUR, HANDELN SCHNELL, DENKEN TIEF UND LIEFERN ARBEIT, DER KUNDEN
                VOLLSTÄNDIG{" "}
                <span className="inline-flex items-center gap-2">
                  <span className="w-3 h-3 bg-yellow-400 rounded-full inline-block"></span>
                  VERTRAUEN
                </span>{" "}
                UND DIE SIE SCHÄTZEN.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default SecondBanner
  