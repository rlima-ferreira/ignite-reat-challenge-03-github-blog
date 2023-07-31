import EffectRectLeft from '../assets/effect-rect-left.svg';
import EffectRectRight from '../assets/effect-rect-right.svg';
import Logo from '../assets/logo.svg';

export default function Header() {
  return (
    <header className="flex flex-col justify-center items-center h-[18.5rem] w-full relative bg-banner bg-gradient-to-b from-base-profile via-[#14589C] via-14% to-base-background">
      <div className="left-0 absolute">
        <img src={EffectRectLeft} alt="" className="w-[25rem]" />
      </div>
      <img src={Logo} alt="" />
      <div className="right-0 absolute">
        <img src={EffectRectRight} alt="" className="w-[23.1875rem]" />
      </div>
    </header>
  );
}
