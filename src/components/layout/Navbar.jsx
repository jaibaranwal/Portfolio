import { NAV_LINKS } from "../../utils/constants";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/5 border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide text-white">
          Jai<span className="text-blue-500">.</span>
        </h1>

        {/* Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((item) => (
            <li
              key={item}
              className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Resume Button */}
        <button className="hidden md:block bg-blue-600 hover:bg-blue-700 transition-all duration-300 px-5 py-2 rounded-full text-white font-medium">
          Resume
        </button>

      </div>
    </nav>
  );
}

export default Navbar;