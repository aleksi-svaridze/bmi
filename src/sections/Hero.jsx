import Calculator from "../components/Calculator";

export const Hero = () => {
  return (
    <div className="px-5 md:px-10 container lg:max-w-[1159px] lg:flex lg:items-center lg:gap-x-16">
      <div className="text-center lg:text-left mb-11 lg:mb-0">
        <h1 className="font-semibold text-5xl lg:text-[64px] leading-[110%] text-gunmetal mb-[22px] md:mb-6 lg:mb-9">
          Body Mass
          <br /> Index
          <br className="md:hidden" /> Calculator
        </h1>
        <p className="text-electric-blue text-base leading-[150%]">
          Better understand your weight in relation to your height using our
          body mass index (BM) calculator. While BMI is not the sole determinant
          of a healthy weight, it offers a valuable starting point to evaluate
          your overall health and well-being.
        </p>
      </div>
      <Calculator />
    </div>
  );
};
