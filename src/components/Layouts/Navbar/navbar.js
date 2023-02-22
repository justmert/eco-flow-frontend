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

export default function Navbar() {
  // const [showForm, setShowForm] = useState(false);
  return (
    <Disclosure as="nav" className="navbar-item ">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex items-center px-2">
                <div className="flex-shrink-0">
                  <img
                    className="block h-8 w-auto lg:hidden"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="yuugenlabs"
                  />
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="yuugenlabs"
                  />
                </div>
                <div className="hidden lg:ml-6 lg:block">
                  <div className="flex space-x-4">
                    <NavLink to="/" activeclassname="active">
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

                        {/* <svg
                          className="ml-1"
                          width={16}
                          height={16}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                          />
                        </svg> */}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 justify-center lg:ml-6 lg:justify-end">
                {/* <ProjectForm open={showForm} setOpen={setShowForm} />
                <button
                  onClick={() => {
                    setShowForm(!showForm);
                  }}
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
                </button> */}

                {/* <TForm /> */}
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

                <div className="w-full max-w-lg">
                  <Search />
                </div>
              </div>
              <div className="flex lg:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
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
              <Link to={`/`}>
                <Disclosure.Button as="a">
                  <div className="block rounded-md navbar-selected px-3 py-2 text-sm font-medium text-gray-900">
                    Dashboard
                  </div>
                </Disclosure.Button>
              </Link>
              <Link to={`/projects`}>
                <Disclosure.Button as="a">
                  <div className="block rounded-md px-3 py-2 text-sm font-medium navbar-hover text-gray-900">
                    Projects
                  </div>
                </Disclosure.Button>
              </Link>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
