import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Header from "./CommonLayout/Header/Header";
import Portfolio from "./Components/Portfolio/Portfolio";
import Skill from "./Components/Skill/Skill";
import Contact from "./Components/Contact/Contact";
import Footer from "./CommonLayout/Footer/Footer";
import Service from "./Components/Service/Service";

function App() {
  return (
    <div className="">
      <Header></Header>
      <Home></Home>
      <About></About>
      <Service></Service>
      <Skill></Skill>
      <Portfolio></Portfolio>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
