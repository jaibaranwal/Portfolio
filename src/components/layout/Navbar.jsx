import { NAV_LINKS } from "../../utils/constants";

function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="mx-auto mt-5 flex w-[92%] max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-xl">

        {/* Logo */}
        <h1 className="font-['Space_Grotesk'] text-2xl font-bold tracking-wide">
          JB<span className="text-sky-400">.</span>
        </h1>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li
              key={link.id}
              className="cursor-pointer text-slate-300 transition duration-300 hover:text-sky-400"
            >
              {link.title}
            </li>
          ))}
        </ul>

        {/* Resume Button */}
        <button className="hidden rounded-full bg-sky-500 px-5 py-2 font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-sky-400 md:block">
          Resume
        </button>
      </nav>
    </header>
  );
}

export default Navbar;