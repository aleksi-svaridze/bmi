import { useState } from "react";
import AdviceCard from "../components/AdviceCard";

import { Moon } from "../images/Icons";
import { Exercise } from "../images/Icons";
import { Food } from "../images/Icons";

export const Advices = () => {
  const [data] = useState([
    {
      id: 1,
      title: "Healthy eating",
      iconBg: "rgba(242, 30, 132, .15)",
      Icon: Food,
      description:
        "Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood.",
    },
    {
      id: 2,
      title: "Regular exercise",
      iconBg: "rgba(246, 145, 52, .15)",
      Icon: Exercise,
      description:
        "Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity.",
    },
    {
      id: 3,
      title: "Adequate sleep",
      iconBg: "rgba(34, 193, 193, .15)",
      Icon: Moon,
      description:
        "Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation.",
    },
  ]);
  return (
    <div className="flex flex-col lg:flex-row gap-y-10 lg:gap-y-0 lg:gap-x-6 my-[76px] py-14 md:py-[60px] lg:py-[72px] px-5 md:px-10 lg:px-0 container lg:max-w-[1160px]">
      {data.map((item) => (
        <AdviceCard
          key={item.id}
          title={item.title}
          description={item.description}
          iconBg={item.iconBg}
          Icon={item.Icon}
        />
      ))}
    </div>
  );
};
