
const Header = () => {
    return (
        <section className="bg-cover bg-top bg-[url('../../../public/assets/footer/wave-header.png')]">
            <div className="max-w-screen-lg mx-auto py-24 md:py-44 px-5 md:px-0">
                <div className="grid md:grid-cols-7 gap-10">
                    <div className="md:col-span-4 relative">

                        <div className="absolute -left-10  -top-20  animated-logo">
                            <img src="../../../../public/assets/icons/icons-3.png" alt="" />
                        </div>

                        <h2 className="text-2xl font-bold text-indigo-600">We Provide All Health Care Solution</h2>
                        <h1 className="text-6xl font-bold text-indigo-900 mt-16">
                            Protect Your Health And Take Care To Of Your Health
                        </h1>
                        <button className="mt-10 px-7 text-white font-bold py-3 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-lg">Read more</button>

                        <div className="absolute animated-logo right-20  -bottom-20">
                            <img src="../../../../public/assets/icons/icons-5.png" alt="" />
                        </div>

                        <div className="absolute animated-logo -left-44  bottom-16">
                            <img src="../../../../public/assets/icons/icons-2.png" alt="" />
                        </div>
                    </div>
                    <div className="md:col-span-3 relative">
                        <div className="absolute animated-logo -left-10  -top-16">
                            <img src="../../../../public/assets/icons/icons-4.png" alt="" />
                        </div>


                        <img className="w-full h-96 border-2 bg-indigo-500 rounded-full object-cover object-top" src="../../../../public/assets/images/men-doctor.png" alt="" />

                        <div className="absolute -right-10 animated-logo  -bottom-7">
                            <img src="../../../../public/assets/icons/icon-1.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header
