import { useState } from "react";
import ImperialCalculator from "./ImperialCalculator";
import MetricCalculator from "./MetricCalculator";

const Calculator = () => {
  let [radioButtonValue, setRadioButtonValue] = useState("metric");
  let [checked, setChecked] = useState(true);

  const handleRadioValue = (e) => {
    setRadioButtonValue(e.target.value);
    setChecked(!checked);
  };

  return (
    <div
      className="bg-white w-full xl:w-[564px] shrink-0 rounded-2xl p-8"
      style={{ boxShadow: "16px 32px 56px 0 rgba( 143, 174, 207, 0.25)" }}
    >
      <h4 className="text-gunmetal text-2xl font-semibold leading-[110%]">
        Enter your details below
      </h4>

      <div className="flex items-center my-8 gap-x-6">
        <label className="flex items-center gap-x-4 w-1/2 cursor-pointer">
          <input
            type="radio"
            name="bmi"
            value="metric"
            checked={checked}
            onChange={(e) => handleRadioValue(e)}
          />
          <span className="text-gunmetal text-base font-semibold capitalize leading-[150%]">
            metric
          </span>
        </label>

        <label className="flex items-center gap-x-4 w-1/2 cursor-pointer">
          <input
            type="radio"
            name="bmi"
            value="imperial"
            checked={!checked}
            onChange={(e) => handleRadioValue(e)}
          />
          <span className="text-gunmetal text-base font-semibold capitalize leading-[150%]">
            imperial
          </span>
        </label>
      </div>

      {radioButtonValue === "metric" ? (
        <MetricCalculator />
      ) : (
        <ImperialCalculator />
      )}
    </div>
  );
};

export default Calculator;
