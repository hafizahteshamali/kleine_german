"use client"

const Footer = () => {
  return (
    <footer
      role="contentinfo"
      aria-label="Website footer"
      className="mt-16 bg-[#BCAE9F]"
    >
      {/* Top contact panel */}
      <section className="relative overflow-hidden rounded-t-3xl pt-[50px]">
        <div className="mx-auto w-[100%] flex flex-col lg:flex-row justify-between items-end">
          {/* Left: Copy + Form */}
          <div className="w-full lg:w-[60%] bg-[#F0E4D6] lg:rounded-tr-4xl py-10 px-8">
            <div className="w-[90%] lg:w-[70%] mx-auto">
              <h2 className="text-balance text-3xl font-[700] leading-tight text-[var(--color-primary)] md:text-4xl">
                {"Erzähl uns deine Story in zwei Sätzen."}
              </h2>

              <p className="mt-4 text-pretty text-sm leading-6 text-[var(--text-color)] opacity-60 font-[500] md:text-base">
                {"Schreib uns, was du machst und wohin du willst. "}
                {"Wir sagen dir den nächsten Schritt — direkt und ehrlich."}
              </p>

              <form onSubmit={(e) => e.preventDefault()} className="mt-6 space-y-4" aria-label="Kontaktformular">
                <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                  <label className="block">
                    <span className="sr-only">Name</span>
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full rounded-full border-0 bg-muted px-4 py-2 text-sm text-white placeholder:text-[#FFEEEE] outline-none bg-[#BCAE9F]"
                    />
                  </label>
                  <label className="block">
                    <span className="sr-only">E-Mail</span>
                    <input
                      type="email"
                      placeholder="E‑Mail"
                      className="w-full rounded-full border-0 bg-muted px-4 py-2 text-sm text-white placeholder:text-[#FFEEEE] outline-none bg-[#BCAE9F]"
                    />
                  </label>
                </div>

                <label className="block">
                  <span className="sr-only">Firma (optional)</span>
                  <input
                    type="text"
                    placeholder="Firma (optional)"
                    className="w-full rounded-full border-0 bg-muted px-4 py-2 text-sm text-white placeholder:text-[#FFEEEE] outline-none bg-[#BCAE9F]"
                  />
                </label>

                <label className="block">
                  <span className="sr-only">Nachricht</span>
                  <textarea
                    rows={4}
                    placeholder="Nachricht"
                    className="w-full resize-none rounded-xl border-0 bg-muted px-4 py-3 text-sm text-white placeholder:text-[#FFEEEE] outline-none bg-[#BCAE9F]"
                  />
                </label>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full bg-[#F26454] min-w-[25%] py-2 text-sm font-medium text-white transition-colors hover:bg-[#f26454d5] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--color-ring)]"
                >
                  Submit
                </button>

                <div className="space-y-1 pt-1">
                  <p className="text-xl font-[500] text-[var(--text-color)] opacity-60">
                    {"Wir antworten innerhalb von 2 Werktagen."}
                  </p>
                  <p className="text-xl font-[500] text-[var(--text-color)] opacity-60">
                    {"Oder sende Dateien an: itx.solution22@gmail.com"}
                  </p>
                </div>
              </form>
            </div>
          </div>

          {/* Right: Illustration */}
          <div className="w-full lg:w-[40%] h-[500px] lg:h-full -order-1 lg:order-1">
            <img
              src="/assets/images/home/footer-img.png"
              alt="Handgezeichnete Illustration einer Person mit geometrischen Formen."
              className="h-[100%] w-[100%] lg:object-contain scale-x-[-1]"
            />
          </div>

        </div>
      </section>

      {/* Bottom gradient section */}
      <section className="border-l-20 border-[#F0E4D6] w-[98%] bg-[#F0E4D6] rounded-tr-2xl">
  <div className="h-full w-full rounded-t-2xl bg-[#F26454] px-4 text-white md:px-8 py-5 lg:py-0">
    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-3">
      
      {/* ---------- Column 1 ---------- */}
      <div className="border-2 border-[var(--footer-glass-border)] bg-[var(--footer-glass)] rounded-2xl p-5 backdrop-blur 
                      lg:rounded-none lg:border-r-2 lg:border-t-0 lg:border-b-0 lg:border-l-0">
        <h3 className="text-lg font-medium">Index</h3>
        <ul className="mt-3 space-y-2 text-sm/6 text-white/90">
          <li><a href="#" className="hover:underline">Startseite</a></li>
          <li><a href="#" className="hover:underline">Unsere Arbeit</a></li>
          <li><a href="#" className="hover:underline">Über uns</a></li>
          <li><a href="#" className="hover:underline">Kontakt</a></li>
        </ul>
      </div>

      {/* ---------- Column 2 ---------- */}
      <div className="border-2 border-[var(--footer-glass-border)] bg-[var(--footer-glass)] rounded-2xl p-5 backdrop-blur 
                      lg:rounded-none lg:border-r-2 lg:border-t-0 lg:border-b-0 lg:border-l-0">
        <h3 className="text-lg font-medium">Legal</h3>
        <ul className="mt-3 space-y-2 text-sm/6 text-white/90">
          <li><a href="#" className="hover:underline">Impressum</a></li>
          <li><a href="#" className="hover:underline">Datenschutz</a></li>
          <li><a href="#" className="hover:underline">AGB</a></li>
        </ul>
      </div>

      {/* ---------- Column 3 ---------- */}
      <div className="border-2 border-[var(--footer-glass-border)] bg-[var(--footer-glass)] rounded-2xl p-5 backdrop-blur 
                      lg:border-0 lg:rounded-none flex flex-col justify-between">
        <h3 className="text-lg font-medium">Urheberrechte</h3>
        <div className="mt-3 flex-1 text-sm/6 text-white/90">
          <p className="opacity-80">
            Inhalte können urheberrechtlich geschützt sein.
          </p>
        </div>
        <p className="mt-4 text-left text-[16px] text-white/70">
          © 2025 IncSolution Entwickelt mit Klarheit.
        </p>
      </div>

    </div>
  </div>
</section>

    </footer>
  )
}

export default Footer
