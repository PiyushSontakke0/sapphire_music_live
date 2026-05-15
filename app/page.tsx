import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Performances from "./components/Performances";
import Offerings from "./components/Offerings";
import MusicStyles from "./components/MusicStyles";
import Testimonials from "./components/Testimonials";
import Inquiry from "./components/Inquiry";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Performances />
        <Offerings />
        <MusicStyles />
        <Testimonials />
        <Inquiry />
      </main>
      <Footer />
    </>
  );
}
