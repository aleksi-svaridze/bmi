import { GameIcon } from "../images/Icons";

const Header = () => {
  return (
    <header className="px-5 md:px-10 flex items-center justify-center lg:block container lg:max-w-[1159px] h-24 md:h-[112px] lg:h-[181px] lg:pt-[74px] z-10">
      <GameIcon className="size-10 lg:size-16" />
    </header>
  );
};

export default Header;
