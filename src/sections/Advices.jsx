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
      iconBg: "#F21E84",
      Icon: Food,
      description:
        "Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood.",
    },
    {
      id: 2,
      title: "Regular exercise",
      iconBg: "#F69134",
      Icon: Exercise,
      description:
        "Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity.",
    },
    {
      id: 3,
      title: "Adequate sleep",
      iconBg: "#22C1C1",
      Icon: Moon,
      description:
        "Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation.",
    },
  ]);
  return (
    <div>
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
