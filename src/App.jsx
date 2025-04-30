import About from "./components/About"
import Contact from "./components/Contact"
import Education from "./components/Education"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Portfolio from "./components/Portfolio"
import Services from "./components/Services"
import Skills from "./components/Skills"
import WhatsAppWidget from './components/WhatsAppWidget';



function App() {
 

  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>

    <Services/>
    <Portfolio/>
    <Education/>
    <Skills/>
    <Contact/>
    <Footer/>
     <WhatsAppWidget />

    </>
  )
}

export default App
