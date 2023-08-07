import Slider from "react-slick";
import { MdKeyboardArrowRight } from 'react-icons/md';

const ServiceSlider = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    initialSlide: 3
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div>
            <Slider arrows={false} {...settings}>
                <div className="px-2">
                    <div className="max-w-32 custom-gradient bg-white w-full h-96 rounded-2xl p-4    relative">
                        <h1 className="text-6xl font-extrabold text-indigo-900">01</h1>
                        <p className="text-2xl mt-10 mb-3 text-orange-500">
                            Make Appointment
                        </p>
                        <p><small>It is a long established fact that a reader will be distracted by the readable content of.</small></p>

                        <button className="absolute bottom-4 left-4 p-2 text-indigo-500 rounded-lg bg-indigo-100 flex items-center gap-5"><span className="ml-3 text-lg">Get Appointment</span> <span className="bg-white p-1 rounded"><MdKeyboardArrowRight className="font-bold text-3xl" /></span></button>
                    </div>
                </div>

                <div className="px-2">
                    <div className="max-w-32 custom-gradient bg-white w-full h-96 rounded-2xl p-4   relative">
                        <h1 className="text-6xl font-extrabold text-indigo-900">01</h1>
                        <p className="text-2xl mt-10 mb-3 text-orange-500">
                            Make Appointment
                        </p>
                        <p><small>It is a long established fact that a reader will be distracted by the readable content of.</small></p>

                        <button className="absolute bottom-4 left-4 p-2 text-indigo-500 rounded-lg bg-indigo-100 flex items-center gap-5"><span className="ml-3 text-lg">Get Appointment</span> <span className="bg-white p-1 rounded"><MdKeyboardArrowRight className="font-bold text-3xl" /></span></button>
                    </div>
                </div>

                <div className="px-2">
                    <div className="max-w-32 custom-gradient bg-white w-full h-96 rounded-2xl p-4   relative">
                        <h1 className="text-6xl font-extrabold text-indigo-900">01</h1>
                        <p className="text-2xl mt-10 mb-3 text-orange-500">
                            Make Appointment
                        </p>
                        <p><small>It is a long established fact that a reader will be distracted by the readable content of.</small></p>

                        <button className="absolute bottom-4 left-4 p-2 text-indigo-500 rounded-lg bg-indigo-100 flex items-center gap-5"><span className="ml-3 text-lg">Get Appointment</span> <span className="bg-white p-1 rounded"><MdKeyboardArrowRight className="font-bold text-3xl" /></span></button>
                    </div>
                </div>


                <div className="px-2">
                    <div className="max-w-32 custom-gradient bg-white w-full h-96 rounded-2xl p-4   relative">
                        <h1 className="text-6xl font-extrabold text-indigo-900">01</h1>
                        <p className="text-2xl mt-10 mb-3 text-orange-500">
                            Make Appointment
                        </p>
                        <p><small>It is a long established fact that a reader will be distracted by the readable content of.</small></p>

                        <button className="absolute bottom-4 left-4 p-2 text-indigo-500 rounded-lg bg-indigo-100 flex items-center gap-5"><span className="ml-3 text-lg">Get Appointment</span> <span className="bg-white p-1 rounded"><MdKeyboardArrowRight className="font-bold text-3xl" /></span></button>
                    </div>
                </div>

            </Slider>
        </div>
    );
}

export default ServiceSlider;
