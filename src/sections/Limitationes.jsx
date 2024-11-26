export const Limitations = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-y-14 lg:gap-y-0 lg:gap-x-[130px] px-5 md:px-10 container lg:max-w-[1159px] mb-52">
      <div className="text-center lg:text-left lg:w-1/2">
        <h2 className="font-semibold text-[32px] lg:text-5xl leading-[110%] text-gunmetal mb-8">
          Limitations of BMI
        </h2>
        <p className="text-base leading-[150%] text-electric-blue">
          Although BMI is often a practical indicator of healthy weight, it is
          not suited for every person. Specific groups should carefully consider
          their BMI outcomes, and in certain cases, the measurement may not be
          beneficial to use.
        </p>
      </div>

      <div className="hidden lg:block w-1/2">
        <div
          className="w-full lg:w-[365px] h-[232px] rounded-2xl p-8"
          style={{ boxShadow: "16px 32px 56px 0 rgba( 143, 174, 207, .25)" }}
        >
          card
        </div>
      </div>
    </div>
  );
};
