const Footer = () => {
    return (
        <footer className="bg-slate-50 py-14 md:py-20">
            <div className="max-w-screen-xl mx-auto">
                <div className="container mx-auto flex flex-wrap justify-between">
                    <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-8">
                        <div className="mb-6">
                            <h2 className="text-3xl font-bold">Doctor ACI</h2>
                            <p className="uppercase text-md tracking-widest	">Physiologist</p>
                        </div>
                        <div>
                            <p className="text-sm tracking-wider">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id est sed lacus volutpat lobortis. Lorem ipsum dolor sit amet. </p>

                            <div className="mt-10">
                                <a href="#" className="text-lg font-semibold block mb-3">Phone - +91 9036 780 5805</a>

                                <a href="#" className="text-lg font-semibold block ">Mail Id - sample@gmail.com</a>
                            </div>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-8">
                        <h2 className="text-xl font-semibold">Our Services</h2>
                        <h2 className="text-xl font-semibold mb-4 border-b-4 border-indigo-400 w-10 mt-4"></h2>
                        <ul>
                            <li className="mb-3 border-b border-dashed pb-2"><a href="#" className="font-light text-sm hover:text-indigo-400"><span className="font-bold text-indigo-400">-</span> Depression Treatment</a></li>
                            <li className="mb-3 border-b border-dashed pb-2"><a href="#" className="font-light text-sm hover:text-indigo-400"><span className="font-bold text-indigo-400">-</span> Relationship Problems</a></li>
                            <li className="mb-3 border-b border-dashed pb-2"><a href="#" className="font-light text-sm hover:text-indigo-400"><span className="font-bold text-indigo-400">-</span> Personal Development</a></li>
                            <li className="mb-3 border-b border-dashed pb-2"><a href="#" className="font-light text-sm hover:text-indigo-400"><span className="font-bold text-indigo-400">-</span> Couples Consulting</a></li>
                            <li className="mb-3 border-b border-dashed pb-2"><a href="#" className="font-light text-sm hover:text-indigo-400"><span className="font-bold text-indigo-400">-</span> Anxiety Consulting</a></li>
                        </ul>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-8">
                        <h2 className="text-xl font-semibold">Our Time Schedule</h2>
                        <h2 className="text-xl font-semibold mb-4 border-b-4 border-indigo-400 w-10 mt-4"></h2>
                        <ul>
                            <li className="mb-2">Link 7</li>
                            <li className="mb-2">Link 8</li>
                            <li className="mb-2">Link 9</li>
                        </ul>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-8">
                        <h2 className="text-xl font-semibold">Newsletter</h2>
                        <h2 className="text-xl font-semibold mb-4 border-b-4 border-indigo-400 w-10 mt-4"></h2>
                        <ul>
                            <li className="mb-2">Link 10</li>
                            <li className="mb-2">Link 11</li>
                            <li className="mb-2">Link 12</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer