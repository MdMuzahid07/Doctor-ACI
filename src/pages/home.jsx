import AboutMe from "../components/home/about/about-me"
import MakeAppointment from "../components/home/appintment/make-appointment"
import Header from "../components/home/header/header"
import WorkingProcess from "../components/home/working-process/working-process"

const Home = () => {
    return (
        <main className="overflow-hidden">
            <Header />
            <AboutMe />
            <WorkingProcess />
            <MakeAppointment />
        </main>
    )
}

export default Home;