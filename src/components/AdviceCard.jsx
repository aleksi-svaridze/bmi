const AdviceCard = ({ title, description, iconBg, Icon }) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:gap-x-10 lg:gap-x-0 lg:flex-col lg:items-start">
      <div
        className={`flex items-center justify-center size-16 rounded-full shrink-0`}
        style={{ backgroundColor: iconBg }}
      >
        <Icon />
      </div>
      <div>
        <h2 className="text-2xl leading-[110%] font-semibold text-gunmetal mt-8 mb-6 md:mt-0 lg:mt-11">
          {title}
        </h2>
        <p className="text-base text-electric-blue leading-[150%]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default AdviceCard;
