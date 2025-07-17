// import components
import { Navbar } from "./Components/Navbar";
import { Home } from "./Components/Home";
import { About } from "./Components/About";
import { Services } from "./Components/Services";
import { Banking } from "./Components/Banking";
import { WhyUS } from "./Components/Why-Us";

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
    </div>
  )
}