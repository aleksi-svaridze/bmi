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
      <div className="flex flex-col lg:flex-row gap-y-14 lg:gap-y-0 lg:gap-x-[130px] px-5 md:px-10 container lg:max-w-[1159px] mb-14 lg:mb-8">
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
          {cardData.slice(0, 1).map((card) => (
            <LimitationCard
              title={card.title}
              Icon={card.icon}
              key={card.id}
              body={card.body}
            />
          ))}
        </div>
      </div>
      {/* Mobile + Tablet*/}
      <div className="flex lg:hidden flex-col md:flex-row md:gap-x-4 md:justify-center md:flex-wrap gap-y-4 md:gap-y-6 px-5 container">
        {cardData &&
          cardData.map((card) => (
            <div className="md:w-[48%]" key={card.id}>
              <LimitationCard
                title={card.title}
                Icon={card.icon}
                body={card.body}
              />
            </div>
          ))}
      </div>
      {/* Desktop */}
      <div className="hidden lg:flex gap-x-8 justify-end px-10 container max-w-[1159px] mb-6">
        {cardData &&
          cardData
            .slice(1, 3)
            .map((card) => (
              <LimitationCard
                title={card.title}
                Icon={card.icon}
                key={card.id}
                body={card.body}
              />
            ))}
      </div>

      <div className="hidden lg:flex gap-x-8 justify-center px-10 container max-w-[1159px]">
        {cardData &&
          cardData
            .slice(3, 5)
            .map((card) => (
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
