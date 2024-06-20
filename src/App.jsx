import Footer from "./components/Footer";
import About from "/src/components/About";
import Header from "/src/components/Header";

const App = () => {
  return (
    <>
      <Header />
      <div className="main-container">
      <About />
      </div>
      <Footer />
    </>
  );
};
export default App;
