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
import { ServiceNine } from "./Pages/Service9";
import { ServiceTen } from "./Pages/Service10";
import { ServiceEleven } from "./Pages/Service11";

// import route and use location
import { Routes, Route, useLocation } from 'react-router-dom';

// import use effect and use ref
import { useRef, useEffect } from "react";

// Main app
export default function App() {
  // use ref for scroll to top
  const scrollRef = useRef(null);

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={
          <div className="w-full overflow-x-hidden">
            <Navbar />
            <Home />
            <About />
            <Services />
            <Banking />
            <WhyUS />
            <Contact />
            <Footer />
          </div>
        } />
        <Route path="/service1" element={<ServiceOne />} />
        <Route path="/service2" element={<ServiceTwo />} />
        <Route path="/service3" element={<ServiceThree />} />
        <Route path="/service4" element={<ServiceFour />} />
        <Route path="/service5" element={<ServiceFive />} />
        <Route path="/service6" element={<ServiceSix />} />
        <Route path="/service7" element={<ServiceSeven />} />
        <Route path="/service8" element={<ServiceEight />} />
        <Route path="/service9" element={<ServiceNine />} />
        <Route path="/service10" element={<ServiceTen />} />
        <Route path="/service11" element={<ServiceEleven />} />
      </Routes>
    </>
  )
}

// scroll to top function
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}