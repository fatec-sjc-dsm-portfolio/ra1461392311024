import { useState } from 'react';
import BackgroundTheme from "./components/backgroundTheme";
import Notebook3D from "./components/notebook3D";
import HomePage from "./components/homePage";

import AboutMe from "./components/aboutMe";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Footer from "./components/footer";
import FooterEN from "./components/footerEN";
import Loading from "./components/loading";
import LanguageSwitch from "./components/LanguageSwitch";
import { LanguageProvider, useLanguage } from "./components/LanguageContext";
import HomePageEN from './components/homePageEN';
import AboutMeEN from './components/aboutMeEN';
import ProjectsEN from './components/projectsEN';
import SkillsEN from './components/skillsEN';

function AppContent() {
  const { language } = useLanguage();
  const [loading, setLoading] = useState(false);

  const handleSwitch = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1200);
  };

  return (
    <>
      <LanguageSwitch onSwitch={handleSwitch} />
      {loading && <Loading />}
      {!loading && (
        <>
          <BackgroundTheme />
          <Notebook3D />
          <div id="home" />
          {language === 'EN' ? <HomePageEN /> : <HomePage />}
          <div id="aboutme" />
          <br />
          {language === 'EN' ? <AboutMeEN /> : <AboutMe />}
          <div id="skills" />
          <br />
          {language === 'EN' ? <SkillsEN /> : <Skills />}
          <div id="projects" />
          <br />
          {language === 'EN' ? <ProjectsEN /> : <Projects />}
          {language === 'EN' ? <FooterEN /> : <Footer />}
        </>
      )}
    </>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
