import About from './About'
import Contact from './Contact'
import Home from './Home'
import Navbar from './Navbar'
import Projects from './Projects'
import Skills from './Skills'
import Footer from './Footer'

function Portfolio() {
    return (
        <div>
            <Navbar />
            <Home />
            <About />
            <Projects />
            <Skills />
            <Contact />
            <Footer />
        </div>
    );
}

export default Portfolio;