import Logo from "/src/assets/logo.svg?react";
import { Link } from "react-router-dom";

const Header = () => (
  <header className="flex items-center justify-between mx-16 py-2">
    <Logo />
    <nav className="mt-3 font-pangram font-heading text-primary">
      <Link className="mr-10">Work</Link>
      <Link className="mr-10">Musings</Link>
      <Link>Contact</Link>
    </nav>
  </header>
);

export { Header };
