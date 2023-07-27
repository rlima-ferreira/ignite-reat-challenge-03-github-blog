import Logo from '../assets/logo.svg';

export default function Header() {
  return (
    <header className="flex flex-col justify-center items-center h-[18.5rem] w-full relative bg-banner bg-gradient-to-r fron-blue-500 from-14% via-sky-500 via-34% to-green-400 to-100%">
      <img src={Logo} alt="" />
    </header>
  );
}
