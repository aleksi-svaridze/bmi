const ImperialCalculator = () => {
  return (
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
  );
};

export default ImperialCalculator;
