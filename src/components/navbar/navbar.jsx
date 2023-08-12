import { useState } from "react";
import AppointmentBtn from "../btns/appointment-btn";
import { FiPhoneCall } from 'react-icons/fi';


const Navbar = (props) => {
    const { scrollToHeader, scrollToAbout, scrollToAppointment, scrollToDiseases, scrollToReview, scrollToContact, scrollToServices } = props;
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    const toggleMobileNav = () => {
        setIsMobileNavOpen((prev) => !prev);
    };


    const handleMobileNav = (where) => {
        if (where == "home") {
            scrollToHeader();
            setIsMobileNavOpen(false);
        } else if (where == "about") {
            scrollToAbout();
            setIsMobileNavOpen(false);
        } else if (where == "service") {
            scrollToServices();
            setIsMobileNavOpen(false);
        } else if (where == "contact") {
            scrollToContact();
            setIsMobileNavOpen(false);
        } else if (where == "blog") {
            scrollToReview();
            setIsMobileNavOpen(false);
        }
    };


    return (
        <nav className="bg-white sticky left-0 top-0 z-50 shadow-md">
            <div className="max-w-screen-xl mx-auto px-5 md:px-0 py-5 flex items-center justify-between">
                {/* Logo */}
                <div className=" text-blue-500 font-bold text-2xl">Doctor ACI</div>

                {/* Mobile Nav */}
                <div className="lg:hidden">
                    <button
                        className="text-white bg-blue-400 py-2 px-4 rounded-lg drop-shadow-md border text-xl"
                        onClick={toggleMobileNav}
                    >
                        ☰
                    </button>
                </div>

                {/* Nav Links (Desktop) */}
                <div className="hidden lg:flex lg:gap-10">
                    <button onClick={scrollToHeader} className="text-indigo-400 font-bold">
                        Home
                    </button>
                    <button onClick={scrollToAbout} className="text-indigo-400 font-bold">
                        About Me
                    </button>
                    <button onClick={scrollToServices} className="text-indigo-400 font-bold">
                        Services
                    </button>
                    <button onClick={scrollToContact} className="text-indigo-400 font-bold">
                        Contact
                    </button>
                    <button onClick={scrollToReview} className="text-indigo-400 font-bold">
                        Blog
                    </button>
                    <div className="flex items-center gap-5 text-indigo-400 font-bold">
                        <p className="bg-indigo-100 p-2 rounded"><FiPhoneCall className="text-xl" /></p>
                        <p className="text-xl font-bold text-indigo-800">(+01) 999 800 777</p>
                    </div>
                </div>

                <div className="hidden lg:flex space-x-4">
                    <AppointmentBtn scrollToAppointment={scrollToAppointment} />
                </div>

                {/* Nav Links (Mobile) */}
                {isMobileNavOpen && (
                    <div className="lg:hidden absolute top-20 right-7 rounded border drop-shadow-sm bg-white px-5 py-10 h-96 w-80">

                        <button onClick={() => handleMobileNav("home")} className="text-lg font-bold text-indigo-900 border-b-2 py-3 block w-full text-left">
                            Home
                        </button>

                        <button onClick={() => handleMobileNav("about")} className="text-lg font-bold text-indigo-900 border-b-2 py-3 block w-full text-left">
                            About Me
                        </button>

                        <button onClick={() => handleMobileNav("service")} className="text-lg font-bold text-indigo-900 border-b-2 py-3 block w-full text-left">
                            Services
                        </button>

                        <button onClick={() => handleMobileNav("contact")} className=" text-lg font-bold text-indigo-900 border-b-2 py-3 block w-full text-left">
                            Contact
                        </button>

                        <button onClick={() => handleMobileNav("blog")} className="text-lg font-bold text-indigo-900 border-b-2 py-3 block w-full text-left">
                            Blog
                        </button>

                        <div className="mt-3">
                            <AppointmentBtn setIsMobileNavOpen={setIsMobileNavOpen} scrollToAppointment={scrollToAppointment} />
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
