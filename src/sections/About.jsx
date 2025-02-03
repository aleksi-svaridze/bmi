import PersonImage from "../images/about/person.png";
import TopLine from "../images/top_line.png";

export const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:gap-x-[74px] lg:gap-x-[130px] gap-y-12 md:gap-y-0 lg:max-w-[1160px] lg:container relative">
      <img
        src={TopLine}
        alt=""
        className="hidden lg:block absolute right-16 -top-[56px] h-[200px] w-[85px]"
      />
      <div className="h-[355px] lg:h-[533px] lg:rounded-b-[32px] overflow-hidden relative w-full">
        <img
          src={PersonImage}
          className="w-[311px] lg:w-[468px] h-auto absolute bottom-0 z-10 left-1/2 -translate-x-1/2 md:left-0 md:-translate-x-0 lg:left-1/2 lg:-translate-x-1/2"
          alt=""
        />
        <div className="h-[258px] lg:h-[388px] w-full rounded-[32px] md:rounded-l-none md:rounded-r-[32px] lg:rounded-l-[32px] bg-[#E7F5FE] absolute bottom-0 z-0"></div>
      </div>

      <div className="flex flex-col gap-y-8 px-5 md:px-0 md:pr-10 container lg:pt-32">
        <h2 className="font-semibold text-[32px] lg:text-5xl leading-[110%] text-gunmetal">
          What your BMI result means
        </h2>
        <p className="text-base leading-[150%] text-electric-blue">
          A BMI range of 18.5 to 24.9 is considered a 'healthy weight.'
          Maintaining a healthy weight may lower your chances of experiencing
          health issues later on, such as obesity and type 2 diabetes. Aim for a
          nutritious diet with reduced fat and sugar content, incorporating
          ample fruits and vegetables. Additionally, strive for regular physical
          activity, ideally about 30 minutes daily for five days a week.
        </p>
      </div>
    </div>
  );
};
