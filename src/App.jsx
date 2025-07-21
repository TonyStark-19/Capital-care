// import components
import { Navbar } from "./Components/Navbar";
import { Home } from "./Components/Home";
import { About } from "./Components/About";
import { Services } from "./Components/Services";
import { Banking } from "./Components/Banking";
import { WhyUS } from "./Components/Why-Us";
import { Contact } from "./Components/Contact";
import { Footer } from "./Components/Footer";

// import service pages
import { ServiceOne } from "./Pages/Service1";
import { ServiceTwo } from "./Pages/Service2";
import { ServiceThree } from "./Pages/Service3";
import { ServiceFour } from "./Pages/Service4";
import { ServiceFive } from "./Pages/Service5";
import { ServiceSix } from "./Pages/Service6";
import { ServiceSeven } from "./Pages/Service7";
import { ServiceEight } from "./Pages/Service8";

// import route
import { Routes, Route } from 'react-router-dom';

// Main app
export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={
          <>
            <Navbar />
            <Home />
            <About />
            <Services />
            <Banking />
            <WhyUS />
            <Contact />
            <Footer />
          </>
        } />
        <Route path="/service1" element={<ServiceOne />} />
        <Route path="/service2" element={<ServiceTwo />} />
        <Route path="/service3" element={<ServiceThree />} />
        <Route path="/service4" element={<ServiceFour />} />
        <Route path="/service5" element={<ServiceFive />} />
        <Route path="/service6" element={<ServiceSix />} />
        <Route path="/service7" element={<ServiceSeven />} />
        <Route path="/service8" element={<ServiceEight />} />
      </Routes>
    </>
  )
}