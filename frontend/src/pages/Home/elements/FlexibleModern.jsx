import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const FlexibleModern = ({ flexibleModern, flexModernData }) => {
    const { head1, head2, head3 } = flexibleModern
    const { h_1, h_2, h_3, description, bullets, imgUrl } = flexModernData;

    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: "ease-out-cubic",
            once: false,
            offset: 50,
            mirror: true,
        });
    }, []);

    // Refresh AOS on component update
    useEffect(() => {
        AOS.refresh();
    });

    return (
        <>
            {/* card banner section */}
            <div 
                className="bg-[var(--text-color)] rounded-4xl mt-[100px] p-5"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-once="false"
                data-aos-duration="800"
            >
                <div className="container mx-auto h-auto">
                    {/* heading section */}
                    <div className="w-full mt-[100px] flex flex-col justify-center gap-2 items-center">
                        <p 
                            className="text-center text-[#FFEEEE] font-[600]"
                            data-aos="fade-up"
                            data-aos-delay="200"
                            data-aos-once="false"
                        >
                            Dienstleistungen
                        </p>
                        <div 
                            className="flex justify-center items-end lg:rotate-[1deg] lg:origin-right"
                            data-aos="fade-up"
                            data-aos-delay="300"
                            data-aos-once="false"
                        >
                            <img
                                src="/assets/images/home/flexible-head1-l-img.png"
                                className="h-[100px] w-[100px] object-contain hidden lg:block"
                                alt=""
                                data-aos="zoom-in"
                                data-aos-delay="350"
                                data-aos-once="false"
                            />
                            <h1 
                                className="text-2xl text-center sm:text-5xl md:text-7xl lg:text-7xl text-[#FFEEEE] uppercase"
                                data-aos="fade-up"
                                data-aos-delay="400"
                                data-aos-once="false"
                            >
                                {head1}
                            </h1>
                        </div>

                        <div 
                            className="flex justify-center items-center lg:rotate-[.5deg] lg:origin-right"
                            data-aos="fade-up"
                            data-aos-delay="500"
                            data-aos-once="false"
                        >
                            <h1 
                                className="text-2xl text-center sm:text-5xl md:text-7xl lg:text-7xl  text-[#FFEEEE] uppercase"
                                data-aos="fade-up"
                                data-aos-delay="550"
                                data-aos-once="false"
                            >
                                {head2}
                            </h1>
                        </div>
                        <div 
                            className="flex justify-center items-center lg:rotate-[1deg] lg:origin-right"
                            data-aos="fade-up"
                            data-aos-delay="600"
                            data-aos-once="false"
                        >
                            <img
                                src="/assets/images/home/ellips.png"
                                className="h-[60px] w-[60px] object-contain hidden lg:block"
                                alt=""
                                data-aos="zoom-in"
                                data-aos-delay="650"
                                data-aos-once="false"
                            />
                            <h1 
                                className="text-2xl text-center sm:text-5xl md:text-7xl lg:text-7xl  text-[#FFEEEE] uppercase"
                                data-aos="fade-up"
                                data-aos-delay="700"
                                data-aos-once="false"
                            >
                                {head3}
                            </h1>
                            <img
                                src="/assets/images/home/red-start.png"
                                className="h-[100px] w-[100px] object-contain hidden lg:block"
                                alt=""
                                data-aos="zoom-in"
                                data-aos-delay="750"
                                data-aos-once="false"
                            />
                        </div>
                    </div>
                    {/* heading section */}

                    {/* cards section */}
                    <section className="mt-10 md:my-14">
                        <div className="mx-auto flex flex-wrap md:flex-row items-stretch justify-center gap-6 md:gap-8 lg:gap-4">
                            {/* Card 01 */}
                            <article 
                                className="w-full md:w-[260px] lg:w-[290px] min-h-[350px] shrink-0"
                                data-aos="fade-up"
                                data-aos-delay="800"
                                data-aos-once="false"
                            >
                                <div
                                    className="rounded-[28px] h-full shadow-lg p-6 md:p-7 lg:rotate-[-3deg] md:translate-y-1"
                                    style={{ backgroundColor: "#FFECEE" }}
                                >
                                    <div className="text-center flex flex-col justify-around h-full items-center">
                                        <p className="text-[16px] tracking-widest font-semibold uppercase mb-2">01</p>
                                        <h3 className="text-xl md:text-2xl font-extrabold uppercase leading-tight">Markenidentität</h3>
                                        <img 
                                            src="/assets/images/home/bulb.png" 
                                            alt="Icon" 
                                            className="mx-auto my-3 h-15 w-15" 
                                            data-aos="zoom-in"
                                            data-aos-delay="850"
                                            data-aos-once="false"
                                        />
                                        <p className="font-[500] leading-relaxed">
                                            Wir helfen Marken dabei, ihre Stimme und visuelle Elemente zu finden, die wirklich Bestand haben.
                                        </p>
                                    </div>
                                </div>
                            </article>

                            {/* Card 02 */}
                            <article 
                                className="w-full md:w-[260px] lg:w-[290px] min-h-[350px] shrink-0"
                                data-aos="fade-up"
                                data-aos-delay="900"
                                data-aos-once="false"
                            >
                                <div
                                    className="rounded-[28px] h-full shadow-lg p-6 md:p-7 lg:rotate-[2deg] md:-translate-y-1"
                                    style={{ backgroundColor: "#EDE4D6" }}
                                >
                                    <div className="text-center flex flex-col justify-around h-full">
                                        <p className="text-[16px] tracking-widest font-semibold uppercase mb-2">02</p>
                                        <h3 className="text-xl md:text-2xl font-extrabold uppercase leading-tight">Web-Erlebnis</h3>
                                        <img 
                                            src="/assets/images/home/Web-Erlebnis.png" 
                                            alt="Icon" 
                                            className="mx-auto my-3 h-15 w-15" 
                                            data-aos="zoom-in"
                                            data-aos-delay="950"
                                            data-aos-once="false"
                                        />
                                        <p className="font-[500] leading-relaxed">
                                            Schnelle und ansprechende Websites erstellen, die Menschen zum Handeln bewegen.
                                        </p>
                                    </div>
                                </div>
                            </article>

                            {/* Card 03 */}
                            <article 
                                className="w-full md:w-[260px] lg:w-[290px] min-h-[350px] shrink-0"
                                data-aos="fade-up"
                                data-aos-delay="1000"
                                data-aos-once="false"
                            >
                                <div
                                    className="rounded-[28px] h-full shadow-lg p-6 md:p-7 lg:rotate-[-1.5deg] md:translate-y-2"
                                    style={{ backgroundColor: "#FFE8F0" }}
                                >
                                    <div className="text-center flex flex-col justify-around h-full">
                                        <p className="text-[16px] tracking-widest font-semibold uppercase mb-2">03</p>
                                        <h3 className="text-xl md:text-2xl font-extrabold uppercase leading-tight">Inhalt &amp; Bewegung</h3>
                                        <img 
                                            src="/assets/images/home/diamond.png" 
                                            alt="Icon" 
                                            className="mx-auto my-3 h-15 w-15" 
                                            data-aos="zoom-in"
                                            data-aos-delay="1050"
                                            data-aos-once="false"
                                        />
                                        <p className="font-[500] leading-relaxed">
                                            Geschichten schaffen, die verbinden, inspirieren und in Erinnerung bleiben.
                                        </p>
                                    </div>
                                </div>
                            </article>

                            {/* Card 04 */}
                            <article 
                                className="w-full md:w-[260px] lg:w-[290px] min-h-[350px] shrink-0"
                                data-aos="fade-up"
                                data-aos-delay="1100"
                                data-aos-once="false"
                            >
                                <div
                                    className="rounded-[28px] h-full shadow-lg p-6 md:p-7 lg:rotate-[3deg] md:-translate-y-2"
                                    style={{ backgroundColor: "#E9E0CF" }}
                                >
                                    <div className="text-center flex flex-col justify-around h-full">
                                        <p className="text-[16px] tracking-widest font-semibold uppercase mb-2">04</p>
                                        <h3 className="text-xl md:text-2xl font-extrabold uppercase leading-tight">
                                            Wachstum &amp; Anzeigen
                                        </h3>
                                        <img 
                                            src="/assets/images/home/flower.png" 
                                            alt="Icon" 
                                            className="mx-auto my-3 h-15 w-15" 
                                            data-aos="zoom-in"
                                            data-aos-delay="1150"
                                            data-aos-once="false"
                                        />
                                        <p className="font-[500] leading-relaxed">
                                            Steigern Sie Sichtbarkeit und Rendite durch intelligente, datengesteuerte Kampagnen.
                                        </p>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </section>
                    {/* cards section */}
                </div>
            </div>
            {/* card banner section */}

            {/* Night Gros */}
            <section 
                className="bg-[#F9E9EA] rounded-3xl mt-16 md:mt-24"
                data-aos="fade-up"
                data-aos-delay="1200"
                data-aos-once="false"
            >
                <div className="container mx-auto px-6 py-12 md:py-16">
                    <div className="flex flex-col md:flex-row items-center gap-10 md:gap-12">
                        {/* Left: Headline + Copy */}
                        <div className="w-full md:w-1/2">
                            <h1 
                                className="text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase leading-tight text-[var(--text-color)]"
                                data-aos="fade-up"
                                data-aos-delay="1300"
                                data-aos-once="false"
                            >
                                {h_1}
                            </h1>
                            <h1 
                                className="text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase leading-tight text-[var(--text-color)]"
                                data-aos="fade-up"
                                data-aos-delay="1400"
                                data-aos-once="false"
                            >
                                {h_2}
                            </h1>
                            <h1 
                                className="text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase leading-tight text-[var(--text-color)]"
                                data-aos="fade-up"
                                data-aos-delay="1500"
                                data-aos-once="false"
                            >
                                {h_3}
                            </h1>

                            <p 
                                className="mt-6 text-[15px] md:text-base font-[500] leading-relaxed text-[var(--text-color)]"
                                data-aos="fade-up"
                                data-aos-delay="1600"
                                data-aos-once="false"
                            >
                                {description}
                            </p>

                            <ul className="mt-6 space-y-3 text-[15px] font-[600] md:text-base text-[var(--text-color)]">
                                {bullets.map((item, index) => {
                                    return (
                                        <li 
                                            key={index} 
                                            className="flex gap-3"
                                            data-aos="fade-up"
                                            data-aos-delay={1700 + (index * 100)}
                                            data-aos-once="false"
                                        >
                                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--text-color)]"></span>
                                            <span>
                                                {item}
                                            </span>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>

                        {/* Right: Image + doodle */}
                        <div 
                            className="w-full h-[550px] md:w-[40%] relative rounded-3xl overflow-hidden"
                            data-aos="fade-up"
                            data-aos-delay="1800"
                            data-aos-once="false"
                        >
                            <img src={imgUrl} className="h-[100%] w-[100%] object-[100%]" alt="" />
                        </div>
                    </div>
                </div>
            </section>
            {/* Night Gros */}

            <div 
                className="lg:h-[500px] lg:mt-[100px]"
                data-aos="fade-up"
                data-aos-delay="1900"
                data-aos-once="false"
            >
                <img src="/assets/images/home/banner.jpg" className="h-[100%] w-[100%] lg:object-contain" alt="" />
            </div>
        </>
    )
}

export default FlexibleModern