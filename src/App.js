import './App.scss';
import AboutMe from './pages/aboutme';
import Contact from './pages/contact';
import Footer from './pages/footer';
import Home from './pages/home';
import Navbar from './pages/navbar';
import Projects from './pages/projects';
import Skills from './pages/skills';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <AboutMe />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
