import DayPickerFunction from "../../../utils/day-picker";
import TimePicker from "../../../utils/time-picker";

const MakeAppointment = ({ getInTouch }) => {
    return (
        <section ref={getInTouch} className="max-w-screen-lg mx-auto px-5 md:px-0 pb-20 relative py-28 md:py-36">
            <div className="grid md:grid-cols-7 gap-10 mt-10">
                <div className="md:col-span-3 relative">
                    {/* icon */}
                    <div className="absolute -top-10 -left-28 animated-logo">
                        <img src="../../../../public/assets/icons/icons-2.png" alt="" />
                    </div>
                    {/* icon */}

                    <DayPickerFunction />
                    <TimePicker />


                    {/* icon */}
                    <div className="absolute -bottom-20 -left-28 animated-logo">
                        <img src="../../../../public/assets/icons/icon-1.png" alt="" />
                    </div>
                    {/* icon */}
                </div>
                <div className="md:col-span-4">
                    <div className="relative">
                        {/* icon */}
                        <div className="absolute top-10 right-20 animated-logo">
                            <img src="../../../../public/assets/icons/icons-8.png" alt="" />
                        </div>
                        {/* icon */}

                        {/* icon */}
                        <div className="absolute top-20 left-0 animated-logo">
                            <img src="../../../../public/assets/icons/icons-9.png" alt="" />
                        </div>
                        {/* icon */}


                        {/* icon */}
                        <div className="absolute bottom-32 right-5 animated-logo">
                            <img src="../../../../public/assets/icons/icons-10.png" alt="" />
                        </div>
                        {/* icon */}

                        {/* icon */}
                        <div className="absolute bottom-20 md:bottom-32 left-5 animated-logo">
                            <img src="../../../../public/assets/icons/icons-11.png" alt="" />
                        </div>
                        {/* icon */}

                        <img className="w-full object-cover object-center" src="../../../../public/assets/icons/mobile.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MakeAppointment;