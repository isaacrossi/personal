import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="pt-8 bg-primary pb-10 mt-40">
    <div className="container mx-auto ">
      <div className="mx-16 grid grid-cols-12 text-white">
        <div className="col-span-4 w-80">
          <p className="font-heading">Isaac Rossi</p>
          <p>
            Frontend Developer, based in Sydney. Ready for work. All rights
            reserved.
          </p>
        </div>
        <NavWithThreeLinks title1="Work" title2="Musings" title3="Contact" />
        <NavWithThreeLinks title1="Github" title2="LinkedIn" title3="x" />
      </div>
    </div>
  </footer>
);

const NavWithThreeLinks = ({ title1, title2, title3 }) => (
  <nav className="col-span-4 flex flex-col">
    <Link>{title1}</Link>
    <Link>{title2}</Link>
    <Link>{title3}</Link>
  </nav>
);

export { Footer };
