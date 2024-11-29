const ImperialCalculator = () => {
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
              />
              <span className="text-blue text-2xl leading-none font-semibold absolute top-1/2 -translate-y-[14px] right-5 md:right-7">
                lbs
              </span>
            </div>
          </div>
        </div>
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
        <h4 className="text-base font-semibold leading-[150%] text-white">
          Your BMI is...
        </h4>
        <div className="flex gap-x-28">
          <div className="text-white text-[64px] font-semibold leading-[110%]">
            {23.4}
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

export default ImperialCalculator;
