import { FiStar } from "react-icons/fi"
import Button from "../../../components/Button"

const Creat_Effic_Effici = ({ processSteps }) => {
    const { subTitle, text1, text2, text3 } = processSteps;
    return (
        <>
            <section className="w-full bg-[#FFECEE] py-12 md:py-16">
                <div className="mx-auto container">
                    <div className="w-[95%] mx-auto">
                        {/* Eyebrow */}
                        <p className="text-center text-xs md:text-[16px] opacity-60 font-[500] text-[var(--text-color)]">{"{ Kreativität. Effizienz. Skalierbarkeit }"}</p>

                        {/* Heading */}
                        <h1 className="mt-3 text-center text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight uppercase text-[#2C2420] leading-tight">
                            AUSGEWÄHLTE PROJEKTE
                            <br className="hidden md:block" />
                            ECHTE KUNDEN, ECHTE
                            <br className="hidden md:block" />
                            ERGEBNISSE.
                        </h1>

                        {/* Category Pills */}
                        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                            {/* Active: Kunst & Kultur */}
                            <div className="w-full sm:w-[48%] md:w-[33%] bg-[#F0E4D6] h-[70px]">
                                <button
                                    type="button"
                                    className="flex h-full w-full sm:w-[70%] bg-[#BCAE9F] uppercase justify-center items-center gap-3 sm:gap-5 rounded-2xl px-3 sm:px-4 py-2 text-[14px] sm:text-[16px] font-[700] text-[var(--text-color)] shadow-sm"
                                >
                                    <img src="/assets/images/home/brush.png" className="h-8 w-8 sm:h-10 sm:w-10 object-contain" alt="" />
                                    Kunst & Kultur
                                </button>
                            </div>

                            {/* Handwerk */}
                            <div className="w-full sm:w-[48%] md:w-[25%] h-[70px]">
                                <button
                                    type="button"
                                    className="flex h-full w-full bg-[#F0E4D6] uppercase justify-center items-center gap-3 sm:gap-5 rounded-2xl px-3 sm:px-4 py-2 text-[14px] sm:text-[16px] font-[700] text-[var(--text-color)] shadow-sm"
                                >
                                    <img src="/assets/images/home/handwerk.png" className="h-8 w-8 sm:h-10 sm:w-10 object-contain" alt="" />
                                    Handwerk
                                </button>
                            </div>

                            {/* Gastronomie */}
                            <div className="w-full sm:w-[48%] md:w-[25%] h-[70px]">
                                <button
                                    type="button"
                                    className="flex h-full w-full bg-[#F0E4D6] uppercase justify-center items-center gap-3 sm:gap-5 rounded-2xl px-3 sm:px-4 py-2 text-[14px] sm:text-[16px] font-[700] text-[var(--text-color)] shadow-sm"
                                >
                                    <img src="/assets/images/home/Gastronomie.png" className="h-8 w-8 sm:h-10 sm:w-10 object-contain" alt="" />
                                    Gastronomie
                                </button>
                            </div>
                        </div>

                        {/* Case Card - Using Flex instead of Grid */}
                        <div className="mt-6 overflow-hidden rounded-3xl border border-[#D7CFCA] bg-[#BCAE9F]">
                            <div className="flex flex-col md:flex-row justify-between h-auto md:h-[600px]">
                                {/* Left Text Panel - 1/3 width on desktop */}
                                <div className="w-full md:w-[40%] p-4 sm:p-5 text-white flex flex-col justify-center items-start">
                                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold">Case: Kunst &amp; Kultur</h3>
                                    <p className="mt-4 text-[14px] sm:text-[16px] font-[500] leading-6 text-white/90">
                                        Ein Atelier wollte sichtbar werden, ohne seine Seele zu verlieren. Wir gaben ein Signatur-Logo und eine
                                        Website, die Bilder atmen lässt.
                                    </p>
                                    <Button text="Nehmen Sie Kontakt auf" className="mt-6 rounded-full bg-white px-4 sm:px-5 py-2 sm:py-3 text-xs sm:text-sm font-semibold text-[#2C2420] shadow-sm transition-shadow hover:shadow" />
                                </div>

                                {/* Right Image Panel */}
                                <div className="w-full md:w-[60%] min-h-[300px] sm:h-[400px] md:h-[100%] flex justify-center rounded-4xl overflow-hidden lg:justify-end items-end mt-4 md:mt-0">
                                    <img src="/assets/images/home/kunst-img.png" className="h-[90%] w-full object-cover md:object-fill" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className=" w-full mt-[50px]">
                <div className="container mx-auto">
                    <div className="w-[95%] mx-auto lg:mx-5 lg:w-[50%] flex flex-col justify-center items-start gap-5">
                        <p className="text-[var(--text-color)] font-[500]">{subTitle}</p>
                        <h2 className="text-2xl font-[700] leading-9">{text1}</h2>
                        <div>
                            <p className="text-[var(--text-color)] font-[400]">{text2}</p>
                            <p className="text-[var(--text-color)] font-[400]">{text3}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Creat_Effic_Effici