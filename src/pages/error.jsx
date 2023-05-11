import '../styles/error.css'
import { Link } from 'react-router-dom'
import Footer from '../components/Layouts/Footer/footer'

export default function ErrorPage() {
  return (
    <div>
      <div className="page-center flex-col">
        <img
          src="https://static-assets.lenster.xyz/images/gifs/nyan-cat.gif"
          alt="Nyan Cat"
          className="h-60"
          height={240}
        />
        <div className="py-10 text-center">
          <h1 className="mb-4 text-3xl font-bold">Oops, Lost‽</h1>
          <div className="mb-4">This page could not be found.</div>
          {/* <a href="/"> */}
          <Link to={`/`}>
            <button className="bg-gray-300 bg-opacity-30 hover:bg-brand-600 border-brand-600 focus:ring-brand-400 border text-white px-4 py-1.5 inline-flex items-center space-x-1.5 rounded-lg font-bold shadow-sm outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-offset-1 disabled:opacity-50 item-center mx-auto flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="rgb(61 72 91)"
                aria-hidden="true"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              <div className="text-gray-400">Go to home</div>
            </button>
            {/* </a> */}
          </Link>
        </div>
        <div className="absolute bottom-0 left-0 right-0 flex justify-center content-center">
          <Footer />
        </div>
      </div>
    </div>
  )
}
