import { useState } from "react";
import { useWindowSize } from "usehooks-ts";

const MetricCalculator = () => {
  const { width } = useWindowSize();
  let [result, setResult] = useState();
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [category, setCategory] = useState("");

  const handleResult = (e) => {
    e.preventDefault();
    let heightInMeters = height / 100;
    result = (weight / heightInMeters ** 2).toFixed(1);
    setResult(result);

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

    if (e.key === "Enter") {
      document.getElementById("myForm").submit(); // Programmatically submit the form
    }
  };

  console.log("Metric", width);
  return (
    <>
      <form
        id="myForm"
        onSubmit={(e) => handleResult(e)}
        className="flex flex-col gap-y-4 md:gap-y-0 md:flex-row md:items-center gap-x-6"
      >
        <div className="md:w-1/2">
          <label className="text-electric-blue text-sm capitalize leading-[150%] mb-2 block">
            height
          </label>
          <div className="h-[69px] rounded-xl border-electric-blue focus-within:border-blue border overflow-hidden relative">
            <input
              type="number"
              className="absolute w-full h-full focus:outline-none pl-6 pr-20 text-gunmetal text-2xl leading-[110%] font-semibold"
              min="0"
              velue={height}
              onChange={(e) => setHeight(e.target.value)}
            />
            <span className="text-blue text-2xl leading-none font-semibold absolute top-1/2 -translate-y-[14px] right-7">
              cm
            </span>
          </div>
        </div>

        <div className="md:w-1/2">
          <label className="text-electric-blue text-sm capitalize leading-[150%] mb-2 block">
            Weight
          </label>
          <div className="h-[69px] rounded-xl border-electric-blue focus-within:border-blue border overflow-hidden relative">
            <input
              type="number"
              className="absolute w-full h-full focus:outline-none pl-6 pr-20 text-gunmetal text-2xl leading-[110%] font-semibold"
              min="0"
              velue={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
            <span className="text-blue text-2xl leading-none font-semibold absolute top-1/2 -translate-y-[14px] right-7">
              kg
            </span>
          </div>
        </div>

        <button className="hidden" type="submit">
          calculate
        </button>
      </form>

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

export default MetricCalculator;
