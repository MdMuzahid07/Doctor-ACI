import { Swiper, SwiperSlide } from 'swiper/react';
import { MdKeyboardArrowRight } from 'react-icons/md';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';


const ServiceSlider = () => {
    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
                clickable: true,
            }}
            breakpoints={{
                440: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                640: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                1024: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
            }}
            className="mySwiper"
        >
            <SwiperSlide>
                <div className="max-w-xs mx-auto border-2 bg-white shadow-md rounded-md overflow-hidden p-4 h-96">
                    <h1 className="text-6xl font-extrabold text-indigo-900">01</h1>
                    <p className="text-2xl mt-10 mb-3 text-orange-500">Make Appointment</p>
                    <p><small>It is a long established fact that a reader will be distracted by the readable content of.</small></p>
                    <button className="absolute bottom-4 left-4 p-2 text-indigo-500 rounded-lg bg-indigo-100 flex items-center gap-5">
                        <span className="ml-3 text-lg">Get Appointment</span>
                        <span className="bg-white p-1 rounded"><MdKeyboardArrowRight className="font-bold text-3xl" /></span>
                    </button>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="max-w-xs mx-auto border-2 bg-white shadow-md rounded-md overflow-hidden p-4 h-96">
                    <h1 className="text-6xl font-extrabold text-indigo-900">01</h1>
                    <p className="text-2xl mt-10 mb-3 text-orange-500">Make Appointment</p>
                    <p><small>It is a long established fact that a reader will be distracted by the readable content of.</small></p>
                    <button className="absolute bottom-4 left-4 p-2 text-indigo-500 rounded-lg bg-indigo-100 flex items-center gap-5">
                        <span className="ml-3 text-lg">Get Appointment</span>
                        <span className="bg-white p-1 rounded"><MdKeyboardArrowRight className="font-bold text-3xl" /></span>
                    </button>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="max-w-xs mx-auto border-2 bg-white shadow-md rounded-md overflow-hidden p-4 h-96">
                    <h1 className="text-6xl font-extrabold text-indigo-900">01</h1>
                    <p className="text-2xl mt-10 mb-3 text-orange-500">Make Appointment</p>
                    <p><small>It is a long established fact that a reader will be distracted by the readable content of.</small></p>
                    <button className="absolute bottom-4 left-4 p-2 text-indigo-500 rounded-lg bg-indigo-100 flex items-center gap-5">
                        <span className="ml-3 text-lg">Get Appointment</span>
                        <span className="bg-white p-1 rounded"><MdKeyboardArrowRight className="font-bold text-3xl" /></span>
                    </button>
                </div>
            </SwiperSlide>

            {/* Repeat SwiperSlide for other cards */}

        </Swiper>
    );
}

export default ServiceSlider;
