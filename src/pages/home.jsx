import AboutMe from "../components/home/about/about-me"
import MakeAppointment from "../components/home/appintment/make-appointment"
import Header from "../components/home/header/header"
import Services from "../components/home/services/services"
import WorkingProcess from "../components/home/working-process/working-process"

const Home = () => {
    return (
        <main className="overflow-hidden">
            <Header />
            <AboutMe />
            <WorkingProcess />
            <MakeAppointment />
            <Services />
        </main>
    )
}

export default Home;