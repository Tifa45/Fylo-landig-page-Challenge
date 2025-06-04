import { navLinks } from "../constants/constant";

function NavBar() {
  return (
    <div className="flex justify-between items-center px-6 pt-4 md:px-6 md:pt-8 bg-intro ">
      <div className=" flex justify-items-start ">
        <img
          src="./logo.svg"
          alt="logo"
          className="min-w-[50px] w-[70px] md:w-auto"
        />
      </div>
      <div className="">
        <ul className=" list-none flex items-center justify-end gap-4 md:gap-8">
          {navLinks.map((link) => (
            <li key={link.title}>
              <a href={link.ref}>
                {" "}
                <p className="navlink hover-underline-animation">
                  {link.title}
                </p>{" "}
              </a>{" "}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
