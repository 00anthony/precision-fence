import Navbar from "@/src/components/Navbar";
import Hero from "@/src/components/Hero";
import Services from "@/src/components/Services";
import Portfolio from "@/src/components/Portfolio";
import About from "@/src/components/About";
import Testimonials from "@/src/components/Testimonials";
import Contact from "@/src/components/Contact";
import Footer from "@/src/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
