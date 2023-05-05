import Search from "../Search/search";
import "./navbar.css";
import { Link } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom"; // import the NavLink component
import gitbubIcon2 from "../../../assets/github2.svg";
import { useState } from "react";
import { SliderButton } from "@typeform/embed-react";

/**
* Renders a Navbar to be used in navbars. It is the top level component of the navbar.
* 
* 
* @return { JSX } The HTML to be rendered in the navbar. This must be wrapped in a div
*/
export default function Navbar() {
  return (
    <Disclosure as="nav" className="navbar-item ">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl py-3">
            <div className="relative flex flex-row h-16 items-center justify-between px-4">
              <div className="flex items-center">
                <div className="flex flex-row items-start justify-start content-start place-content-start">
                  <Link to="/" activeclassname="">
                    <div className="flex-col inline-block content-start items-start justify-start object-left mr-2">
                      <img
                        className="relative h-12 shrink-0 bg-transparent inline-block object-left"
                        src={require(`../../../assets/favicon.png`)}
                        style={{ backgroundColor: "transparent" }}
                        alt="logo"
                      />
                    </div>
                    <div className="flex-col inline-block mr-2">
                      <img
                        width={40}
                        className=" h-14 shrink-0 bg-transparent min-w-full w-full md:inline-block hidden"
                        style={{ backgroundColor: "transparent" }}
                        src={require(`../../../assets/icons/${process.env.REACT_APP_LOGO}.png`)}
                        alt="logo"
                      />
                    </div>
                  </Link>
                </div>

                <div className="hidden lg:ml-6 lg:block">
                  <div className="flex space-x-4">
                    <NavLink to="/" activeclassname="">
                      <div className="rounded-md navbar-hover px-3 py-2 text-sm font-medium text-gray-900">
                        {/* <Link to={`/`}>Dashboard</Link> */}
                        Dashboard
                      </div>
                    </NavLink>
                    <NavLink activeclassname="active" to="/projects">
                      <div className="rounded-md px-3 py-2 navbar-hover text-sm font-medium text-gray-900">
                        Projects
                      </div>
                    </NavLink>
                    <div className="rounded-md px-3 pt-2 navbar-hover text-sm font-medium text-gray-900">
                      <a
                        className="inline-flex"
                        target="_blank"
                        rel="noreferrer"
                        href="https://github.com/justmert/metapool_frontend"
                      >
                        <img width={20} height={20} src={gitbubIcon2}></img>
                        {/* <img width={16} height={16} src={github2} /> */}
                        <span className="pl-2 mr-1">Github</span>
                        <svg
                          width={14}
                          height={14}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 16"
                          strokeWidth="2"
                          stroke="currentColor"
                          className=""
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 justify-center lg:ml-6 lg:justify-end">
                {process.env.REACT_APP_TYPEFORM_ID ? (
                  <SliderButton
                    id={process.env.REACT_APP_TYPEFORM_ID}
                    className="hidden lg:flex rounded-md px-3 mr-2 justify-center content-center items-center place-content-center navbar-hover text-sm font-medium text-gray-900"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                    <span className="pl-2 mr-1">Submit</span>
                  </SliderButton>
                ):
                
              (                  <button
                id={process.env.REACT_APP_TYPEFORM_ID}
                className="hidden lg:flex rounded-md px-3 mr-2 justify-center content-center items-center place-content-center navbar-hover text-sm font-medium text-gray-900"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
                <span className="pl-2 mr-1">Submit</span>
              </button>
)}

                <div className="w-full max-w-lg">
                  <Search />
                </div>
              </div>
              <div className="flex lg:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-300">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              <NavLink to="/" activeClassName="active">
                <Disclosure.Button as="a">
                  <div className="block navbar-hover rounded-md px-3 py-2 text-sm font-medium text-gray-900 ">
                    Dashboard
                  </div>
                </Disclosure.Button>
              </NavLink>
              <NavLink to="/projects" activeClassName="active">
                <Disclosure.Button as="a">
                  <div className="block rounded-md navbar-hover px-3 py-2 text-sm font-medium text-gray-900">
                    Projects
                  </div>
                </Disclosure.Button>
              </NavLink>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
