// import components
import { Navbar } from "./Components/Navbar";
import { Home } from "./Components/Home";
import { About } from "./Components/About";
import { Services } from "./Components/Services";
import { Banking } from "./Components/Banking";
import { WhyUS } from "./Components/Why-Us";
import { Contact } from "./Components/Contact";
import { Footer } from "./Components/Footer";

// import pages
import { ServiceOne } from "./Service1";

// import route
import { Routes, Route } from 'react-router-dom';

// Main app
export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={
          <>
            <Home />
            <About />
            <Services />
            <Banking />
            <WhyUS />
            <Contact />
            <Footer />
          </>
        } />
        <Route path="/Service1" element={<ServiceOne />} />
      </Routes>
    </>
  )
}