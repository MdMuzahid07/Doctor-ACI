import { MdKeyboardArrowRight } from 'react-icons/md';


const WorkingProcess = () => {
    return (
        <section className="max-w-screen-lg mx-auto px-5 md:px-0 pb-20 relative">
            <h2 className="text-xl text-center mb-7 font-bold text-orange-500">Working Process</h2>
            <h1 className="text-4xl text-center font-bold text-indigo-900 ">
                How i works
            </h1>


            {/* icon */}
            <div className="absolute top-10 left-10 animated-logo">
                <img src="../../../../public/assets/icons/icons-2.png" alt="" />
            </div>
            {/* icon */}

            {/* icon */}
            <div className="absolute bottom-10 -left-44 animated-logo">
                <img src="../../../../public/assets/icons/icons-7.png" alt="" />
            </div>
            {/* icon */}

            <div className="mt-24 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                <div className="max-w-44 bg-white w-full h-96 rounded-2xl p-8   shadow-custom">
                    <h1 className="text-6xl font-extrabold text-indigo-900">01</h1>
                    <p className="text-3xl mt-10 mb-3 text-orange-500">
                        Make Appointment
                    </p>
                    <p>It is a long established fact that a reader will be distracted by the readable content of.</p>

                    <button className="mt-10 p-2 text-indigo-500 rounded-lg bg-indigo-100 flex items-center gap-5"><span className="ml-3 text-lg">View More</span> <span className="bg-white p-1 rounded"><MdKeyboardArrowRight className="font-bold text-3xl" /></span></button>
                </div>

                <div className="max-w-44 bg-orange-600 w-full h-96 rounded-2xl p-8  md:-mt-10  shadow-custom">
                    <h1 className="text-6xl font-extrabold text-white">02</h1>
                    <p className="text-3xl mt-10 mb-3 text-white font-bold">
                        Take Treatment
                    </p>
                    <p className="text-white">It is a long established fact that a reader will be distracted by the readable content of.</p>

                    <button className="mt-10 p-2 text-indigo-500 rounded-lg bg-indigo-100 flex items-center gap-5"><span className="ml-3 text-lg">View More</span> <span className="bg-white p-1 rounded"><MdKeyboardArrowRight className="font-bold text-3xl" /></span></button>
                </div>

                <div className="max-w-44 bg-white w-full h-96 rounded-2xl p-8   shadow-custom">
                    <h1 className="text-6xl font-extrabold text-indigo-900">03</h1>
                    <p className="text-3xl mt-10 mb-3 text-orange-500">
                        Registration
                    </p>
                    <p>It is a long established fact that a reader will be distracted by the readable content of.</p>

                    <button className="mt-10 p-2 text-indigo-500 rounded-lg bg-indigo-100 flex items-center gap-5"><span className="ml-3 text-lg">View More</span> <span className="bg-white p-1 rounded"><MdKeyboardArrowRight className="font-bold text-3xl" /></span></button>
                </div>

            </div>


            {/* icon */}
            <div className="absolute bottom-10 right-10 animated-logo">
                <img src="../../../../public/assets/icons/icon-1.png" alt="" />
            </div>
            {/* icon */}
        </section>
    )
}

export default WorkingProcess;