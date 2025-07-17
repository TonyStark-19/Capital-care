// import components
import { Navbar } from "./Components/Navbar";
import { Home } from "./Components/Home";
import { About } from "./Components/About";
import { Services } from "./Components/Services";
import { Banking } from "./Components/Banking";
import { WhyUS } from "./Components/Why-Us";
import { Contact } from "./Components/Contact";
import { Footer } from "./Components/Footer";

// Main app
export default function App() {
  return (
    <div className="h-full">
      <Navbar />
      <Home />
      <About />
      <Services />
      <Banking />
      <WhyUS />
      <Contact />
      <Footer />
    </div>
  )
}