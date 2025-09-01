import Navbar from "./components/Nav"
import Layout from "./components/Layout";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skill";
import Education from "./components/Education";
import ProjectCard from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
 return (
    <Layout>
      <Navbar />
      <Home></Home>
      <AboutMe></AboutMe>
      <Skills></Skills>
      <Education></Education>
      <ProjectCard></ProjectCard>
      <Contact></Contact>
      <Footer></Footer>
    </Layout>
  );
}

export default App
