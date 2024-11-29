import { useState } from "react";

const MetricCalculator = () => {
  const [metricValue, setMetricValue] = useState({ cm: 0, kg: 0 });
  const [result, setResult] = useState();

  console.log(metricValue);

  const handleResult = (metricValue) => {
    let result = (Number(metricValue.kg) / Number(metricValue.cm ** 2)) * 10000;
    setResult(result.toFixed(1));
  };
  return (
    <>
      <form
        onSubmit={handleResult}
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
              velue={metricValue.cm}
              onChange={(e) =>
                setMetricValue({ cm: e.target.value, kg: metricValue.kg })
              }
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
              velue={metricValue.kg}
              onChange={(e) =>
                handleResult({ cm: metricValue.cm, kg: e.target.value })
              }
            />
            <span className="text-blue text-2xl leading-none font-semibold absolute top-1/2 -translate-y-[14px] right-7">
              kg
            </span>
          </div>
        </div>
      </form>

      <div
        className="mt-8 bg-blue p-8"
        style={{
          borderTopLeftRadius: "16px",
          borderBottomLeftRadius: "16px",
          borderTopRightRadius: "100px",
          borderBottomRightRadius: "100px",
        }}
      >
        <h4 className="text-base font-semibold leading-[150%] text-white">
          Your BMI is...
        </h4>
        <div className="flex gap-x-28">
          <div className="text-white text-[64px] font-semibold leading-[110%]">
            {result}
          </div>
          <div className="text-white text-sm leading-[150%]">
            Your BMI suggests you're a healthy weight. Your ideal weight is
            between 63.3kgs - 85.2kgs.
          </div>
        </div>
      </div>
    </>
  );
};

export default MetricCalculator;
