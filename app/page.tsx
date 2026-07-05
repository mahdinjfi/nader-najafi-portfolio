import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import InstagramSection from "@/components/InstagramSection";
import InternationalCollaboration from "@/components/InternationalCollaboration";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Experience />
        <Stats />
        <Projects />
        <InstagramSection />
        <Testimonials />
        <InternationalCollaboration />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
