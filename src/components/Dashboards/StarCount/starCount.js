// import { useState } from 'react'
import React from 'react'
import { useEffect } from 'react'
import './starCount.css'
import './star'
import renderStar from './star'
/**
 * React component for StarCount chart. Used to display stars in a bar chart. It is a flexible component with CSS styling and the ability to pass data to the star renderer.
 *
 * @param props - Properties to provide to the component. Should contain chartHeader and data.
 *
 * @return { JSX. Element } React element for StarCount chart with data rendered to it via renderStar
 */
export default function StarCount(props) {
  //   const [chart, setChart] = useState(null);
  useEffect(() => {
    // Render star if data is not set
    if (props.data !== undefined) {
      renderStar()
    }
  }, [props.data])

  return (
    <div className="flex flex-col p-6 bg-gray-500 rounded-xl top-cont-container">
      <div className="flex flex-wrap mb-4 items-center justify-between -m-2">
        <div className="w-auto p-2">
          <h3 className="text-lg mb-1 text-gray-400 font-medium">
            {props.chartHeader}
          </h3>
        </div>

        <p className="flex w-full text-xl text-gray-400 font-medium text-center justify-center items-center mt-10">
          {props.data} STARS
        </p>
        <p className="flex w-full text-sm font-thin text-gray-400 italic text-center justify-center items-center mt-1">
          {`click the star :)`}
        </p>
      </div>
      <div className="p-12 items-center justify-center flex flex-grow">
        <div className="p-4 animation-pulse-star" id="shape-container">
          {props.data && (
            <svg className="absolute overflow-visible">
              <path id="shape" />
            </svg>
          )}
        </div>
      </div>
    </div>
  )
}
