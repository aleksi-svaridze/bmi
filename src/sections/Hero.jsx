import Calculator from "../components/Calculator";

export const Hero = () => {
  return (
    <div className="px-5 md:px-10 xl:px-0 container xl:max-w-[1160px] xl:flex xl:items-center xl:gap-x-32">
      <div className="text-center xl:text-left mb-11 xl:mb-0">
        <h1
          style={{ letterSpacing: "-2px" }}
          className="xl:w-[471px] font-semibold text-5xl xl:text-[64px] leading-[110%] text-gunmetal mb-[22px] md:mb-6 xl:mb-9"
        >
          Body Mass
          <br /> Index
          <br className="md:hidden" /> Calculator
        </h1>
        <p className="text-electric-blue text-base leading-[150%] xl:w-[440px]">
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
