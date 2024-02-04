import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="pt-8 bg-primary pb-10">
    <div className="container mx-auto grid grid-cols-12 text-white">
      <div className="col-span-4 w-80">
        <p className="font-heading">Isaac Rossi</p>
        <p>
          Frontend Developer, based in Sydney. Ready for work. All rights
          reserved.
        </p>
      </div>
      <nav className="col-span-4 flex flex-col">
        <Link>Work</Link>
        <Link>Musings</Link>
        <Link>Contact</Link>
      </nav>
      <nav className="col-span-4 flex flex-col">
        <Link>Github</Link>
        <Link>LinkedIn</Link>
        <Link>x</Link>
      </nav>
    </div>
  </footer>
);

export { Footer };
