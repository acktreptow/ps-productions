import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppNavbar from "./components/Nav";
import Hero from "./components/Hero";
import ReleasedProductions from "./components/Carousel";
import About from "./components/About";
import FutureProductions from "./components/Card";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <header>
        <AppNavbar />
      </header>
      <main>
        <Hero />
        <ReleasedProductions />
        <About />
        <FutureProductions />
      </main>
      <Footer />
    </>
  );
}

export default App;
