
const Header = () => {
    return (
        <section className="bg-cover bg-top bg-[url('../../../public/assets/footer/wave-header.png')]">
            <div className="max-w-screen-xl mx-auto py-20 md:py-32 px-5 md:px-0">
                <div className="grid md:grid-cols-7 gap-10">
                    <div className="md:col-span-4">
                        <h2 className="text-2xl font-bold text-indigo-600">We Provide All Health Care Solution</h2>
                        <h1 className="text-6xl font-bold text-indigo-900 mt-16">
                            Protect Your Health And Take Care To Of Your Health
                        </h1>
                        <button className="mt-10 px-7 text-white font-bold py-3 bg-orange-500 rounded-lg">Read more</button>
                    </div>
                    <div className="md:col-span-3">
                        <img className="w-full h-96 border-2 bg-indigo-500 rounded-full object-cover object-top" src="../../../../public/assets/images/men-doctor.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header