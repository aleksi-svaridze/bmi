import { About } from "./sections/About";
import { Advices } from "./sections/Advices";
import Header from "./sections/Header";
import { Hero } from "./sections/Hero";
import { Limitations } from "./sections/Limitationes";

function App() {
  return (
    <main className="lg:px-6">
      <div className="lg:max-w-[1392px] mx-auto relative lg:h-[737px]">
        <div className="bg-gradient-to-br from-[#D6E6FE]/0 to-[#D6FCFE]/100 rounded-b-[35px] h-[640px] lg:h-auto lg:w-[978px] absolute top-0 left-0 right-0 lg:bottom-0 -z-10"></div>
        <Header />
        <Hero />
      </div>

      <div className="lg:max-w-[1392px] mx-auto">
        <About />
      </div>

      <div className="bg-gradient-to-br from-[#D6FCFE]/0 to-[#D6E6FE]/100 lg:max-w-[1392px] mx-auto lg:rounded-[35px]">
        <Advices />
      </div>

      <Limitations />
    </main>
  );
}

export default App;
