
const AppointmentBtn = ({ scrollToAppointment, setIsMobileNavOpen }) => {

    const handleAppointmentBtn = () => {
        scrollToAppointment();
        setIsMobileNavOpen(false);
    };

    return (
        <button onClick={handleAppointmentBtn} type="button" className="bg-gradient-to-r from-indigo-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 flex rounded-lg px-4 py-3 text-lg text-white font-bold">Get Appointment</button>
    )
}

export default AppointmentBtn