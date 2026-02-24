import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom"; // no HashRouter
import Navbar from "./components/Navbar";
import PageTransition from "./components/PageTransition";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Works from "./pages/Works";
import MyApproach from "./pages/MyApproach";
import ContainerWrapper from "./components/ContainerWrapper";
import AboutMe from "./components/about/AboutMe";
import Blog from "./pages/Blog";
import Footer from "./components/Footer";
import Collaborator from "./pages/Collabarator";

const App = () => {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <ContainerWrapper>
        <AnimatePresence mode="wait">
          <PageTransition key={location.pathname}>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/works" element={<Works />} />
              <Route path="/landing" element={<MyApproach />} />
              <Route path="/intro" element={<AboutMe />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/collaborate" element={<Collaborator/>} />
            </Routes>
          </PageTransition>
        </AnimatePresence>
      </ContainerWrapper>
      <Footer />
    </>
  );
};

export default App;
