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
                                <a href="#" className="text-xl block mb-3">Phone - +91 9036 780 5805</a>

                                <a href="#" className="text-xl block ">Mail Id - sample@gmail.com</a>
                            </div>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-8">
                        <h2 className="text-xl font-semibold mb-4">Our Services</h2>
                        <ul>
                            <li className="mb-2">Link 4</li>
                            <li className="mb-2">Link 5</li>
                            <li className="mb-2">Link 6</li>
                        </ul>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-8">
                        <h2 className="text-xl font-semibold mb-4">Our Time Schedule</h2>
                        <ul>
                            <li className="mb-2">Link 7</li>
                            <li className="mb-2">Link 8</li>
                            <li className="mb-2">Link 9</li>
                        </ul>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-8">
                        <h2 className="text-xl font-semibold mb-4">Newsletter</h2>
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