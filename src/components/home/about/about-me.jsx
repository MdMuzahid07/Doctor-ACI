
const AboutMe = () => {
    return (
        <section>
            <div className="max-w-screen-lg mx-auto py-24 md:py-44 px-5 md:px-0">
                <div className="grid md:grid-cols-2 gap-10">
                    <div className="grid grid-cols-2 gap-10 relative">

                        {/* icon */}
                        <div className="absolute -top-10 -left-44 animated-logo">
                            <img src="../../../../public/assets/icons/icons-2.png" alt="" />
                        </div>
                        {/* icon */}

                        <img className="w-44 border-2 rounded-r-3xl rounded-bl-3xl border-indigo-500" src="../../../../public/assets/images/about-me-img-1.png" alt="" />
                        <img className="w-full border-2 rounded-l-3xl rounded-br-3xl border-indigo-500" src="../../../../public/assets/images/about-me-img-2.png" alt="" />
                        <img className="w-full border-2 rounded-r-3xl rounded-bl-3xl border-indigo-500" src="../../../../public/assets/images/about-me-img-3.png" alt="" />
                        <img className="w-48 border-2 rounded-l-3xl rounded-br-3xl border-indigo-500" src="../../../../public/assets/images/about-me-img-4.png" alt="" />

                        {/* icon */}
                        <div className="absolute -bottom-10 -left-20 animated-logo">
                            <img src="../../../../public/assets/icons/icon-1.png" alt="" />
                        </div>
                        {/* icon */}
                    </div>
                    <div className="relative">
                        <h2 className="text-2xl font-bold text-orange-500">About Me</h2>
                        <h1 className="text-3xl font-bold text-indigo-900 mt-10">
                            Dr. Emily Collins: Fostering Wellness Through Expert Care

                        </h1>
                        <p className="mt-7 text-sm">
                            I am Dr. Emily Collins, a dedicated medical professional with over two decades of experience in various specialties. Holding a medical degree from a prestigious institution, my career has been marked by a commitment to patient well-being.

                            My approach to healthcare revolves around empathy and evidence-based practices. I believe in the power of collaboration and work closely with fellow healthcare providers to create tailored treatment plans. Community engagement is crucial to me, as I actively participate in outreach programs and health education initiatives.

                            Beyond being a doctor, I am a partner in health, supporting patients on their journeys to wellness. With a focus on holistic care and innovative treatments, I strive to make a positive impact by empowering individuals to lead healthier lives.
                        </p>

                        {/* icon */}
                        <div className="absolute -bottom-16 -right-44 animated-logo">
                            <img src="../../../../public/assets/icons/icons-6.png" alt="" />
                        </div>
                        {/* icon */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe