import { MdKeyboardArrowRight } from 'react-icons/md';
import { SlCalender } from 'react-icons/sl';


const LatestArticles = () => {
    return (
        <section className="max-w-screen-lg mx-auto px-5 md:px-0 pb-32 relative">
            <h2 className="text-xl text-center mb-7 font-bold text-orange-500">Latest Articles</h2>
            <h1 className="text-4xl text-center font-bold text-indigo-900 ">
                My Latest Articles
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

                <div className="max-w-44 border-2 bg-white w-full rounded-2xl p-6  shadow-custom">
                    <img className="w-full object-cover object-center h-44 rounded-lg" src="../../../../public/assets/images/doctor-equipment.png" alt="" />

                    <div className="flex items-center gap-5 mt-7">
                        <div className="flex items-center gap-2">
                            <img className="w-7 h-7 rounded-full" src="../../../../public/assets/images/about-me-img-1.png" alt="" />
                            <p className="text-orange-500">Mr John</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <SlCalender className="text-orange-500" />
                            <p className="text-orange-500">7 Aug, 2023</p>
                        </div>
                    </div>

                    <p className="text-2xl mt-5 mb-3 text-indigo-900">
                        Precious Tips To Help You Get Better.
                    </p>

                    <button className="mt-5 p-1 border-2 border-indigo-500 rounded-lg text-indigo-900 bg-white flex items-center gap-5"><span className="ml-3 text-lg ">View More</span> <span className="bg-indigo-500 p-1 rounded"><MdKeyboardArrowRight className="font-bold text-white text-3xl" /></span></button>
                </div>

                <div className="max-w-44 border-2 bg-white w-full rounded-2xl p-6  shadow-custom">
                    <img className="w-full object-cover object-center h-44 rounded-lg" src="../../../../public/assets/images/doctor-equipment.png" alt="" />

                    <div className="flex items-center gap-5 mt-7">
                        <div className="flex items-center gap-2">
                            <img className="w-7 h-7 rounded-full" src="../../../../public/assets/images/about-me-img-1.png" alt="" />
                            <p className="text-orange-500">Mr John</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <SlCalender className="text-orange-500" />
                            <p className="text-orange-500">7 Aug, 2023</p>
                        </div>
                    </div>

                    <p className="text-2xl mt-5 mb-3 text-indigo-900">
                        Precious Tips To Help You Get Better.
                    </p>

                    <button className="mt-5 p-1 border-2 border-indigo-500 rounded-lg text-indigo-900 bg-white flex items-center gap-5"><span className="ml-3 text-lg ">View More</span> <span className="bg-indigo-500 p-1 rounded"><MdKeyboardArrowRight className="font-bold text-white text-3xl" /></span></button>
                </div>

                <div className="max-w-44 border-2 bg-white w-full rounded-2xl p-6  shadow-custom">
                    <img className="w-full object-cover object-center h-44 rounded-lg" src="../../../../public/assets/images/doctor-equipment.png" alt="" />

                    <div className="flex items-center gap-5 mt-7">
                        <div className="flex items-center gap-2">
                            <img className="w-7 h-7 rounded-full" src="../../../../public/assets/images/about-me-img-1.png" alt="" />
                            <p className="text-orange-500">Mr John</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <SlCalender className="text-orange-500" />
                            <p className="text-orange-500">7 Aug, 2023</p>
                        </div>
                    </div>

                    <p className="text-2xl mt-5 mb-3 text-indigo-900">
                        Precious Tips To Help You Get Better.
                    </p>

                    <button className="mt-5 p-1 border-2 border-indigo-500 rounded-lg text-indigo-900 bg-white flex items-center gap-5"><span className="ml-3 text-lg ">View More</span> <span className="bg-indigo-500 p-1 rounded"><MdKeyboardArrowRight className="font-bold text-white text-3xl" /></span></button>
                </div>

            </div>


            {/* icon */}
            <div className="absolute bottom-10 right-10 animated-logo">
                <img src="../../../../public/assets/icons/icons-14.png" alt="" />
            </div>
            {/* icon */}
        </section>
    )
}

export default LatestArticles;