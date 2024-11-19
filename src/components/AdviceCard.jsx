const AdviceCard = ({ title, description, iconBg, Icon }) => {
  return (
    <div>
      <div
        className={`bg-[${iconBg}] flex items-center justify-center opacity-15 size-16 rounded-full`}
      >
        <Icon />
      </div>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default AdviceCard;
