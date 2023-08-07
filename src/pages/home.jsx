import AboutMe from "../components/home/about/about-me"
import MakeAppointment from "../components/home/appintment/make-appointment"
import Header from "../components/home/header/header"
import LatestArticles from "../components/home/latest-news/latest-articles"
import Services from "../components/home/services/services"
import WorkingProcess from "../components/home/working-process/working-process"

const Home = (props) => {
    const {
        header,
        aboutMe,
        getAnAppointment,
        whatPatientSays,
        getInTouch
    } = props;
    return (
        <main className="overflow-hidden">
            <Header header={header} />
            <AboutMe aboutMe={aboutMe} />
            <WorkingProcess />
            <MakeAppointment getInTouch={getInTouch} />
            <Services getAnAppointment={getAnAppointment} />
            <LatestArticles whatPatientSays={whatPatientSays} />
        </main>
    )
}

export default Home;