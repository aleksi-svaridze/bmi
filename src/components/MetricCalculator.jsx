const MetricCalculator = () => {
  return (
    <div className="flex flex-col gap-y-4 md:gap-y-0 md:flex-row md:items-center gap-x-6">
      <div className="md:w-1/2">
        <label className="text-electric-blue text-sm capitalize leading-[150%] mb-2 block">
          height
        </label>
        <div className="h-[69px] rounded-xl border-electric-blue focus-within:border-blue border overflow-hidden relative">
          <input
            type="number"
            className="absolute w-full h-full focus:outline-none pl-6 pr-20 text-gunmetal text-2xl leading-[110%] font-semibold"
            min="0"
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
          />
          <span className="text-blue text-2xl leading-none font-semibold absolute top-1/2 -translate-y-[14px] right-7">
            kg
          </span>
        </div>
      </div>
    </div>
  );
};

export default MetricCalculator;
