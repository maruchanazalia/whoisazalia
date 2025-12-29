import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { personalData } from './data/personalData';
import './App.css';

import meImage from './assets/me.jpeg';

function App() {
  const profileData = {
    profileImage: meImage,
    quotes: personalData.quotes,
    playlist: personalData.playlist,
  };

  return (
    <div className="App">
      <Header />
      <HeroSection
        profileImage={profileData.profileImage}
        quotes={profileData.quotes}
        playlist={profileData.playlist}
      />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
