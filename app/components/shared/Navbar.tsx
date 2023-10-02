"use client";

import Link from "next/link";

export const Navbar = () => {
  const handleToggle = () => {
    const navbar = document.getElementById("navbar-sm");
    navbar?.classList.contains("hidden")
      ? navbar?.classList.remove("hidden")
      : navbar?.classList.add("hidden");
  };
  return (
    <nav className="bg-light py-4 px-3 shadow-md sticky top-0 z-50 w-full">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between">
          <a className="flex items-center" href="#">
            <img
              src="https://www.kadencewp.com/wp-content/uploads/2020/10/alogo-2.png"
              className="h-8 mr-3"
              alt="Flowbite Logo"
            />
            <span className="hidden md:inline-block">
              Invitaciones con estilo
            </span>
          </a>
          <button
            onClick={handleToggle}
            className="md:hidden block"
            type="button"
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <ul id="navbar-sm" className="py-1 mt-3 md:mt-0 text-center hidden rounded md:flex md:w-auto w-full ease-in-out">
            <li className="hover:bg-secondary/80 md:bg-light md:hover:text-primary md:hover:bg-light p-1 m-1 rounded">
              Home
            </li>
            <li className="hover:bg-secondary/80 md:hover:text-primary md:hover:bg-light p-1 m-1 rounded">
              Home
            </li>
            <li className="hover:bg-secondary/80 md:hover:text-primary md:hover:bg-light p-1 m-1 rounded">
              Home
            </li>
            <li className="hover:bg-secondary/80 md:hover:text-primary md:hover:bg-light p-1 m-1 rounded">
              <Link href="invitacion">Invitacion</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
