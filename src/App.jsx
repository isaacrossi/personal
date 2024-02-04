import { Hero } from "./components/Hero";
import { Header } from "./components/header";
import { Projects } from "./components/Projects";
import { Musings } from "./components/Musings";
import { Footer } from "./components/footer";

const App = () => (
  <>
    <Header />
    <Hero />
    <Projects />
    <Musings />
    <Footer />
  </>
);

export default App;
