import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Process from "@/components/Process";
import Projects from "@/components/Projects";
import SelectedWork from "@/components/SelectedWork";
import Services from "@/components/Services";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <Navbar />
      <Hero />
      <Services />
      <TechStack />
      <SelectedWork />
      <Projects />
      <Process />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}