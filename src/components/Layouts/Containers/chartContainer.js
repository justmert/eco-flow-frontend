import { useState } from 'react'
import React from 'react'
import { useEffect } from 'react'
import CommitHistory from '../../Repository/CommitHistory/commitHistory'
import CodeFrequency from '../../Repository/CodeFrequency/codeFrequency'
import IssueActivity from '../../Repository/IssueActivity/issueActivity'
import PullRequestActivity from '../../Repository/PullRequestActivity/pullRequestActivity'
import StarActivity from '../../Repository/StarActivity/starActivity'
import IssueCount from '../../Repository/IssueCount/issueCount'
import PullRequestCount from '../../Repository/PullRequestCount/pullRequestCount'
import './containers.css'

/**
 * Creates a React component that renders the chart. Used to display data in the chart. This component is responsible for populating the chart with the data that is passed in the props.
 *
 * @param props - The props to use for the chart. data property
 *
 * @return { ReactElement } The chart component to be rendered on the page ( s ) of the React component
 */
export default function ChartContainer(props) {
  const [chart, setChart] = useState(null)
  useEffect(() => {
    // Sets the chart to the chart.
    if (props.chartType === 'commit_history') {
      setChart(<CommitHistory data={props.data} />)
      // Sets the chart to the chart.
    } else if (props.chartType === 'code_frequency') {
      setChart(<CodeFrequency data={props.data} />)
      // Set chart data to the chart
    } else if (props.chartType === 'issue_count') {
      setChart(<IssueCount data={props.data} />)
      // Set chart data to the chart.
    } else if (props.chartType === 'issue_activity') {
      setChart(<IssueActivity data={props.data} />)
      // Set chart data for the chart
    } else if (props.chartType === 'pull_request_activity') {
      setChart(<PullRequestActivity data={props.data} />)
      // Set chart data for chart type
    } else if (props.chartType === 'pull_request_count') {
      setChart(<PullRequestCount data={props.data} />)
      // Set the chart to star activity
    } else if (props.chartType === 'star_activity') {
      setChart(<StarActivity data={props.data} />)
    }
  }, [props])

  return (
    <div className="p-6 rounded-xl chart-container flex flex-col">
      <div className="w-auto mb-3">
        <h3 className="text-lg pl-2 text-gray-400 font-medium capitalize">
          {props.chartHeader}
        </h3>
      </div>
      <div>{chart}</div>
    </div>
  )
}
