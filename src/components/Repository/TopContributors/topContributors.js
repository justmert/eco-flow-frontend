import { useState } from 'react'
import React from 'react'
// import Chart from '../Chart/chart'
import { useEffect } from 'react'
// import axios from 'axios'
import LoadingSpinner from '../../Layouts/Loading/loading'
import './topContributors.css'
import NoData from '../../Layouts/NoData/noData'

export default function TopContributors(props) {
  const [option, setOption] = useState(null)
  useEffect(() => {
    if (props.data === undefined) {
      setOption(
        <div>
          <LoadingSpinner />{' '}
        </div>
      )
      return
    } else if (props.data === null) {
      setOption(
        <div>
          <NoData />{' '}
        </div>
      )
      return
    } else {
      const editedData = []
      for (let i = 0; i < props.data.length; i++) {
        editedData.push(
          <a
            className="text-gray-300 hover:text-gray-200 "
            href={props.data[i].html_url}
            target="_blank"
            rel="noreferrer"
            key={i}
          >
            <div
              key={i}
              //    pl-4 pr-6
              className="flex py-3 selective-border mt-2 items-center justify-between bg-gray-500 rounded-md"
            >
              <div className="flex items-center">
                <img
                  className="h-12 w-12 mr-3 rounded-full"
                  src={props.data[i] ? props.data[i].avatar_url : null}
                  style={{
                    minWidth: '48px',
                    minHeight: '48px',
                    maxWidth: '48px',
                    maxHeight: '48px',
                    marginRight: '20px',
                  }}
                  alt=""
                />
                <div>
                  <h5 className="text-sm line-clamp-1 text-gray-400 font-medium ">
                    {props.data[i] ? props.data[i].login : null}
                  </h5>
                  <span className="text-xs font-medium line-clamp-1 text-gray-400">
                    {props.data[i].contributions} commits
                  </span>
                </div>
              </div>
              <div></div>
            </div>
          </a>
        )
      }
      setOption(editedData)
    }
  }, [props.data])

  return <div>{option}</div>
}
