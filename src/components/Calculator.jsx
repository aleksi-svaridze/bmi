import ImperialCalculator from "./ImperialCalculator";
import MetricCalculator from "./MetricCalculator";

const Calculator = () => {
  let bmiOutputResult = "metric";

  console.log(bmiOutputResult);

  return (
    <div
      className="bg-white w-full lg:w-[564px] shrink-0 rounded-2xl p-8"
      style={{ boxShadow: "16px 32px 56px 0 rgba( 143, 174, 207, 0.25)" }}
    >
      <h4 className="text-gunmetal text-2xl font-semibold leading-[110%]">
        Enter your details below
      </h4>

      <div className="flex items-center my-8 gap-x-6">
        <label className="flex items-center gap-x-4 w-1/2 cursor-pointer">
          <input type="radio" name="bmi" value="metric" className="size-8" />
          <span className="text-gunmetal text-base font-semibold capitalize leading-[150%]">
            metric
          </span>
        </label>

        <label className="flex items-center gap-x-4 w-1/2 cursor-pointer">
          <input type="radio" name="bmi" value="imperial" className="size-8" />
          <span className="text-gunmetal text-base font-semibold capitalize leading-[150%]">
            imperial
          </span>
        </label>
      </div>

      <div>
        {bmiOutputResult === "metric" ? (
          <MetricCalculator />
        ) : (
          <ImperialCalculator />
        )}
      </div>

      <div
        className="mt-8 bg-blue p-8"
        style={{
          borderTopLeftRadius: "16px",
          borderBottomLeftRadius: "16px",
          borderTopRightRadius: "100px",
          borderBottomRightRadius: "100px",
        }}
      >
        {bmiOutputResult === "metric" ? (
          <div>Metric</div>
        ) : bmiOutputResult === "imperial" ? (
          <div>imperial</div>
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
    </div>
  );
};

export default Calculator;
