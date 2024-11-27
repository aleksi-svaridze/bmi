const LimitationCard = ({ title, Icon, body }) => {
  return (
    <div
      className="w-full lg:w-[365px] md:h-[232px] lg:h-auto rounded-2xl p-8 bg-white"
      style={{ boxShadow: "16px 32px 56px 0 rgba( 143, 174, 207, 0.25)" }}
    >
      <h3 className="text-gunmetal text-xl flex gap-x-4 items-center mb-4 capitalize font-semibold leading-[110%]">
        <Icon className="size-8" /> {title}
      </h3>
      <p className="text-base text-electric-blue leading-[150%]">{body}</p>
    </div>
  );
};

export default LimitationCard;
