import "./App.css";
import Landing from "./components/Landing/Landing";
import About from "./components/About/About";
import Team from "./components/Team/Team";
import Clients from "./components/Clients/Clients";
import Area from "./components/Area/Area";
import Faq from "./components/Faq/Faq";
import Subscribe from "./components/Subscribe/Subscribe";
function App() {
  return (
    <div className="app">
      <Landing />
      <About />
      <Area />
      <Clients />
      <Team />
      <Faq />
      <Subscribe />
    </div>
  );
}

export default App;
