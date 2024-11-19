import { About } from "./sections/About";
import { Advices } from "./sections/Advices";
import { Hero } from "./sections/Hero";
import { Limitations } from "./sections/Limitationes";

function App() {
  return (
    <main className="lg:container lg:px-6">
      <Hero />
      <About />
      <Advices />
      <Limitations />
    </main>
  );
}

export default App;
