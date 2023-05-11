import { useState } from 'react'
import React from 'react'
import Chart from '../Chart/chart'
import { useEffect } from 'react'
// import axios from 'axios'
import * as echarts from 'echarts/core'
import LoadingSpinner from '../../Layouts/Loading/loading'
import NoData from '../../Layouts/NoData/noData'

/**
 * React component for commit history. Used to show / hides chart history in an interactive window. It is called by a user interactively and should not be used directly by end users.
 *
 * @param props - props to pass to component. Must contain data series dataZoom etc.
 *
 * @return React component for commit history in an interactive window. This component can be used to navigate to history in a web browser
 */
export default function CommitHistory(props) {
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
      // Set the chart data.
    } else if (props.data === null) {
      setOption(
        <div>
          <NoData />{' '}
        </div>
      )
      return
    } else {
      props.data.dataZoom = [
        {
          type: 'slider',
          start: 50,
          bottom: 10,
          xAxisIndex: 0,
          end: 100,
        },
      ]

      props.data.tooltip = {
        trigger: 'axis',
      }

      // This method is used to create series of series
      for (let i = 0; i < props.data.series.length; i++) {
        props.data.series[i].showSymbol = false
        props.data.series[i].smooth = true
        props.data.series[i].itemStyle = {
          color: '#5C88DB',
        }
        props.data.series[i].areaStyle = {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgb(128, 161, 223, 1)',
            },
            {
              offset: 1,
              color: 'rgba(235,235,235,0)',
            },
          ]),
        }
      }
      setOption(<Chart option={props.data} />)
    }
  }, [props.data])

  return <div>{option}</div>
}
