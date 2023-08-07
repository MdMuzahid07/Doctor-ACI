import DayPickerFunction from "../../../utils/day-picker";
import TimePicker from "../../../utils/time-picker";

const MakeAppointment = () => {
    return (
        <section className="max-w-screen-lg mx-auto px-5 md:px-0 pb-20 relative py-28 md:py-36">
            <div className="grid md:grid-cols-7 gap-10 mt-10">
                <div className="md:col-span-3">
                    <DayPickerFunction />
                    <TimePicker />
                </div>
                <div className="md:col-span-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quod, suscipit nesciunt hic id inventore tempore accusamus facilis mollitia itaque, alias aspernatur sit reprehenderit. Nesciunt fuga hic quibusdam unde! Ratione expedita doloremque id voluptate deleniti pariatur, atque sed dignissimos accusantium ea labore repudiandae commodi quasi, deserunt laudantium culpa dicta ipsum perspiciatis ex ab reprehenderit quisquam! Praesentium, hic.
                </div>
            </div>
        </section>
    )
}

export default MakeAppointment;