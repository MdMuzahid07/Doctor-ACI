import AppointmentBtn from "../../btns/appointment-btn";
import ServiceSlider from "./service-slider";

const Services = () => {
    return (
        <section className="max-w-screen-lg mx-auto px-5 md:px-0 pb-20 relative py-28 md:py-36">
            <div className="grid md:grid-cols-7 gap-10">
                <div className="md:col-span-3 py-10 relative">
                    {/* icon */}
                    <div className="absolute top-10 right-10 animated-logo">
                        <img src="../../../../public/assets/icons/icons-2.png" alt="" />
                    </div>
                    {/* icon */}

                    <h2 className="text-xl mb-7 font-bold text-orange-500">Services</h2>
                    <h1 className="text-5xl font-bold text-indigo-900 mb-5">
                        I Cover A Big Variety Of Medical Hospitals
                    </h1>
                    <p className="mb-10">We provide the special tips and advice’s of heath care treatment and high level of best.</p>

                    <AppointmentBtn />


                    {/* icon */}
                    <div className="absolute bottom-10 -left-44 animated-logo">
                        <img src="../../../../public/assets/icons/icons-15.png" alt="" />
                    </div>
                    {/* icon */}
                </div>
                <div className="md:col-span-4 bg-indigo-500 rounded-l-3xl py-10 pl-10 relative">

                    {/* icon */}
                    <div className="absolute top-10 -right-44 animated-logo">
                        <img src="../../../../public/assets/icons/icons-17.png" alt="" />
                    </div>
                    {/* icon */}

                    <ServiceSlider />


                    {/* icon */}
                    <div className="absolute -bottom-20 -right-44 animated-logo">
                        <img src="../../../../public/assets/icons/icons-14.png" alt="" />
                    </div>
                    {/* icon */}
                </div>
            </div>
        </section>
    )
}

export default Services;