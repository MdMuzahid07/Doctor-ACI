import { useRef } from "react";
import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/navbar"
import Home from "./pages/home"

function App() {
  const header = useRef(null);
  const aboutMe = useRef(null);
  const getAnAppointment = useRef(null);
  const whatPatientSays = useRef(null);
  const getInTouch = useRef(null);

  const scrollToHeader = () => {
    if (header.current) {
      header.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    if (aboutMe.current) {
      aboutMe.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAppointment = () => {
    if (getAnAppointment.current) {
      getAnAppointment.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToReview = () => {
    if (whatPatientSays.current) {
      whatPatientSays.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    if (getInTouch.current) {
      getInTouch.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Navbar
        scrollToHeader={scrollToHeader}
        scrollToAbout={scrollToAbout}
        scrollToAppointment={scrollToAppointment}
        scrollToReview={scrollToReview}
        scrollToContact={scrollToContact}
      />
      <Home
        header={header}
        aboutMe={aboutMe}
      />
      <Footer />
    </>
  )
}

export default App
