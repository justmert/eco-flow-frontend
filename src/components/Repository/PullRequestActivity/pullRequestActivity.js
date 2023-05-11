import { useState } from 'react'
import React from 'react'
import Chart from '../Chart/chart'
import { useEffect } from 'react'
// import axios from 'axios'
import LoadingSpinner from '../../Layouts/Loading/loading'
import NoData from '../../Layouts/NoData/noData'

/**
 * Component that manages pull request activity. This component is used to show and hide chart options and tooltip
 *
 * @param props - props to be passed to component
 *
 * @return { ReactElement } React element to be rendered on the web page with data set to the props.
 */
export default function PullRequestActivity(props) {
  const [option, setOption] = useState(null)
  useEffect(() => {
    // Set the chart options.
    if (props.data === undefined) {
      setOption(
        <div>
          <LoadingSpinner />{' '}
        </div>
      )
      return
      // Set the chart option to tooltip
    } else if (props.data === null) {
      setOption(
        <div>
          <NoData />{' '}
        </div>
      )
      return
    } else {
      props.data.tooltip = {
        trigger: 'axis',
      }
      setOption(<Chart option={props.data} />)
    }
  }, [props.data])

  return <div>{option}</div>
}
