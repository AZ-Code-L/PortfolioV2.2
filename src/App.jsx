import "./app.scss"
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portolio from "./components/portfolio/Portolio";
import Skills from "./components/skills/Skills";

const App = () => {
  return <div>
    <section id="Homepage">
      <Navbar />
      <Hero/>
    </section>
    <section id="Skills"><Parallax type="skills"/></section>
    <section ><Skills/></section>
    <section id="Portfolio"><Parallax type="portfolio"/></section>
    <Portolio/>
    <section id="Contact">Contact</section>
  </div>;
};

export default App;
