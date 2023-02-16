import Search from "../Search/search";
import "./navbar.css";
import { Link } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  return (
    <Disclosure as="nav" className="navbar-item ">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex items-center px-2 lg:px-0">
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
                    <div className="rounded-md navbar-selected px-3 py-2 text-sm font-medium text-gray-900">
                      <Link to={`/`}>Dashboard</Link>
                    </div>
                    <div className="rounded-md px-3 py-2 text-sm font-medium navbar-hover text-gray-900">
                      <Link to={`/projects`}>Projects</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 justify-center lg:ml-6 lg:justify-end">
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
