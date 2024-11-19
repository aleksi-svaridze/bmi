import { About } from "./sections/About";
import { Advices } from "./sections/Advices";
import { Hero } from "./sections/Hero";
import { Limitations } from "./sections/Limitationes";

function App() {
  return (
    <main className="lg:px-6">
      <Hero />
      <About />

      <div className="bg-gradient-to-br from-[#D6E6FE]/0 to-[#D6E6FE]/100 lg:max-w-[1392px] mx-auto lg:rounded-[35px]">
        <Advices />
      </div>

      <Limitations />
    </main>
  );
}

export default App;
