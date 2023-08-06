import { GrSend } from 'react-icons/gr';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-slate-50">
            <div className="max-w-screen-xl mx-auto px-5 md:px-0 pt-24 pb-14">
                <div className="container mx-auto flex flex-wrap justify-between">
                    <div className="w-full sm:w-1/2 md:w-1/4 pr:0 md:pr-4 mb-8">
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
                    <div className="w-full sm:w-1/2 md:w-1/4 pr:0 md:pr-4 mb-8">
                        <h2 className="text-xl font-semibold">Our Services</h2>
                        <h2 className="text-xl font-semibold mb-4 border-b-2 border-indigo-400 w-10 mt-4"></h2>
                        <ul>
                            <li className="mb-3 border-b border-dashed pb-2"><a href="#" className="font-light text-sm hover:text-indigo-400"><span className="font-bold text-indigo-400">-</span> Depression Treatment</a></li>
                            <li className="mb-3 border-b border-dashed pb-2"><a href="#" className="font-light text-sm hover:text-indigo-400"><span className="font-bold text-indigo-400">-</span> Relationship Problems</a></li>
                            <li className="mb-3 border-b border-dashed pb-2"><a href="#" className="font-light text-sm hover:text-indigo-400"><span className="font-bold text-indigo-400">-</span> Personal Development</a></li>
                            <li className="mb-3 border-b border-dashed pb-2"><a href="#" className="font-light text-sm hover:text-indigo-400"><span className="font-bold text-indigo-400">-</span> Couples Consulting</a></li>
                            <li className="mb-3 border-b border-dashed pb-2"><a href="#" className="font-light text-sm hover:text-indigo-400"><span className="font-bold text-indigo-400">-</span> Anxiety Consulting</a></li>
                        </ul>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/4 pr:0 md:pr-4 mb-8">
                        <h2 className="text-xl font-semibold">Our Time Schedule</h2>
                        <h2 className="text-xl font-semibold mb-4 border-b-2 border-indigo-400 w-10 mt-4"></h2>
                        <ul>
                            <li className="mb-4">
                                <p className="mb-3 font-semibold">Monday - Friday</p>
                                <p><small className="text-indigo-400">08:00AM - 05:00PM</small></p>
                            </li>
                            <li>
                                <p className="mb-3 font-semibold">Saturday - Sunday</p>
                                <p><small className="text-indigo-400">09:00AM - 04:00PM</small></p>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/4 pr:0 mb-8">
                        <div>
                            <h2 className="text-xl font-semibold">Newsletter</h2>
                        <h2 className="text-xl font-semibold mb-4 border-b-2 border-indigo-400 w-10 mt-4"></h2>
                            <div className="relative">
                                <input type="email" className="border-b focus:border-indigo-400 focus:outline-none mt-5 pb-2 bg-slate-50 w-full" placeholder="Email Address" />
                                <button className="absolute right-2 bottom-3"><GrSend /></button>
                            </div>
                        </div>
                        <div className="mt-10">
                            <h2 className="text-xl font-semibold">Follow Us</h2>
                            <h2 className="text-xl font-semibold mb-4 border-b-2 border-indigo-400 w-10 mt-4"></h2>
                            <div className="flex items-center gap-4 mt-7">
                                <button><FaFacebookF className="text-slate-400 hover:text-indigo-400" /></button>
                                <button><FaTwitter className="text-slate-400 hover:text-indigo-400" /></button>
                                <button><FaInstagram className="text-slate-400 hover:text-indigo-400" /></button>
                                <button><FaLinkedinIn className="text-slate-400 hover:text-indigo-400" /></button>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="mt-10" />
                <div className="mt-10">
                    <p>Copyright © 2023. All rights reserved Doctor ACI</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer