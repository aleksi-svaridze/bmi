import { useState } from "react";
import { Gender, Age, Muscle, Pregnancy, Race } from "../images/Icons";
import LimitationCard from "../components/LimitationCard";
export const Limitations = () => {
  const [cardData] = useState([
    {
      id: 1,
      title: "Gender",
      icon: Gender,
      body: "The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI.",
    },
    {
      id: 2,
      title: "age",
      icon: Age,
      body: "In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content.",
    },
    {
      id: 3,
      title: "muscle",
      icon: Muscle,
      body: "BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat.",
    },
    {
      id: 4,
      title: "Pregnancy",
      icon: Pregnancy,
      body: "Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child.",
    },
    {
      id: 5,
      title: "race",
      icon: Race,
      body: "Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse.",
    },
  ]);
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-y-14 lg:gap-y-0 lg:gap-x-[130px] px-5 md:px-10 container lg:max-w-[1159px] mb-4 md:mb-0">
        <div className="text-center lg:text-left lg:w-1/2">
          <h2 className="font-semibold text-[32px] lg:text-5xl leading-[110%] text-gunmetal mb-8">
            Limitations of BMI
          </h2>
          <p className="text-base leading-[150%] text-electric-blue">
            Although BMI is often a practical indicator of healthy weight, it is
            not suited for every person. Specific groups should carefully
            consider their BMI outcomes, and in certain cases, the measurement
            may not be beneficial to use.
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
      {/* Mobile */}
      <div className="flex flex-col gap-y-4 px-5 container">
        {cardData.map((card) => (
          <LimitationCard
            title={card.title}
            Icon={card.icon}
            key={card.id}
            body={card.body}
          />
        ))}
      </div>
    </>
  );
};
