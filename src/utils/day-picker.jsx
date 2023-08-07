import { format } from 'date-fns';
import { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const DayPickerFunction = () => {
    const [selected, setSelected] = useState(null);

    let footer = <p>Please pick a day.</p>;
    if (selected) {
        footer = <p>You picked {format(selected, 'PP')}.</p>;
    }

    return (
        <section className="p-5 bg-white shadow-custom rounded-3xl">
            <h1 className="text-xl ml-5 mb-3 font-bold text-indigo-900 ">
                Book Appointment
            </h1>
            <DayPicker
                mode="single"
                selected={selected}
                onSelect={setSelected}
                footer={footer}
            />
        </section>
    );
}

export default DayPickerFunction;