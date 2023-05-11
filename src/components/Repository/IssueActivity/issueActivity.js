import { useState } from 'react'
import React from 'react'
import Chart from '../Chart/chart'
import { useEffect } from 'react'
// import axios from 'axios'
import LoadingSpinner from '../../Layouts/Loading/loading'
import NoData from '../../Layouts/NoData/noData'

/**
 * React component for Issue Activity. This component is used to display data to the user in a chart.
 *
 * @param props - React props to be applied to the component.
 *
 * @return { ReactElement } React element to display the chart on the screen or null if there is no data
 */
export default function IssueActivity(props) {
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
