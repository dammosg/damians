import About from "./components/About";
import Contact from "./components/Contact";
import Developer from "./components/Developer";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Sidebar />
      <Developer />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
