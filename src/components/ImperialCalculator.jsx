import { useState } from "react";
import { useWindowSize } from "usehooks-ts";

const ImperialCalculator = () => {
  const { width } = useWindowSize();
  let [result, setResult] = useState();
  const [pounds, setPounds] = useState("");
  const [inches, setInches] = useState("");
  const [category, setCategory] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleResult();
    }
  };

  const handleResult = () => {
    result = (pounds / (inches * inches)) * 703;
    setResult(result.toFixed(2));

    if (result <= 18.5) {
      setCategory("under weight");
    } else if (result > 18.5 && result <= 24.9) {
      setCategory("Normal");
    } else if (result > 24.9 && result <= 29.9) {
      setCategory("Overweight");
    } else if (result > 29.9 && result <= 39.9) {
      setCategory("Obese");
    } else if (result > 40) {
      setCategory("Morbidly obese");
    } else {
      setResult(false);
    }
  };

  console.log("Imperial", width);
  return (
    <>
      <div className="">
        <h4 className="text-electric-blue text-sm capitalize leading-[150%] mb-2">
          height
        </h4>
        <div className="flex items-center gap-x-6">
          <div className="w-1/2">
            <div className="h-[69px] rounded-xl border-electric-blue focus-within:border-blue border overflow-hidden relative">
              <input
                type="number"
                className="absolute w-full h-full focus:outline-none pl-5 md:pl-6 pr-12 md:pr-20 text-gunmetal text-2xl leading-[110%] font-semibold"
                min="0"
              />
              <span className="text-blue text-2xl leading-none font-semibold absolute top-1/2 -translate-y-[14px] right-5 md:right-7">
                ft
              </span>
            </div>
          </div>

          <div className="w-1/2">
            <div className="h-[69px] rounded-xl border-electric-blue focus-within:border-blue border overflow-hidden relative">
              <input
                type="number"
                className="absolute w-full h-full focus:outline-none pl-5 md:pl-6 pr-12 md:pr-20 text-gunmetal text-2xl leading-[110%] font-semibold"
                min="0"
                value={inches}
                onChange={(e) => setInches(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <span className="text-blue text-2xl leading-none font-semibold absolute top-1/2 -translate-y-[14px] right-5 md:right-7">
                in
              </span>
            </div>
          </div>
        </div>

        <h4 className="text-electric-blue text-sm capitalize leading-[150%] mb-2 mt-4">
          weight
        </h4>
        <div className="flex items-center gap-x-6">
          <div className="w-1/2">
            <div className="h-[69px] rounded-xl border-electric-blue focus-within:border-blue border overflow-hidden relative">
              <input
                type="number"
                className="absolute w-full h-full focus:outline-none pl-5 md:pl-6 pr-12 md:pr-20 text-gunmetal text-2xl leading-[110%] font-semibold"
                min="0"
              />
              <span className="text-blue text-2xl leading-none font-semibold absolute top-1/2 -translate-y-[14px] right-5 md:right-7">
                st
              </span>
            </div>
          </div>

          <div className="w-1/2">
            <div className="h-[69px] rounded-xl border-electric-blue focus-within:border-blue border overflow-hidden relative">
              <input
                type="number"
                className="absolute w-full h-full focus:outline-none pl-5 md:pl-6 pr-12 md:pr-20 text-gunmetal text-2xl leading-[110%] font-semibold"
                min="0"
                value={pounds}
                onChange={(e) => setPounds(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <span className="text-blue text-2xl leading-none font-semibold absolute top-1/2 -translate-y-[14px] right-5 md:right-7">
                lbs
              </span>
            </div>
          </div>
        </div>
      </div>

      <div
        className="mt-8 bg-blue p-8 overflow-hidden"
        style={{
          borderTopLeftRadius: "16px",
          borderBottomLeftRadius: "16px",
          borderTopRightRadius: width >= 768 ? "100px" : "16px",
          borderBottomRightRadius: width >= 768 ? "100px" : "16px",
        }}
      >
        {result ? (
          <>
            <h4 className="text-base font-semibold leading-[150%] text-white">
              Your BMI is...
            </h4>
            <div className="flex flex-col gap-y-6 md:flex-row gap-x-28">
              <div className="text-white text-[64px] font-semibold leading-[110%]">
                {result}
              </div>
              <div className="text-white text-sm leading-[150%]">
                {category}
              </div>
            </div>
          </>
        ) : (
          <div className="flex flex-col gap-y-4">
            <h2 className="text-white font-semibold text-2xl leading-[110%]">
              Wellcome
            </h2>
            <p className="text-white text-sm leading-[150%]">
              Enter your height and weight and you'll see your BMI result here
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default ImperialCalculator;
