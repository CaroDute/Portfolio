import Footer from "./components/Footer";
import Projects from "./components/Projects";
import About from "/src/components/About";
import Header from "/src/components/Header";

const App = () => {

  return (
    <>
      <Header />
      <main>
        <About />
        <Projects />
      </main>
      <Footer />
    </>
  );
};
export default App;

