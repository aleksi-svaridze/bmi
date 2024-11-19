export const Hero = () => {
  return (
    <div className="px-5 md:px-10 container lg:max-w-[1159px]">
      <div className="text-center lg:text-left">
        <h1 className="font-semibold text-5xl lg:text-[64px] leading-[110%] text-gunmetal">
          Body Mass
          <br /> Index
          <br className="md:hidden" /> Calculator
        </h1>
        <p>
          Better understand your weight in relation to your height using our
          body mass index (BM) calculator. While BMI is not the sole determinant
          of a healthy weight, it offers a valuable starting point to evaluate
          your overall health and well-being.
        </p>
      </div>
      <div className="bg-green-500 w-[564px] h-[448px] shrink-0"></div>
    </div>
  );
};
