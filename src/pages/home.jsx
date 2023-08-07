import AboutMe from "../components/home/about/about-me"
import Header from "../components/home/header/header"
import WorkingProcess from "../components/home/working-process/working-process"

const Home = () => {
    return (
        <main className="overflow-hidden">
            <Header />
            <AboutMe />
            <WorkingProcess />
        </main>
    )
}

export default Home