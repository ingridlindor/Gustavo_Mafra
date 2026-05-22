import Cursor from "@/components/atoms/Cursor";
import Navbar from "@/components/organisms/Navbar";
import MarqueeTrack from "@/components/organisms/MarqueeTrack";
import Hero from "@/components/sections/Hero";
import Gallery from "@/components/sections/Gallery";
import Works from "@/components/sections/Works";
import About from "@/components/sections/About";
import ParallaxDivider from "@/components/sections/ParallaxDivider";
import Services from "@/components/sections/Services";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Cursor />
      <Navbar />
      <main>
          <Hero />
          <MarqueeTrack />
          <Gallery />
          <Works />
          <About />
          <ParallaxDivider />
          <Services />
          <Contact/>
      </main>
      <Footer />
    </>
  );
}
